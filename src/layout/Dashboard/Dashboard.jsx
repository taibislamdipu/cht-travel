import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const Dashboard = () => {
  return (
    <div className="md:grid grid-cols-12 gap-3 p-3 space-y-4 md:space-y-0 bg-[#F2F6FC]">
      <Sidebar />
      <div className="col-span-10 w-full rounded-lg ">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
