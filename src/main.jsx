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
    path: "/fundamentos_react_at",
    element: < Home />,
  },
  {
    path: "/fundamentos_react_at/details/:hotelId",
    element: < HotelDetails />,
  },
]);

createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)
