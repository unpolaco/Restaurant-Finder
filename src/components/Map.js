import React from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
// import styled from 'styled-components';
import { Map, Marker, Popup, TileLayer } from 'leaflet'






export default function Mapa() {


  return (
    <div>
      <Map style={{ height: "600px", width: "100%" }}
          zoom={1}
          center={[-0.09, 51.505]}>
          <TileLayer url="http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />


      </Map>
    </div>
  )
}


// const Map = (props) => {

//   const position = [51.505, -0.09]
  
//   return (
//     <Map center={position} zoom={13}>
//     <TileLayer
//       url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//       attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
//     />
//   )
// }



// const position = [51.505, -0.09]
// const map = (
//   <Map center={position} zoom={13}>
//     <TileLayer
//       url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//       attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
//     />
//     <Marker position={position}>
//       <Popup>A pretty CSS3 popup.<br />Easily customizable.</Popup>
//     </Marker>
//   </Map>
// )

// export default Map;
