import { SelectedRestaurantDto, SelectedRestaurantFromDto, RestaurantsListDto, RestaurantsListFromDto } from "./restaurants.types";

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

export const selectedRestaurantMapper = (dto: SelectedRestaurantDto): SelectedRestaurantFromDto => {
  const data = dto.response.venue
  const photoPrefix = data.bestPhoto.prefix
  const photoSuffix = data.bestPhoto.suffix
  const photoWidth = data.bestPhoto.width
  const photoHeight = data.bestPhoto.height
  return {
    name: data.name,
    id: data.id,
    location: data.location.address,
    city: data.location.city,
    rating: data.rating,
    ratingSignals: data.ratingSignals,
    price: {
      priceText: data.price.message,
      currency: data.price.currency
    },
    categories: data.categories.map((category) => {
      return {
        name: category.shortName,
        icon: `${category.icon.prefix}32${category.icon.suffix}`,
      };
    }),
    features: data.attributes?.groups?.map((attr) => {
      const items = [];
      items.push(
        ...attr.items?.map((item) => {
          return { itemValue: item.displayValue };
        })
      );
      return {
        name: attr.name,
        items: items,
      };
    }),
    description: data.description,
    open: data.hours.status,
    contact: {
      phone: data.contact.formattedPhone || data.contact.phone,
      facebook: data.contact.facebookUsername,
      url: data.url || data.shortUrl,
    },
  photo: `${photoPrefix}${photoWidth}x${photoHeight}${photoSuffix}`
}
};
