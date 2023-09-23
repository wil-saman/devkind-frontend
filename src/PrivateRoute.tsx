import React from "react";
import { Navigate, Route } from "react-router-dom";
import useAuthProvider from "./Components/Provider/AuthProvider";
import { IAuthProvider } from "./Models/auth";

type Props = {
  component: React.ComponentType;
  path?: string;
};

const PrivateRoute: React.FC<Props> = ({ component: RouteComponent, path }) => {
  const isLoggedIn = useAuthProvider((state) => state.isLoggedIn);
  console.log("is it logged in?", isLoggedIn);

  return isLoggedIn ? <RouteComponent /> : <Navigate to="/login" />;
};

export default PrivateRoute;
