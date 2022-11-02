import React from "react";
import { getSelectedRestaurant } from "../api/restaurants/requests";
import { getDate } from "../components/helpers/helpers";

export const useSelectedRestaurant = () => {
  const restaurantId = "1234";
  const params = {
    client_id: "IEV0NGQ2WLUULDQ1TA0OD1UPUKZG0VTO3MYIKDN2MYHIKJ1E",
    client_secret: "SVPZ5HDAZK0JUFDNNVQBAWODV0FNG25YGM1EL5MB4SCSKRWD",
    v: getDate(),
  };

  const selectedRestaurant = getSelectedRestaurant(restaurantId, params);

  return {
    selectedRestaurant,
  };
};
