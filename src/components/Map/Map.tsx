import React from "react";
import "leaflet/dist/leaflet.css";
import { TileLayer, Marker, Tooltip, useMap } from "react-leaflet";
import { MapWrapper } from "./Map.styles";
import { restaurantMarker } from "./Marker/Marker";
import {
  CityPosition,
  RestaurantGeneral,
} from "../../api/restaurants/restaurants.types";
import { LeafletMouseEvent } from "leaflet";
import { mapboxUrl } from "../../consts/urls.consts";
import { MAPBOX_TOKEN } from "../../consts/API_KEYS";

interface MapParams {
  cityCenterPosition: CityPosition;
  onSelectMarker: (e: LeafletMouseEvent) => void;
  restaurantData?: RestaurantGeneral[];
}
interface MapCenter {
  lat: number;
  lng: number;
}

export const Map: React.FC<MapParams> = ({
  cityCenterPosition,
  onSelectMarker,
  restaurantData,
}) => {
  //TODO add to mapper
  const mapCenter: MapCenter = {
    lat: cityCenterPosition.circle.center.latitude,
    lng: cityCenterPosition.circle.center.longitude,
  };

  interface ChangeViewParams {
    center: MapCenter;
    zoom: number;
  }

  
  const ChangeView = ({ center, zoom }: ChangeViewParams) => {
    const map = useMap();
    map.flyTo(center, zoom, { duration: 3 });
    return null;
  };

  return (
    <MapWrapper center={mapCenter} zoom={12} zoomControl={false}>
      <ChangeView center={mapCenter} zoom={12} />
      <TileLayer url={mapboxUrl + MAPBOX_TOKEN} />
      {restaurantData &&
        restaurantData.map((restaurant) => (
          <Marker
            key={restaurant.restaurantId}
            eventHandlers={{ click: (e) => onSelectMarker(e) }}
            icon={restaurantMarker}
            //TODO add to mapper
            position={{
              lat: restaurant.geocodes.main.latitude,
              lng: restaurant.geocodes.main.longitude,
            }}
          >
            <Tooltip>{restaurant.name}</Tooltip>
          </Marker>
        ))}
    </MapWrapper>
  );
};
