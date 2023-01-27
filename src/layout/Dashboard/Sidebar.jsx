import React from "react";
import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { IoPersonAddSharp } from "react-icons/io5";
import { BsList } from "react-icons/bs";
import { IoMdAdd } from "react-icons/io";

const Sidebar = () => {
  return (
    <div className="col-span-2 md:h-[calc(100vh-25px)] rounded-lg bg-[#212D3A] text-white p-5 dashboard-sidebar">
      <ul className="flex h-full flex-col gap-3">
        <div>
          <li className="font-bold ">
            <Link to="/dashboard" className="hover:underline">
              CHT Admin Dashboard
            </Link>
          </li>
          <code>version: 1.0.1</code>
        </div>

        <hr />
        <li>
          <Link
            to="/dashboard"
            className="flex items-center gap-1 hover:underline hover:bg-indigo-400 transition rounded-md p-2"
          >
            <BsList size={20} color="white" />
            Hotel List
          </Link>
        </li>

        <li>
          <Link
            to="add-hotel"
            className="flex items-center gap-1 hover:underline hover:bg-indigo-400 transition rounded-md p-2"
          >
            <IoMdAdd size={20} />
            Add Hotel
          </Link>
        </li>
        <li>
          <Link
            to="admin"
            className="flex items-center gap-1 hover:underline hover:bg-indigo-400 transition rounded-md p-2"
          >
            <IoPersonAddSharp size={20} />
            Make Admin
          </Link>
        </li>

        <li className="mt-auto">
          <Link
            to="/"
            className="flex items-center gap-1 hover:underline hover:bg-indigo-400 transition rounded-md p-2"
          >
            <AiFillHome size={20} />
            Back to Home
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
