import React from "react";
import { Outlet } from "react-router-dom";
import ScrollToTopComponent from "../components/ScrollToTopComponent/ScrollToTopComponent";
import Navbar from "./Navbar";

const Main = () => {
  return (
    // <div className="lg:mx-40 px-4">
    <div>
      <ScrollToTopComponent>
        <div className="lg:mx-40 px-4">
          <Navbar />
        </div>
        <Outlet />
      </ScrollToTopComponent>
    </div>
  );
};

export default Main;
