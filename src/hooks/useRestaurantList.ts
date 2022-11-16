import React from "react";
import { useSearch } from "./useSearch";
import { useQuery } from "react-query";
import { getRestaurantList } from "../api/restaurants/requests";
import { RESTAURANT_LIST_QUERY_KEY } from "../consts/queryKeys.consts";
import { warsawCoordinates } from "../consts/coordinates.consts";

export const useRestaurantList = () => {

  const { restaurantListParams } = useSearch();

  const { data, refetch } = useQuery(
    [RESTAURANT_LIST_QUERY_KEY, { restaurantListParams }],
    () => getRestaurantList(restaurantListParams),
    {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      enabled: false,
    }
  );

  return {
    refetch,
    restaurantsList: data?.restaurantsList,
    cityPosition: data?.cityPosition || warsawCoordinates,
  };
};
