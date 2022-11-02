import { axios } from "./axios"
import { FOUR_SQUARE_ENDPOINT } from "./endpoints.consts"
import { restaurantListMapper, selectedRestaurantMapper } from "./mappers";
import { SelectedRestaurantDto, RestaurantsListDto, SelectedRestaurantFromDto, RestaurantsListFromDto } from './restaurants.types';

export interface GetSelectedRestaurantParams {
    client_id: string,
    client_secret: string,
    v: string
}
export interface GetRestaurantListParams extends GetSelectedRestaurantParams {
    near: string,
    categoryId: string[],
    limit: number,
}

export const getRestaurantList = async (params: GetRestaurantListParams): Promise<RestaurantsListFromDto> => {
    const response = await axios.get<RestaurantsListDto>(`${FOUR_SQUARE_ENDPOINT}/search?`, {params})
    const data = response.data
    return restaurantListMapper(data)
}

export const getSelectedRestaurant = async (id: string, params: GetSelectedRestaurantParams): Promise<SelectedRestaurantFromDto> => {
    const response = await axios.get<SelectedRestaurantDto>(`${FOUR_SQUARE_ENDPOINT}/${id}`, {params})
    const data = response.data
    return selectedRestaurantMapper(data)
}

