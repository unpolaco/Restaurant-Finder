import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import Form from "./components/Form";
import RestaurantCard from "./components/Restaurant_Card";
import RestaurantModal from "./components/Restaurant_Modal";
import { Title } from "./components/Title";
import Map from "./components/Map";
import categoryList from "./assets/category_list";
import GlobalStyle from "./styles/global_style";
import { theme } from "./styles/main_theme";
import { CategoryDto, FourSquarePlacesApiDto, FourSquareRestaurantDto, Restaurant, SelectedRestaurant, VenueDto } from "./App.types";

export const App: React.FC = () => {
  const [cityName, setCityName] = useState("");
  const [restaurants, setRestaurants] = useState<Restaurant[] | []>([]);
  const [cityCenterPosition, setCityCenterPosition] = useState([
    52.22977,
    21.01178,
  ]);
  const [icon, setIcon] = useState("");
  const [selectedRestaurant, setSelectedRestaurant] = useState("");
  const [selectedRestaurantId, setSelectedRestaurantId] = useState("");
  const [selectedRestaurantData, setSelectedRestaurantData] = useState<SelectedRestaurant | {}>({});
  const [modalIsVisible, setModalIsVisible] = useState(false);

  const getDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month =
      today.getMonth() < 10 ? `0${today.getMonth()}` : today.getMonth() + 1;
    const day = today.getDate() < 10 ? `0${today.getDate()}` : today.getDate();
    return `${year}${month}${day}`;
  };

  function loadData(id: string[], city = "Warsaw") {
    const fourSquareUrl = "https://api.foursquare.com/v2/venues/search?";
    const parameters = {
      client_id: "IEV0NGQ2WLUULDQ1TA0OD1UPUKZG0VTO3MYIKDN2MYHIKJ1E",
      client_secret: "SVPZ5HDAZK0JUFDNNVQBAWODV0FNG25YGM1EL5MB4SCSKRWD",
      near: city,
      categoryId: id,
      limit: 100,
      v: getDate(),
    };

    //@ts-ignore
    fetch(fourSquareUrl + new URLSearchParams(parameters))
      .then((res) => res.json())
      .then((res: FourSquarePlacesApiDto) => {
        console.log(res);

        if (res.response.venues) {
          setCityCenterPosition([
            res.response.geocode.feature.geometry.center.lat,
            res.response.geocode.feature.geometry.center.lng,
          ]);
          setRestaurants(
            res.response.venues.map((el) => ({
                  name: el.name,
                  address: {
                    street: el.location.formattedAddress[0],
                    city: el.location.formattedAddress[1],
                  },
                  lat: el.location.lat,
                  lng: el.location.lng,
                  latLng: {
                    lat: el.location.lat,
                    lng: el.location.lng,
                  },
                  id: el.id,
                  category:
                    el !== undefined
                      ? el.categories[0].name
                      : "4bf58dd8d48988d110941735",
                }))
          );
          setIcon(
            `${res.response.venues[0].categories[0].icon.prefix}64${res.response.venues[0].categories[0].icon.suffix}`
          );
        } else {
          alert("Write a correct city name");
        }
      });
  }
  function loadSelectionData(id: string) {
    const fourSquareUrl = `https://api.foursquare.com/v2/venues/${id}?`;
    const parameters = {
      client_id: "IEV0NGQ2WLUULDQ1TA0OD1UPUKZG0VTO3MYIKDN2MYHIKJ1E",
      client_secret: "SVPZ5HDAZK0JUFDNNVQBAWODV0FNG25YGM1EL5MB4SCSKRWD",
      v: getDate(),
    };
    fetch(fourSquareUrl + new URLSearchParams(parameters))
      .then((res) => res.json())
      .then((res) => {
        if (res.response.venue) {
          const data = res.response.venue;
          setSelectedRestaurantData({
            name: data.name.toUpperCase(),
            id: data.id,
            location: data.location.address,
            city: data.location.city,
            rating: data.rating,
            ratingSignals: data.ratingSignals,
            priceText: data.price.message,
            price: data.price.currency,
            categories: data.categories.map((category: CategoryDto) => {
              return {
                name: category.shortName,
                icon: `${category.icon.prefix}32${category.icon.suffix}`,
              };
            }),
            // features: data.attributes?.groups?.map((attr) => {
            //   const items = [];
            //   items.push(
            //     ...attr.items?.map((item) => {
            //       return { itemValue: item.displayValue };
            //     })
            //   );
            //   return {
            //     name: attr.name,
            //     items: items,
            //   };
            // }),
            description: data.description,
            open: data.hours.status,
            contact: {
              phone:
                data.contact.formattedPhone || data.contact.phone,
              facebook: data.contact.facebookUsername,
              url: data.url || data.shortUrl,
            },
            photo: `${data.bestPhoto.prefix}${data.bestPhoto.width}x${data.bestPhoto.height}${data.bestPhoto.suffix}`
          });
          setModalIsVisible(true);
        } else {
          alert(
            "Your query limit has run out today... Please come back tomorrow!"
          );
        }
      });
  }
  //@ts-ignore
  const findCategoryId = (e) => {
    const categoryId = categoryList
    .filter((el) => el.name === e.target[1].value)
    .map((el) => el.id);
    return categoryId;
  };
  
  
  //@ts-ignore
  const handleSubmit = (e) => {
    e.preventDefault();
    const inputCityName = e.target[0].value;
    const categoryId = findCategoryId(e);
    loadData(categoryId, inputCityName);
    setCityName(inputCityName);
  };

  const handleSelectRestaurant = (e: React.ChangeEvent<HTMLInputElement> ) => {
    const selectedCardName = e.currentTarget.getAttribute("name");
    const selectedCardId = e.currentTarget.getAttribute("id");
    //@ts-ignore
    loadSelectionData(selectedCardId);
    //@ts-ignore
    setSelectedRestaurant(selectedCardName);
    //@ts-ignore
    setSelectedRestaurantId(selectedCardId);
  };
  //@ts-ignore
  const handleSelectMarker = (e) => {
    console.log(typeof e);
    setSelectedRestaurant(e.target.title);}

  const handleCloseModal = () => {
    setModalIsVisible(false);
  }
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <MainWrapper>
          <Title>
            Where do you want to go tonight in {cityName ? cityName : "Warsaw"}{" "}
            ?
          </Title>
          <Menu>
          {/* @ts-ignore */}
            <Form submit={handleSubmit} />
            {modalIsVisible ? (
              <RestaurantModal
                onCloseModal={handleCloseModal}
                selectedRestaurantData={selectedRestaurantData}
              />
            ) : (
              <RestaurantCard
                restaurantData={restaurants}
                onSelectRestaurant={handleSelectRestaurant}
                icon={icon}
              />
            )}
          </Menu>
          {/* <Map
            cityCenterPosition={cityCenterPosition}
            restaurantData={restaurants}
            onSelectMarker={handleSelectMarker}
                //@ts-ignore

            selectedRestaurant={selectedRestaurant}
          /> */}
        </MainWrapper>
      </ThemeProvider>
    </>
  );
};

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  min-width: 850px;
  margin-left: 20px;
`;
const Menu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-content: left;
  width: 60%;
`;
