import React, { useState } from "react";
import { useQuery } from "react-query";
import {
  getRestaurantList,
  GetRestaurantListParams,
} from "../api/restaurants/requests";
import { Restaurant } from "../api/restaurants/restaurants.types";
import { getDate } from "../components/helpers/helpers";
import { RESTAURANT_LIST_QUERY_KEY } from "../consts/queryKeys.consts";

export const useRestaurantList = () => {
  const warsawCoordinates = [52.22977, 21.01178];
  const params: GetRestaurantListParams = {
    client_id: "IEV0NGQ2WLUULDQ1TA0OD1UPUKZG0VTO3MYIKDN2MYHIKJ1E",
    client_secret: "SVPZ5HDAZK0JUFDNNVQBAWODV0FNG25YGM1EL5MB4SCSKRWD",
    near: city,
    categoryId: id,
    limit: 100,
    v: getDate(),
  };

  const { data } = useQuery(
    [RESTAURANT_LIST_QUERY_KEY, {}],
    () => getRestaurantList(params),
    {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
    }
  );

  return {
    restaurantsList: data?.restaurantsList,
    cityCenterPosition: data?.cityCenterPosition || warsawCoordinates,
    icon: data?.icon,
  };
};
