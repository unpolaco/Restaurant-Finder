import React, { useState } from "react";
import { RestaurantList } from "./components/RestaurantList/RestaurantList";
import { Map } from "./components/Map/Map";
import { useRestaurantList } from "./hooks/useRestaurantList";
import { useSelectedRestaurant } from "./hooks/useSelectedRestaurant";
import { Form } from "./components/Form/Form";
import { useSearch } from "./hooks/useSearch";
import { LeafletMouseEvent } from "leaflet";
import { Header } from "./components/Header/Header";
import { MainWrapper, Menu } from "./App.styles";

export const App: React.FC = () => {
  const [selectedRestaurant, setSelectedRestaurant] = useState<{}>({});

  const { cityPosition, restaurantsList } = useRestaurantList();
  // const { selectedRestaurant } = useSelectedRestaurant();

  //@ts-ignore
  const handleSelectRestaurant = (e) => {
    //@ts-ignore
    const selectedCardName = e.currentTarget.getAttribute("name");
    //@ts-ignore
    const selectedCardId = e.currentTarget.getAttribute("id");
    //@ts-ignore
    loadSelectionData(selectedCardId);
    //@ts-ignore
    setSelectedRestaurant(selectedCardName);
    //@ts-ignore
    setSelectedRestaurantId(selectedCardId);
  };

  const handleSelectMarker = (e: LeafletMouseEvent) => {
    setSelectedRestaurant(e.target.title);
  };


  return (
    <MainWrapper>
      <Header />
      <Menu>
        <Form />

        <RestaurantList />


      </Menu>
      <Map
        cityCenterPosition={cityPosition}
        restaurantData={restaurantsList}
        onSelectMarker={handleSelectMarker}
      />
    </MainWrapper>
  );
};

