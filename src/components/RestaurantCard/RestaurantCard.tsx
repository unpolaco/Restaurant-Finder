import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelectedRestaurant } from '../../hooks/useSelectedRestaurant'

export const RestaurantCard = () => {
    const {id} = useParams()
    const {selectedRestaurant} = useSelectedRestaurant(id)
    console.log(selectedRestaurant)
  return (
    <div>
        Restaurant id {id}
    </div>
  )
}
