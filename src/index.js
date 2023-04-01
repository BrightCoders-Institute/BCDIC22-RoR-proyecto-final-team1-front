import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import './index.css';
import Homepage from './views/Homepage';
import Placedetails from './views/placedetails/Placedetails';
import ErrorPage from './views/errorPage/errorPage'
const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/place/:id",
    element: <Placedetails />,
    errorElement: <ErrorPage />,
    loader: async ({ params }) => {
      const res = await fetch(`http://127.0.0.1:4000/place/${params.id}.json`)
      const place = await res.json();
      if (res.status === 404) {
        throw new Response("Not Found", { status: 404, statusText:place.error } );
      }
      return place;
    },
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
