import React from "react";
import { useRestaurantList } from "../../hooks/useRestaurantList";
import Icon from "../Icon";
import {
  ListWrapper,
  RestaurantListText,
  Wrapper,
} from "./RestaurantList.styles";

interface RestaurantListParams {}

export const RestaurantList: React.FC<RestaurantListParams> = () => {
  const { restaurantsList } = useRestaurantList();

  return (
    <Wrapper>
      {restaurantsList &&
        restaurantsList.map((restaurant) => (
          <ListWrapper
            // onClick={onSelectRestaurant}
            name={restaurant.name}
            key={restaurant.restaurantId}
          >
            <RestaurantListText name={restaurant.name}>
              {restaurant.name.toUpperCase()}
            </RestaurantListText>
            <Icon
              //@ts-ignore
              src={restaurant.categories[0].categoryIcon}
              alt="restaurant category icon"
            />
            <RestaurantListText>
              {restaurant.location.locality}
            </RestaurantListText>
          </ListWrapper>
        ))}
    </Wrapper>
  );
};
