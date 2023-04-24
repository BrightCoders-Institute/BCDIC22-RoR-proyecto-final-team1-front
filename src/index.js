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
      const res2 = await fetch(`http://127.0.0.1:4000/reviews/${params.id}.json`)
      const place = await res.json();
      const reviews = await res2.json();
      if (res.status === 404) {
        throw new Response("Not Found", { status: 404, statusText:place.error } );
      }
      return {place, reviews}
    },
  },
  {
    path: "/profile",
    element: <Userpage />,
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
