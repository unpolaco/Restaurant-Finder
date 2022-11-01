import { axios } from "./axios"
import { FOUR_SQUARE_ENDPOINT } from "./endpoints.consts"
import { restaurantListMapper } from "./mappers";
import { RestaurantsListDto, RestaurantsListFromDto } from './restaurants.types';

interface GetRestaurantListParams {
    client_id: string,
    client_secret: string,
    near: string,
    categoryId: string[],
    limit: number,
    v: string
}

export const getRestaurantList = async (params: GetRestaurantListParams): Promise<RestaurantsListFromDto> => {
    const response = await axios.get<RestaurantsListDto>(FOUR_SQUARE_ENDPOINT, {params})
    const data = response.data
    return restaurantListMapper(data)
}

