import { Category, CategoryDto } from "./restaurants.types";

export interface SelectedRestaurantDto {
  response: {
    fsq_id: string;
    name: string;
    location: {
      address: string;
      cross_street: string;
      locality: string;
      postcode: string;
      region: string;
      country: string;
      formatted_address: string;
    };
    related_places: {
      parent?: {
        fsq_id: string;
        name: string;
      };
    };
    categories: CategoryDto[];
    timezone: string;
    description?: string;
    tel?: string;
    email?: string;
    website?: string;
    social_media: {
      facebook_id?: string;
      instagram?: string;
      twitter?: string;
    };
    photos: PhotoDto[];
    hours: {
      display?: string;
      is_local_holiday?: boolean;
      open_now?: boolean;
      regular?: HoursDto[];
      seasonal?: HoursDto[];
    };
    rating: number;
    popularity: number;
    price: number;
    menu?: string;
    date_closed?: string;
    tips: TipDto[];
    tastes?: string[];
    features?: FeaturesDto;
  };
}
export interface PhotoDto {
  id: string;
  created_at: string;
  prefix: string;
  suffix: string;
  width: number;
  height: number;
  classifications?: string[];
}

export interface HoursDto {
  close: string;
  day: number;
  open: string;
}

export interface TipDto {
  created_at: string;
  text: string;
  lang?: string;
  id?: string
  agree_count?: number
  disagree_count?: number
}

export interface FeaturesDto {
  payment?: {
    credit_cards?: {
      accepts_credit_cards?: boolean;
      visa?: boolean;
      master_card?: boolean;
    };
  };
  food_and_drink?: {
    alcohol?: {
      beer?: boolean;
      byo?: boolean;
      cocktails?: boolean;
      full_bar?: boolean;
      wine?: boolean;
    };
  };
  meals?: {
    breakfast?: boolean;
    brunch?: boolean;
    lunch?: boolean;
    happy_hour?: boolean;
    dessert?: boolean;
    dinner?: boolean;
  };
  services?: {
    delivery?: boolean;
    takeout?: boolean;
    drive_through?: boolean;
    dine_in?: {
      reservations?: boolean;
      online_reservations?: boolean;
      groups_only_reservations?: boolean;
    };
  };
  amenities?: {
    restroom?: boolean;
    smoking?: boolean;
    jukebox?: boolean;
    music?: boolean;
    live_music?: boolean;
    private_room?: boolean;
    outdoor_seating?: boolean;
    tvs?: boolean;
    atm?: boolean;
    coat_check?: boolean;
    wheelchair_accessible?: boolean;
    parking?: {
      parking?: boolean;
      street_parking?: boolean;
      valet_parking?: boolean;
      public_lot?: boolean;
      private_lot?: boolean;
    };
  };
}

export interface SelectedRestaurant {
  id: string;
  name: string;
  location: {
    address?: string;
    city?: string;
    country?: string;
    formattedAddress?: string;
  };
  relatedPlaces?: {
    parent?: {
      id?: string;
      name?: string;
    };
  };
  categories: Category[];
  timezone?: string;
  description?: string;
  tel?: string;
  email?: string;
  website?: string;
  socialMedia?: {
    facebookId?: string;
    instagram?: string;
    twitter?: string;
  };
  photos: Photo[];
  hours?: {
    openNow?: boolean;
    regular?: Hours[];
    seasonal?: Hours[];
  };
  rating?: number;
  popularity?: number;
  price?: number;
  menu?: string;
  dateClosed?: string;
  tips?: Tip[];
  tastes?: string[];
  features?: Features;
}

export interface Photo {
  id: string;
  createdAt: string;
  photoSrc: string;
  photoSrcSmall: string;
  classifications?: string[];
}

export interface Hours {
  close: string;
  day: number;
  open: string;
}

export interface Tip {
  createdAt: string;
  text: string;
  lang?: string;
  id?: string
  agreeCount?: number
  disagreeCount?: number
}

export interface Features {
  payment?: {
    creditCards?: {
      "accepts credit cards"?: boolean;
      visa?: boolean;
      "master card"?: boolean;
    };
  };
  foodAndDrink?: {
    alcohol?: {
      beer?: boolean;
      cocktails?: boolean;
      "full bar"?: boolean;
      wine?: boolean;
    };
  };
  meals?: {
    breakfast?: boolean;
    brunch?: boolean;
    lunch?: boolean;
    "happy hour"?: boolean;
    dessert?: boolean;
    dinner?: boolean;
  };
  services?: {
    delivery?: boolean;
    takeout?: boolean;
    "drive through"?: boolean;
    dine_in?: {
      reservations?: boolean;
      "online reservations"?: boolean;
      "groups only reservations"?: boolean;
    };
  };
  amenities?: {
    restroom?: boolean;
    smoking?: boolean;
    jukebox?: boolean;
    music?: boolean;
    "live music"?: boolean;
    "private room"?: boolean;
    "outdoor seating"?: boolean;
    "TV's"?: boolean;
    ATM?: boolean;
    "coat check"?: boolean;
    "wheelchair accessible"?: boolean;
    parking?: {
      parking?: boolean;
      "street parking"?: boolean;
      "valet parking"?: boolean;
      "public lot"?: boolean;
      "private lot"?: boolean;
    };
  };
}
