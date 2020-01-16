import React, { Component } from 'react'
import Form from './components/Form'
// import Mapa from './components/Map'
// // import { Map, CircleMarker, TileLayer } from "react-leaflet";
// import cities from './components/cities'





export default class App extends Component {
state = {
  inputValue: "",

  name: "",
  adress: "",
  category: "",


  restaurantsData: [],
  isLoaded: false,
  restaurantNames: null ,
}

    
componentDidMount() {

}
handleSubmit = (e) => {
  e.preventDefault();

  const fourSquareUrl= "https://api.foursquare.com/v2/venues/explore?"
  const parameters = {
  client_id: "IEV0NGQ2WLUULDQ1TA0OD1UPUKZG0VTO3MYIKDN2MYHIKJ1E",
  client_secret: "SVPZ5HDAZK0JUFDNNVQBAWODV0FNG25YGM1EL5MB4SCSKRWD",
  query: "food",
  near: "Warsaw",
  v: 20201101,
}

    fetch(fourSquareUrl + new URLSearchParams(parameters))
    .then(res => res.json())
    .then(res => {
      console.log(res.response.groups[0].items);
      
      this.setState({
        restaurantsData: res.response.groups[0].items,
        isLoaded: true,
      })
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
