import React, { Component } from 'react';
import styled from 'styled-components';
import Form from './components/Form';
import Categories from './components/Categories';
import RestaurantCard from './components/RestaurantCard'
import Map from './components/Map'
import categoryList from './utilities/CategoryList';


class App extends Component {
state = {
  inputValue: "",
  isLoaded: false,
  restaurants: [],
  selectedCategoryId: "4bf58dd8d48988d154941735",
  cityCenterPosition: [58, 16],
};

handleSubmit = (e) => {
  e.preventDefault();
  
  const fourSquareUrl= "https://api.foursquare.com/v2/venues/search?"
  const parameters = {
  client_id: "IEV0NGQ2WLUULDQ1TA0OD1UPUKZG0VTO3MYIKDN2MYHIKJ1E",
  client_secret: "SVPZ5HDAZK0JUFDNNVQBAWODV0FNG25YGM1EL5MB4SCSKRWD",
  near: this.state.inputValue,
  categoryId: this.state.selectedCategoryId,
  limit: 100,
  v: 20202301,
  }
  console.log(fourSquareUrl + new URLSearchParams(parameters));
    fetch(fourSquareUrl + new URLSearchParams(parameters))
    .then(res => res.json())
    .then(res => {
      this.setState(prevState => ({
        isLoaded: true,
        cityCenterPosition: [res.response.geocode.feature.geometry.center.lat, res.response.geocode.feature.geometry.center.lng],
        restaurants: res.response.venues.map(el => ({
            name: el.name,
            address: {
                  street: el.location.formattedAddress[0],
                  city:el.location.formattedAddress[1],
                     },
            lat: el.location.lat,
            lng: el.location.lng,
            latLng: {
              lat: el.location.lat, 
              lng: el.location.lng,
            },  
            category: el.categories[0].name,

        }))
      }))      
    })
    .catch(error => console.log("Błąd: ", error)); 
    }
  handleInputChange = (e) => {
    this.setState({
      inputValue: e.target.value,
    })
  }

  handleChangeCategory = (e) => {
            const element = categoryList.filter((el) => el.name === e.target.value ).map(el=> el.id).join(", ")
      this.setState({
        selectedCategoryId: element
      })
  }
  
  render() {
    
    return (
   <GlobalStyle>
        <Title>
          Where do you want to go tonight in {this.state.inputValue ? this.state.inputValue : 'Warsaw'} ?
        </Title>
            <Categories 
                categories={categoryList}
                change={this.handleChangeCategory}
                value={categoryList}>
            </Categories>

        <Menu>
            <Text>
              Looking for another city?
            </Text>
            <Form 
                value={this.state.inputValue} 
                change={this.handleInputChange} 
                submit={this.handleSubmit}>
            </Form>

            <Options></Options>
            <RestaurantCard restaurantData={this.state.restaurants}>
            </RestaurantCard>

        </Menu>
        {/* <MapWrapper> */}
          <Map cityCenterPosition={this.state.cityCenterPosition} restaurantData={this.state.restaurants}>         
          </Map>
        {/* </MapWrapper> */}
      </GlobalStyle>
    )
  };
}

const GlobalStyle = styled.div`
margin: 0;
padding: 0;
font-size: 16px;
font-family: 'Roboto', sans-serif;
display: flex;
flex-wrap: wrap;
justify-content: flex-start;
height: 100vh;
/* border: 1px solid; */
`
const Title = styled.p`
font-family: 'Ibarra Real Nova', serif;
font-size: 2.5em;
text-align: center;
/* border: 1px solid; */
flex-basis: 100%;
padding: 20px 0;
margin: 0;
height: 50px;
`
const Menu = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
width: 25%;
padding: 5px;
/* border: 1px solid; */
`

const Text = styled.p`
/* font-family: 'Roboto', sans-serif; */
padding-left: 30px;
/* border: 1px solid; */
`
const Options = styled.div`
/* border: 1px solid; */
`
export default App

// font-family: 'Roboto', sans-serif;
// font-family: 'Lato', sans-serif;



