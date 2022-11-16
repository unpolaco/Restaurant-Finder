import styled from "styled-components";
import "leaflet/dist/leaflet.css";
import { MapContainer } from "react-leaflet";

export const MapWrapper = styled(MapContainer)`
  position: fixed;
  float: right;
  width: 700px;
  height: 700px;
  bottom: -100px;
  right: -100px;
  overflow: hidden;
  border-radius: 350px;
  z-index: 0;
  @media (min-width: 1024px) {
    position: absolute;
    top: 150px;
    left: 600px;
  }
  @media (max-width: 500px) {
    position: fixed;
    bottom: -100px;
    width: 90vw;
    height: 90vw;
  }
`;
