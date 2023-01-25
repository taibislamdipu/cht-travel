import React from "react";
import { useSelector } from "react-redux";
import { useCheckAdminQuery } from "../api/userSlice";
import Loading from "../components/reusable/Loading";
import { Navigate, useLocation } from "react-router-dom";

const AdminRoute = ({ children }) => {
  const { pathname } = useLocation();
  const { email } = useSelector((state) => state.auth);
  const { data, isLoading } = useCheckAdminQuery(email);

  if (isLoading) {
    return <Loading />;
  }

  if (!data?.admin) {
    return <Navigate to="/" state={{ path: pathname }} />;
  }

  return children;
};

export default AdminRoute;
