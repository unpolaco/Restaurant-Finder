import { PHOTO_SIZE } from "../../consts/photoSize";
import {
  RestaurantsListDto,
  RestaurantsList,
  CategoryDto,
} from "./restaurants.types";
import {
  SelectedRestaurantDto,
  SelectedRestaurant,
  PhotoDto,
} from "./selectedRestaurant.types";

export const restaurantListMapper = (
  dto: RestaurantsListDto
): RestaurantsList => {
  const restaurantsList = dto.results.map((restaurant) => ({
    name: restaurant.name,
    restaurantId: restaurant.fsq_id,
    timezone: restaurant.timezone,
    link: restaurant.link,
    location: {
      country: restaurant.location.country,
      crossStreet: restaurant.location.cross_street,
      formattedAddress: restaurant.location.formatted_address,
      locality: restaurant.location.locality,
      postcode: restaurant.location.postcode,
      region: restaurant.location.region,
      address: restaurant.location.address,
    },
    categories: restaurant.categories.map((category: CategoryDto) => {
      return {
        categoryName: category.name,
        categoryId: category.id,
        categoryIcon: category.icon.prefix + category.icon.suffix,
      };
    }),
    geocodes: restaurant.geocodes,
  }));
  const cityPosition = dto.context.geo_bounds;
  return {
    restaurantsList,
    cityPosition,
  };
};

export const selectedRestaurantMapper = (
  dto: SelectedRestaurantDto
): SelectedRestaurant => {
  const data = dto.response;
  return {
    id: data.id,
    name: data.name,
    location: {
      address: data.location.address,
      city: data.location.city,
      country: data.location.country,
      formattedAddress: data.location.formatted_address,
    },
    relatedPlaces: {
      parent: {
        id: data.related_places.parent.fsq_id,
        name: data.related_places.parent.name,
      },
    },
    categories: data.categories.map((category: CategoryDto) => {
      return {
        categoryName: category.name,
        categoryId: category.id,
        categoryIcon: category.icon.prefix + category.icon.suffix,
      };
    }),
    timezone: data.timezone,
    description: data.description,
    tel: data.tel,
    email: data.email,
    website: data.website,
    socialMedia: {
      facebookId: data.social_media.facebook_id,
      instagram: data.social_media.instagram,
      twitter: data.social_media.twitter,
    },
    photos: data.photos.map((photo: PhotoDto) => {
      const photoPrefix = photo.prefix;
      const photoSuffix = photo.suffix;
      const photoWidth = photo.width;
      const photoHeight = photo.height;
      const photoSize = () => {
        if (photoHeight > PHOTO_SIZE.BIG && photoWidth > PHOTO_SIZE.BIG) {
          return `${PHOTO_SIZE.BIG}x${PHOTO_SIZE.BIG}`;
        } else {
          return "original";
        }
      };
      return {
        id: photo.id,
        createdAt: photo.created_at,
        photoSrcSmall: `${photoPrefix}${PHOTO_SIZE.SMALL}x${PHOTO_SIZE.SMALL}${photoSuffix}`,
        photoSrc: `${photoPrefix}${photoSize}${photoSuffix}`,
        classifications: photo.classifications,
      };
    }),
    hours: {
      openNow: data.hours.open_now,
      regular: data.hours.regular,
      seasonal: data.hours.seasonal,
    },
    rating: data.rating,
    popularity: data.popularity,
    price: data.price,
    menu: data.menu,
    dateClosed: data.date_closed,
    tips: data.tips.map((tip) => {
      return {
        createdAt: tip.created_at,
        text: tip.text,
        lang: tip.lang,
        id: tip.id,
        agreeCount: tip.agree_count,
        disagreeCount: tip.disagree_count,
      };
    }),
    tastes: data.tastes,
    features: {
      payment: {
        creditCards: {
          "accepts credit cards":
            data.features.payment.credit_cards.accepts_credit_cards,
          visa: data.features.payment.credit_cards.visa,
          "master card": data.features.payment.credit_cards.master_card,
        },
      },
      foodAndDrink: {
        alcohol: {
          beer: data.features.food_and_drink.alcohol.beer,
          cocktails: data.features.food_and_drink.alcohol.cocktails,
          "full bar": data.features.food_and_drink.alcohol.full_bar,
          wine: data.features.food_and_drink.alcohol.wine,
        },
      },
      meals: {
        breakfast: data.features.meals.breakfast,
        brunch: data.features.meals.brunch,
        lunch: data.features.meals.lunch,
        "happy hour": data.features.meals.happy_hour,
        dessert: data.features.meals.dessert,
        dinner: data.features.meals.dinner,
      },
      services: {
        delivery: data.features.services.delivery,
        takeout: data.features.services.takeout,
        "drive through": data.features.services.drive_through,
        dine_in: {
          reservations: data.features.services.dine_in.reservations,
          "online reservations":
            data.features.services.dine_in.online_reservations,
          "groups only reservations":
            data.features.services.dine_in.groups_only_reservations,
        },
      },
      amenities: {
        restroom: data.features.amenities.restroom,
        smoking: data.features.amenities.smoking,
        jukebox: data.features.amenities.jukebox,
        music: data.features.amenities.music,
        "live music": data.features.amenities.live_music,
        "private room": data.features.amenities.private_room,
        "outdoor seating": data.features.amenities.outdoor_seating,
        "TV's": data.features.amenities.tvs,
        ATM: data.features.amenities.atm,
        "coat check": data.features.amenities.coat_check,
        "wheelchair accessible": data.features.amenities.wheelchair_accessible,
        parking: {
          parking: data.features.amenities.parking.parking,
          "street parking": data.features.amenities.parking.street_parking,
          "valet parking": data.features.amenities.parking.valet_parking,
          "public lot": data.features.amenities.parking.public_lot,
          "private lot": data.features.amenities.parking.private_lot,
        },
      },
    },
  };
};
