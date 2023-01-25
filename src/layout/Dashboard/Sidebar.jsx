import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useCheckAdminQuery } from "../../api/userSlice";

const Sidebar = () => {
  const { email } = useSelector((state) => state.auth);
  const { data } = useCheckAdminQuery(email);

  return (
    <div className="col-span-2 h-[calc(100vh-25px)] rounded-lg bg-indigo-200 p-5">
      <ul className="flex h-full  flex-col gap-3">
        <li>Admin Dashboard</li>
        <li>
          <Link to="/dashboard">Hotel List</Link>
        </li>
        {data?.admin && (
          <>
            <li>
              <Link to="add-hotel"> Add Hotel </Link>
            </li>
            <li>
              <Link to="admin"> Make Admin </Link>
            </li>
          </>
        )}

        <li className="mt-auto">
          <Link to="/"> Back to Home </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
