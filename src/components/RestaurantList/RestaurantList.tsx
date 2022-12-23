import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useRestaurantList } from "../../hooks/useRestaurantList";
import { restaurantsListHardcoded } from "../helpers/restaurantDataList";
import Icon from "../Icon";
import {
  ListWrapper,
  RestaurantListText,
  Wrapper,
} from "./RestaurantList.styles";

interface RestaurantListParams {}

export const RestaurantList: React.FC<RestaurantListParams> = () => {
  const navigate = useNavigate()
//   const { restaurantsList } = useRestaurantList();
// console.log(restaurantsList);


const handleSelectRestaurant = (restaurantId: string) => {
navigate(`/restaurant/${restaurantId}`)
//send request

}
  return (
    <Wrapper>
      <ul>
      {restaurantsListHardcoded &&
        restaurantsListHardcoded.map((restaurant) => (
            <li key={restaurant.restaurantId} onClick={()=> handleSelectRestaurant(restaurant.restaurantId)}>
              <p>{restaurant.name}</p>
              <p>{restaurant.restaurantId}</p>
              <p>{restaurant.location.address}</p>
            </li>
          ))}
          </ul>
    </Wrapper>
  );
};
