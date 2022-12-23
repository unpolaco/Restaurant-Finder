import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { App } from './App';
import { RestaurantCard } from './components/RestaurantCard/RestaurantCard';

export const Router = () => {
    const router = createBrowserRouter([
        {
          path: "/",
          element: <App />,
        },
        {
          path: "/restaurant/:id",
          element: <RestaurantCard />,
        },
      ]);
  return (
    <RouterProvider router={router} />
  )
}
