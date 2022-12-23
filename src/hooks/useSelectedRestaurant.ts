import React from "react";
import { useQuery } from "react-query";
import { getSelectedRestaurant } from "../api/restaurants/requests";
import { SELECTED_RESTAURANT_QUERY_KEY } from "../consts/queryKeys.consts";

export const useSelectedRestaurant = (restaurantId?: string) => {
  const { data: selectedRestaurant } = useQuery(
    [SELECTED_RESTAURANT_QUERY_KEY, {}],
    () => {
      restaurantId && getSelectedRestaurant(restaurantId);
    },
    {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
    }
  );

  return {
    selectedRestaurant,
  };
};
