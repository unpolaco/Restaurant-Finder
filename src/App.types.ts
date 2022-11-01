import { Coordinates } from "./api/restaurants/restaurants.types";

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

export interface SelectedRestaurant {
    name: string,
    id: string,
    location?:string,
    city: string,
    rating?: string,
    ratingSignals?: string,
    priceText?: string,
    price?: string,
    categories: Category[],
    description?: string,
    open?: string,
    contact: {
        phone: string,
        facebook: string,
        url: string
    },
    photo: string
}

interface Category {
    name: string,
    icon: string
}
