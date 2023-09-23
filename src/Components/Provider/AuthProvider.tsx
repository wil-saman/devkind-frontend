import React from "react";
import { create } from "zustand";
import { IUser } from "../../Models/auth";

interface IAuthProvider {
  isLoggedIn: Boolean;
  user: IUser | undefined;
  setIsLoggedIn: (state: IAuthProvider) => void;
  setUser: (state: IAuthProvider) => void;
}

type Props = {};

const useAuthProvider = create<IAuthProvider>()((set) => ({
  isLoggedIn: false,
  user: undefined,
  setIsLoggedIn: () => set((state) => ({ isLoggedIn: state.isLoggedIn })),
  setUser: () => set((state) => ({ user: state.user })),
}));

export default useAuthProvider;
