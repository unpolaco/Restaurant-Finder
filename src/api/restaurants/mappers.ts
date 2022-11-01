import { RestaurantsListDto, RestaurantsListFromDto } from "./restaurants.types";

export const restaurantListMapper = (dto: RestaurantsListDto): RestaurantsListFromDto => {
  const restaurantsList = dto.response.venues.map((venue) => ({
    name: venue.name,
    address: {
      street: venue.location.formattedAddress[0],
      city: venue.location.formattedAddress[1],
    },
    lat: venue.location.lat,
    lng: venue.location.lng,
    latLng: {
      lat: venue.location.lat,
      lng: venue.location.lng,
    },
    id: venue.id,
    category:
      venue !== undefined
        ? venue.categories[0].name
        : "4bf58dd8d48988d110941735",
  }));
  const cityCenterPosition = [
    dto.response.geocode.feature.geometry.center.lat,
    dto.response.geocode.feature.geometry.center.lng,
  ];
  const iconPrefix = dto.response.venues[0].categories[0].icon.prefix;
  const iconSuffix = dto.response.venues[0].categories[0].icon.suffix;
  const icon = `${iconPrefix}64${iconSuffix}`;
  return {
    restaurantsList,
    cityCenterPosition,
    icon,
  };
};
