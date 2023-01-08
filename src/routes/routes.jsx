import { createBrowserRouter } from "react-router-dom";
import AddHotel from "../components/dashBoard/AddHotel";
import DashboardHotel from "../components/dashBoard/DashboardHotel";
import Dashboard from "../layout/Dashboard/Dashboard";
import Main from "../layout/Main";
import Blog from "../pages/Blog";
import Cart from "../pages/Cart";
import Contact from "../pages/Contact";
import Home from "../pages/home/Home";
import Hotel from "../pages/hotel/Hotel";
import HotelList from "../pages/HotelList";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";
import Service from "../pages/Service";
import Signup from "../pages/Signup";

import PrivateRoute from "../utils/PrivateRoute";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,

    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/service",
        element: <Service />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/hotel",
        element: <Hotel />,
      },
      {
        path: "/hotels",
        element: <HotelList />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "/dashboard",
        element: <DashboardHotel />,
      },
      {
        path: "add-product",
        element: <AddHotel />,
      },
    ],
  },
]);

export default routes;
