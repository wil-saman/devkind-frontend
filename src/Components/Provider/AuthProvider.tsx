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
  isLoggedIn: false,
  user: undefined,
  setAccessToken: () => set((state) => ({ accessToken: state.accessToken })),
  setIsLoggedIn: () => set((state) => ({ isLoggedIn: state.isLoggedIn })),
  setUser: () => set((state) => ({ user: state.user })),
}));

export default useAuthProvider;
