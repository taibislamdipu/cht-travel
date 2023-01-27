import React from "react";
import { useMediaQuery } from "react-responsive";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

// const Dashboard = () => {
//   return (
//     <div className="md:grid grid-cols-12 gap-3 p-3 space-y-4 md:space-y-0 bg-[#F2F6FC]">
//       <Sidebar />
//       <div className="col-span-10 w-full rounded-lg ">
//         <Outlet />
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

const Dashboard = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  const ForWeb = () => {
    return (
      <div class="flex w-screen h-screen text-gray-700">
        <div class="flex flex-col border-r border-gray-300">
          <Sidebar />
        </div>
        <div class="flex flex-col flex-grow">
          <div class="flex-grow p-6 overflow-auto bg-gray-200">
            <Outlet />
          </div>
        </div>
      </div>
    );
  };

  const ForMobile = () => {
    return (
      <div className="md:grid grid-cols-12 gap-3 p-3 space-y-4 md:space-y-0 bg-[#F2F6FC]">
        <Sidebar />
        <div className="col-span-10 w-full rounded-lg ">
          <Outlet />
        </div>
      </div>
    );
  };

  return <div>{isTabletOrMobile ? <ForMobile /> : <ForWeb />}</div>;
};

export default Dashboard;
