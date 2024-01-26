import { createBrowserRouter } from "react-router-dom";
import Layout from '../layout/Layout'
import Home from '../pages/Home'
import Destination from '../pages/Destination'
import Crew from '../pages/Crew'
import Tech from '../pages/Tech'


export const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/destination",
          element: <Destination />,
        },
        {
          path: '/crew',
          element: <Crew />,
        },
        {
          path: '/technology',
          element: <Tech />,
        }]
    },
  ]);
