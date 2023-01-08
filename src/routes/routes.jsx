import { createBrowserRouter } from "react-router-dom";
import AddHotel from "../components/dashBoard/AddHotel";
import DashboardHotel from "../components/dashBoard/DashboardHotel";
import Dashboard from "../layout/Dashboard/Dashboard";
import Main from "../layout/Main";

import Home from "../pages/home/Home";

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
