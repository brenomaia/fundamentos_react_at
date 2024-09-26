import { createRoot } from 'react-dom/client'
import './index.css'

import Home from './pages/home'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HotelDetails from './components/HotelDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: < Home />,
  },
  {
    path: "/details/:hotelId",
    element: < HotelDetails />,
  },
]);

createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)
