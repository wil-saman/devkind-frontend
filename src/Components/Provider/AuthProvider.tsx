import React from "react";
import { create } from "zustand";
import { IUser } from "../../Models/auth";

interface IAuthProvider {
  accessToken: string | null;
  isLoggedIn: boolean;
  user: IUser | undefined;
  setAccessToken: (state: string | null) => void;
  setIsLoggedIn: (state: boolean) => void;
  setUser: (state: IUser | undefined) => void;
}

type Props = {};

const useAuthProvider = create<IAuthProvider>()((set) => ({
  accessToken: localStorage.getItem("accessToken")
    ? localStorage.getItem("accessToken")
    : null,
  isLoggedIn: localStorage.getItem("accessToken") ? true : false,
  user: undefined,
  setAccessToken: (accessToken: string | null) =>
    set((state) => ({ accessToken: accessToken })),
  setIsLoggedIn: (loggedin: boolean) =>
    set((state) => ({ isLoggedIn: loggedin })),
  setUser: (user: IUser | undefined) => set((state) => ({ user: user })),
}));

export default useAuthProvider;
