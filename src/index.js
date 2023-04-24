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
import Userpage from './views/userpage/Userpage'
import Myplaces from './views/myplaces/Myplaces'

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
      const res = await fetch(`https://earthbnd.onrender.com/place/${params.id}.json`)
      const res2 = await fetch(`https://earthbnd.onrender.com/reviews/${params.id}.json`)
      const res3 = await fetch(`https://earthbnd.onrender.com/amenities/${params.id}.json`)
      const place = await res.json();
      const reviews = await res2.json();
      const amenities = await res3.json();
      if (res.status === 404) {
        throw new Response("Not Found", { status: 404, statusText: place.error });
      }
      return {place, reviews, amenities}
    },
  },
  {
    path: "/profile",
    element: <Userpage />,
  },
  {
    path: "/myplaces",
    element: <Myplaces />,
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
