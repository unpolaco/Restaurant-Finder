import React, { useState } from "react";
import { getRestaurantList } from "../api/restaurants/requests";
import { Restaurant } from "../App.types";
import { getDate } from "../components/helpers/helpers";

export const useRestaurantList = () => {
  const warsawCoordinates = [52.22977, 21.01178];
  const [restaurants, setRestaurants] = useState<Restaurant[] | []>([]);
  const [cityCenterPosition, setCityCenterPosition] = useState(
    warsawCoordinates
  );
  const [icon, setIcon] = useState("");
  const fetchRestaurantList = (id: string[], city = "Warsaw") => {
    const params = {
      client_id: "IEV0NGQ2WLUULDQ1TA0OD1UPUKZG0VTO3MYIKDN2MYHIKJ1E",
      client_secret: "SVPZ5HDAZK0JUFDNNVQBAWODV0FNG25YGM1EL5MB4SCSKRWD",
      near: city,
      categoryId: id,
      limit: 100,
      v: getDate(),
    };

    getRestaurantList(params).then((res) => {
      if (res) {
        setCityCenterPosition(res.cityCenterPosition);
        setRestaurants(res.restaurantsList);
        setIcon(res.icon);
      } else {
        alert("Write a correct city name");
      }
    });
  };

  return {
    fetchRestaurantList,
    restaurants,
    cityCenterPosition,
    icon,
  };
};
