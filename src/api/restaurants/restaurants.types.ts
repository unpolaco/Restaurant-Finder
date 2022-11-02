
export interface RestaurantsListDto {
  response: {
    geocode: {
      feature: {
        cc: string;
        name: string;
        displayName: string;
        matchedName: string;
        highlightedName: string;
        id: string;
        longId: string;
        slug: string;
        geometry: {
          bounds: {
            ne: Coordinates;
            sw: Coordinates;
          };
          center: Coordinates;
        };
      };
    };
    venues: VenueDto[];
  };
}

export interface VenueDto {
  id: string;
  hasPerk: boolean;
  name: string;
  refferalId: string;
  categories: CategoryDto[];
  location: {
    address: string;
    cc: string;
    city: string;
    country: string;
    lat: number;
    lng: number;
    postalCode: string;
    state: string;
    formattedAddress: string[];
  };
}

export interface CategoryDto {
  icon: {
    prefix: string;
    suffix: string;
  };
  id: string;
  name: string;
  pluralName: string;
  primary: boolean;
  shortName: string;
}

export interface Coordinates {
  lat: number;
  lng: number;
}

export interface RestaurantDto {
  response: {
    venue: {
      name: string;
      id: string;
      location: {
        address: string;
        cc: string;
        city: string;
        country: string;
      };
      price: {
        currency: string;
        message: string;
      };
      hours: {
        status: string;
        isOpen: boolean;
      };
      rating: string;
      ratingSignals: string;
      categories: CategoryDto[];
      description: string;
      contact: {
        formattedPhone: string;
        phone: string;
        facebookUsername: string;
      };
      url: string;
      shortUrl: string;
      bestPhoto: {
        prefix: string;
        suffix: string;
        height: number;
        width: number;
      };
    };
  };
}

export interface RestaurantsListFromDto {
  restaurantsList: Restaurant[];
  cityCenterPosition: number[];
  icon: string;
}

export interface Restaurant {
  name: string;
  address: {
    street: string;
    city: string;
  };
  lat: number;
  lng: number;
  latLng: Coordinates;
  id: string;
  category: string;
}

export interface SelectedRestaurantDto {
  response: {
    venue: {
      id: string;
      name: string;
      location: {
        city: string;
        address: string;
      };
      rating: string;
      ratingSignals: string;
      price: {
        message: string;
        currency: string;
      };
      description: string;
      hours: {
        status: string;
      };
      categories: CategoryDto[];
      contact: {
        phone: string;
        formattedPhone: string;
        facebookUsername: string;
      };
      url: string;
      shortUrl: string;
      bestPhoto: {
        prefix: string;
        suffix: string;
        width: string;
        height: string;
      };
      attributes: {
        groups: AttributesGroupDto[];
      };
    };
  };
}
interface AttributesGroupDto {
  type: string;
  name: string;
  summary: string;
  count: number;
  items: AttributeItemsDto[];
}
interface AttributeItemsDto {
  displayName: string;
  displayValue: string;
  priceTier: number;
}

export interface SelectedRestaurantFromDto {
  name: string;
  id: string;
  location: string;
  city: string;
  rating: string;
  ratingSignals: string;
  price: {
    priceText: string,
    currency: string
  }
  categories: RestaurantCategory[];
  features: Feature[];
  description: string;
  open: string;
  contact: ContactDetails;
  photo: string;
}
interface RestaurantCategory {
  name: string;
  icon: string;
}
interface Feature {
  name: string;
  items: Item[];
}
interface Item {
  itemValue: string;
}
interface ContactDetails {
  phone: string;
  facebook: string;
  url: string;
}
