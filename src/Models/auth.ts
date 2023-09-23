export interface IAuthProvider {
  test: string;
  isLoggedIn: boolean;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
  user?: IUser;
  setUser: React.Dispatch<React.SetStateAction<IUser | undefined>>;
}

export interface IUser {
  userId?: string;
  name: string;
  email: string;
}
