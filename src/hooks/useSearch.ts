import React from 'react'
import { getDate } from './../components/helpers/helpers';
import { useSearchParams } from 'react-router-dom';
import { GetRestaurantListParams } from './../api/restaurants/requests';

export const useSearch = () => {
let [searchParams, setSearchParams] = useSearchParams({});
const categoryIdParams = searchParams.get('categoryId')
const cityParams = searchParams.get('city')

const addSearchParams = (city: string, categoryId: string[]) => {
const restaurantListParams = {
  near: city,
  categoryId: categoryId,
};
setSearchParams(restaurantListParams)
}

const restaurantListParams: GetRestaurantListParams = {
  client_id: "IEV0NGQ2WLUULDQ1TA0OD1UPUKZG0VTO3MYIKDN2MYHIKJ1E",
  client_secret: "SVPZ5HDAZK0JUFDNNVQBAWODV0FNG25YGM1EL5MB4SCSKRWD",
  near: cityParams || '',
  categoryId: categoryIdParams ? [categoryIdParams] : [],
  limit: 100,
  v: getDate(),
};

  return {
    addSearchParams,
    restaurantListParams
  }
}
