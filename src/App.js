import React, { Component } from 'react';
import Form from './components/Form';
import styled from 'styled-components';




class App extends Component {
state = {
  inputValue: "",
  isLoaded: false,
  restaurants: [],
};

categoriesId = {
  'Ethiopian Restaurant': '4bf58dd8d48988d10a941735',
  'Chinese Restaurant': '4bf58dd8d48988d145941735',
  'Indonesian Restaurant': '4deefc054765f83613cdba6f',
}


handleSubmit = (e) => {
  e.preventDefault();
  
  const fourSquareUrl= "https://api.foursquare.com/v2/venues/search?"
  const parameters = {
  client_id: "IEV0NGQ2WLUULDQ1TA0OD1UPUKZG0VTO3MYIKDN2MYHIKJ1E",
  client_secret: "SVPZ5HDAZK0JUFDNNVQBAWODV0FNG25YGM1EL5MB4SCSKRWD",
  near: this.state.inputValue ,
  categoryId: "4bf58dd8d48988d10a941735",


  limit: 100,
  // radius: 1000,
  v: 20201101,

  


  }
    fetch(fourSquareUrl + new URLSearchParams(parameters))
    .then(res => res.json())
    .then(res => {
      console.log(res.response.venues);
      console.log(fourSquareUrl + new URLSearchParams(parameters));
      
      this.setState(prevState => ({
        isLoaded: true,
        restaurants: res.response.venues.map(el => ({
            name: el.name,
            address: {
                  street: el.location.formattedAddress[0],
                  city:el.location.formattedAddress[1],
            },
            lat: el.location.lat,
            lng: el.location.lng,  
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




  render() {
    return (


   <GlobalStyle>
        <Title>
          Where you want to go tonight in Warsaw?
        </Title>
        <Menu>

            <Text>
              Looking for another city?
            </Text>
            <Form 
                value={this.state.inputValue} 
                change={this.handleInputChange} 
                submit={this.handleSubmit}>
            </Form>

            <Categories>
                  <option>Kuchnia gruzińska</option>
                  <option defaultValue >Kuchnia Marokańska</option>
                  <option>Kuchnia inna</option>
            </Categories>
            <Options></Options>

                {this.state.restaurants.map(el => (
                  <CardWrapper>
                    <RestaurantCardText name>{el.name}</RestaurantCardText>
                    <RestaurantCardText >{el.address.street}</RestaurantCardText> 
                  </CardWrapper>
                  ))}



        </Menu>
        <Map></Map>
      </GlobalStyle>
      
    )
  };

}


const GlobalStyle = styled.div`
margin: 0;
padding: 0;
font-size: 10px;
font-family: 'Roboto', sans-serif;
display: flex;
flex-wrap: wrap;
justify-content: flex-start;
height: 100vh;
border: 1px solid;
`

const Title = styled.p`
font-family: 'Ibarra Real Nova', serif;
font-size: 4em;
text-align: center;
border: 1px solid;
flex-basis: 100%;
padding: 10px 0;
margin: 0;
height: 70px;
`
const Menu = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;

border: 1px solid;
`

const CardWrapper = styled.div`
border: 1px solid;
margin: 3px 0;
background-color: #ffc107;
color: white;
width: 20vw;
text-align: center;
`

const RestaurantCardText = styled.p`
font-family: 'Roboto', sans-serif;
font-size: ${(props) => props.name ? '1.4em' : '1em'};
font-weight: ${(props) => props.name ? 'semibold' : ''};
line-height: 0.5em;
`

const Text = styled.p`
font-family: 'Ibarra Real Nova', serif;
font-size: 1.4em;
text-align: center;
border: 1px solid;
`

const Categories = styled.select`
font-family: 'Roboto', sans-serif;
border: solid 1px #dbdbdb;
font-size: 1.4em;
cursor: text;
font-weight: 300;
text-align: center;
background: #fafafa;
margin: 20px 0 ;
border: 1px solid;

`

const Map = styled.div`
height: 500px;
border: 1px solid;
`
const Options = styled.div`
border: 1px solid;
`




export default App

// font-family: 'Roboto', sans-serif;
// font-family: 'Lato', sans-serif;



// categoriesID:
// vegetarian "4bf58dd8d48988d1d3941735"
/*
Vegetarian / Vegan Restaurant
4bf58dd8d48988d1d3941735

Gluten-free Restaurant
4c2cd86ed066bed06c3c5209


Ethiopian Restaurant
4bf58dd8d48988d10a941735

Chinese Restaurant
4bf58dd8d48988d145941735

Indonesian Restaurant
4deefc054765f83613cdba6f

Japanese Restaurant
4bf58dd8d48988d111941735

Korean Restaurant
4bf58dd8d48988d113941735

Thai Restaurant
4bf58dd8d48988d149941735

Vietnamese Restaurant
4bf58dd8d48988d14a941735

Cuban Restaurant
4bf58dd8d48988d154941735

Caucasian Restaurant
5293a7d53cf9994f4e043a45

Bulgarian Restaurant
56aa371be4b08b9a8d5734f3

Czech Restaurant
52f2ae52bcbc57f1066b8b81


French Restaurant
4bf58dd8d48988d10c941735

German Restaurant
4bf58dd8d48988d10d941735

Greek Restaurant
4bf58dd8d48988d10e941735

Hungarian Restaurant
52e81612bcbc57f1066b79fa

Indian Restaurant
4bf58dd8d48988d10f941735

Italian Restaurant
4bf58dd8d48988d110941735

Argentinian Restaurant
4bf58dd8d48988d107941735

Brazilian Restaurant
4bf58dd8d48988d16b941735

Mediterranean Restaurant
4bf58dd8d48988d1c0941735

Mexican Restaurant
4bf58dd8d48988d1c1941735

Lebanese Restaurant
58daa1558bbb0b01f18ec1cd

Israeli Restaurant
56aa371be4b08b9a8d573529

Pakistani Restaurant
52e81612bcbc57f1066b79f8

Polish Restaurant
52e81612bcbc57f1066b7a04

Portuguese Restaurant
4def73e84765ae376e57713a

Russian Restaurant
5293a7563cf9994f4e043a44

Scandinavian Restaurant
4bf58dd8d48988d1c6941735

Spanish Restaurant
4bf58dd8d48988d150941735

Turkish Restaurant
4f04af1f2fb6e1c99f3db0bb

Ukrainian Restaurant
52e928d0bcbc57f1066b7e96

*/