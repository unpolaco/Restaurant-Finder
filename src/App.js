import React, { Component } from 'react'
import Form from './components/Form'
// import Mapa from './components/Map'
// // import { Map, CircleMarker, TileLayer } from "react-leaflet";
// import cities from './components/cities'





export default class App extends Component {
state = {
  inputValue: "",
  venues: {
  name: "",
  adress: "",
  category: "",
},

  restaurantsData: [],
  isLoaded: false,
  restaurants: [
    {name:'',
      address: '',
      lat: '',
      lng: '',

  }
  ] ,
};

    

handleSubmit = (e) => {
  e.preventDefault();
  console.log(this.state.inputValue);
  const fourSquareUrl= "https://api.foursquare.com/v2/venues/explore?"
  const parameters = {
  client_id: "IEV0NGQ2WLUULDQ1TA0OD1UPUKZG0VTO3MYIKDN2MYHIKJ1E",
  client_secret: "SVPZ5HDAZK0JUFDNNVQBAWODV0FNG25YGM1EL5MB4SCSKRWD",
  query: "food",
  near: this.state.inputValue ,
  v: 20201101,
}


    fetch(fourSquareUrl + new URLSearchParams(parameters))
    .then(res => res.json())
    .then(res => {
      console.log(res.response.groups[0].items);
      console.log(fourSquareUrl + new URLSearchParams(parameters));
      
      this.setState(prevState => ({
        restaurantsData: res.response.groups[0].items,
        isLoaded: true,
        restaurants: res.response.groups[0].items.map(el => (
            {name: el.venue.name,
             address: {
               ulica: el.venue.location.formattedAddress[0],
               miasto:el.venue.location.formattedAddress[1],
               kraj: el.venue.location.formattedAddress[3],
              },
              lat: el.venue.location.lat,
              lng: el.venue.location.lng,  
              category: el.venue.categories[0].name,

  }
   ))
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
      <div>
        <Form 
        value={this.state.inputValue} 
        change={this.handleInputChange}
        submit={this.handleSubmit} />

      </div>
    )
  }
}
