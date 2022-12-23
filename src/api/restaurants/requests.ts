import { paramsValues } from "../../consts/requestsParams.const";
import { axios  } from "./axios"
import { API_PROXY_FSQ } from "./endpoints.consts"
import { restaurantListMapper, selectedRestaurantMapper } from "./mappers";
import { RestaurantsListDto, RestaurantsList } from './restaurants.types';
import { SelectedRestaurant, SelectedRestaurantDto } from "./selectedRestaurant.types";

export interface RestaurantListParams  {
    near: string,
    categories: string,
    limit: number,
}

export const getRestaurantList = async (params: RestaurantListParams): Promise<RestaurantsList> => {
    const response = await axios.get<RestaurantsListDto>(API_PROXY_FSQ, {params})
    const data = response.data
    return restaurantListMapper(data)
}

export const getSelectedRestaurant = async (restaurantId: string): Promise<SelectedRestaurant> => {
    const response = await axios.get<SelectedRestaurantDto>(`${API_PROXY_FSQ}/${restaurantId}`, {params: {fields: paramsValues.toString()}})
    const data = response.data
    return selectedRestaurantMapper(data)
}
