import React, { useEffect } from "react";
import { Navigate, Route } from "react-router-dom";
import useAuthProvider from "./Components/Provider/AuthProvider";
import { IAuthProvider } from "./Models/auth";

type Props = {
  component: React.ComponentType;
  path?: string;
};

const PrivateRoute: React.FC<Props> = ({ component: RouteComponent, path }) => {
  const accessToken = useAuthProvider((state) => state.accessToken);
  const user = useAuthProvider((state) => state.user);
  const isLoggedIn = useAuthProvider((state) => state.isLoggedIn);

  console.log("is it logged in?", isLoggedIn);
  console.log("user?", user);
  console.log("accessToken?", accessToken);
  return isLoggedIn ? <RouteComponent /> : <Navigate to="/login" />;
};

export default PrivateRoute;
