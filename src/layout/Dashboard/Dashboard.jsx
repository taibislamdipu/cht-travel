import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const Dashboard = () => {
  return (
    <div className="grid grid-cols-12 gap-3 p-3 ">
      <Sidebar />
      <div className="col-span-10 w-full rounded-lg bg-gray-100">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
