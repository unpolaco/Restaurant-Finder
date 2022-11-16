import React from "react";
import { useSearchParams } from "react-router-dom";
import { GetRestaurantListParams } from "./../api/restaurants/requests";

export const useSearch = () => {
  let [searchParams, setSearchParams] = useSearchParams({});
  const categoriesParams = searchParams.get("categories");
  const cityParams = searchParams.get("near");

  const addSearchParams = (city: string, categories: string[]) => {
    const restaurantListParams = {
      near: city,
      categories: categories,
    };
    setSearchParams(restaurantListParams);
  };

  const restaurantListParams: GetRestaurantListParams = {
    near: cityParams || "warsaw",
    categories: categoriesParams ? categoriesParams : "13070",
    limit: 50,
  };

  return {
    addSearchParams,
    restaurantListParams,
    cityParams,
    categoriesParams,
  };
};
