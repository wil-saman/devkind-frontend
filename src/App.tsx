import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./Components/Content/Login/Login";

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
        <Route path="*" element={<></>} />
        <Route path={"/"} element={<PrivateRoute component={Home} />} />
        <Route path={"/Home"} element={<PrivateRoute component={Home} />} />
        <Route path={"/Akun"} element={<PrivateRoute component={Akun} />} />
        <Route path={"/Tabel"} element={<PrivateRoute component={Tabel} />} />
        <Route path={"/Kirim"} element={<PrivateRoute component={Kirim} />} />
        <Route
          path={"/Form"}
          element={<PrivateRoute component={KirimForm} />}
        />
        <Route
          path={"/MyTabel"}
          element={<PrivateRoute component={PersonalTabel} />}
        />
        <Route
          path={"/AdminTabel"}
          element={<AdminRoute component={KonfirmasiTabel} />}
        />
      </Routes>
    </div>
  );
}

export default App;
