import React from 'react'
import L from 'leaflet'
import icon from '../img/map-pointer.svg';
import 'leaflet/dist/leaflet.css'
import styled from 'styled-components'

const MapWrapper = styled.div`
width: 70%;
height: 300px;
`

export default class Map extends React.Component {
  
  componentDidMount(){
    this.map = L.map('map', {
      center: this.props.cityCenterPosition,
      zoom: 12,
      zoomControl: false,
    });
    L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }, {
      detectRetina:true,
      maxZoom: 20,
      maxNativeZoom: 17,
    }).addTo(this.map);
    this.layer = L.layerGroup().addTo(this.map)

      let DefaultIcon = L.icon({
        iconUrl: icon,
        iconSize: [27, 36],
    });
    
    L.Marker.prototype.options.icon = DefaultIcon;
  }

  componentDidUpdate({ restaurantData }) {
    if (this.props.restaurantData !== restaurantData) {
      this.updateMarkers(this.props.restaurantData)
    }
  }
  updateMarkers(restaurantData) {
    this.layer.clearLayers();
    restaurantData.forEach(marker => {
      L.marker(marker.latLng, { title: marker.name}).addTo(this.layer);
    })
  }


  render() {    
    return (
      <MapWrapper id='map' cityCenterPosition={this.props.cityCenterPosition}>
      </MapWrapper>
    )
  }
}

