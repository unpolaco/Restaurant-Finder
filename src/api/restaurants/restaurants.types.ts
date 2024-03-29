export interface RestaurantsListDto {
    context: {geo_bounds: CityPosition}
    results: RestaurantGeneralDto[];
  };

export interface RestaurantGeneralDto {
  fsq_id: string;
  name: string;
  timezone: string;
  link: string;
  categories: CategoryDto[];
  location: {
    country: string;
    cross_street: string;
    formatted_address: string;
    locality: string;
    postcode: string;
    region: string;
    address: string;
  };
  geocodes: {
    main: Coordinates;
  };
}

export interface CategoryDto {
  icon: {
    prefix: string;
    suffix: string;
  };
  id: number;
  name: string;
}
export interface Category {
  categoryIcon: string;
  categoryId: number;
  categoryName: string;
}

export interface Coordinates {
  latitude: number;
  longitude: number;
}

export interface CityPosition {
  circle: {
    center: Coordinates;
    radius: number;
  };
}

export interface RestaurantsList {
  cityPosition: CityPosition;
  restaurantsList: RestaurantGeneral[];
}

export interface RestaurantGeneral {
  name: string;
  restaurantId: string;
  timezone: string;
  link: string;
  categories: Category[];
  location: {
    country: string;
    crossStreet: string;
    formattedAddress: string;
    locality: string;
    postcode: string;
    region: string;
    address: string;
  };
  geocodes: {
    main: Coordinates;
  };
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
