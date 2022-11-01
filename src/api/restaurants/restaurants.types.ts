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
    restaurantsList : Restaurant[],
    cityCenterPosition: number[],
    icon: string
  }

  export interface Restaurant {
    name: string;
    address: {
        street: string,
        city:string
    },
    lat: number,
    lng: number,
    latLng : Coordinates,
    id: string,
    category: string,
  }