import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./Components/Content/Login/Login";
import PrivateRoute from "./PrivateRoute";
import Home from "./Components/Content/Home/Home";
import Register from "./Components/Content/Register/Register";

function App() {
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
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<></>} />
        <Route path={"/"} element={<PrivateRoute component={Home} />} />
      </Routes>
    </div>
  );
}

export default App;
