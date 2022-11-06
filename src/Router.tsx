import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { App } from './App';

export const Router = () => {
    const router = createBrowserRouter([
        {
          path: "/",
          element: <App />,
        },
      ]);
  return (
    <RouterProvider router={router} />
  )
}
