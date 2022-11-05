import React from "react";
import { useQuery } from "react-query";
import { getSelectedRestaurant } from "../api/restaurants/requests";
import { getDate } from "../components/helpers/helpers";
import { SELECTED_RESTAURANT_QUERY_KEY } from "../consts/queryKeys.consts";

export const useSelectedRestaurant = () => {
  const restaurantId = "1234";
  const params = {
    client_id: "IEV0NGQ2WLUULDQ1TA0OD1UPUKZG0VTO3MYIKDN2MYHIKJ1E",
    client_secret: "SVPZ5HDAZK0JUFDNNVQBAWODV0FNG25YGM1EL5MB4SCSKRWD",
    v: getDate(),
  };


  const { data : selectedRestaurant} = useQuery(
    [SELECTED_RESTAURANT_QUERY_KEY, {}],
    () => getSelectedRestaurant(restaurantId, params),
    {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
    }
  );

  return {
    selectedRestaurant,
  };
};
