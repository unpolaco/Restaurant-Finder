import { axios  } from "./axios"
import { FOUR_SQUARE_ENDPOINT } from "./endpoints.consts"
import { restaurantListMapper } from "./mappers";
import { SelectedRestaurantDto, RestaurantsListDto, SelectedRestaurant, RestaurantsList } from './restaurants.types';

export interface GetRestaurantListParams  {
    near: string,
    categories: string,
    limit: number,
}

export const getRestaurantList = async (params: GetRestaurantListParams): Promise<RestaurantsList> => {
    const response = await axios.get<RestaurantsListDto>(`${FOUR_SQUARE_ENDPOINT}/search?categories=13072&near=warsaw`)
    const data = response.data
    return restaurantListMapper(data)
}

export const getSelectedRestaurant = async (restaurantId: string, params: GetSelectedRestaurantParams): Promise<SelectedRestaurant> => {
    const response = await axios.get<SelectedRestaurantDto>(`${FOUR_SQUARE_ENDPOINT}/${restaurantId}`, {params})
    const data = response.data
    return selectedRestaurantMapper(data)
}
