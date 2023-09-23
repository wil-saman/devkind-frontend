import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./Components/Content/Login/Login";
import PrivateRoute from "./PrivateRoute";
import Register from "./Components/Content/Register/Register";
import useAuthProvider from "./Components/Provider/AuthProvider";
import SideDrawer from "./Components/Content/SideDrawer/SideDrawer";
import About from "./Components/Content/About/About";
import Preferences from "./Components/Content/Preferences/Preferences";

function App() {
  const accessToken = useAuthProvider((state) => state.accessToken);
  const setUser = useAuthProvider((state) => state.setUser);
  const isLoggedIn = useAuthProvider((state) => state.isLoggedIn);

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {isLoggedIn && <SideDrawer />}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<></>} />
        <Route path={"/"} element={<PrivateRoute component={About} />} />
        <Route path={"/About"} element={<PrivateRoute component={About} />} />
        <Route
          path={"/Preferences"}
          element={<PrivateRoute component={Preferences} />}
        />
      </Routes>
    </div>
  );
}

export default App;
