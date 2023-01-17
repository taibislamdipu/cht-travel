import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Main = () => {
  return (
    <div className="lg:mx-40 px-4">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Main;
