import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { baseAddress } from "../settings";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuthProvider from "../../Components/Provider/AuthProvider";
import { IUser } from "../../Models/auth";

let registerUrl = "http://" + baseAddress + "/register";
let loginUrl = "http://" + baseAddress + "/login";

interface IRegisterQuery {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
}

interface registerQueryProps {
  accessToken: string | null;
  queryProps: IRegisterQuery;
}

const useRegisterQuery = (onSuccessCb?: Function) => {
  const navigate = useNavigate();
  // const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: async ({ accessToken, queryProps }: registerQueryProps) => {
      return axios.post(registerUrl, queryProps, {
        headers: {
          Authorization: "Bearer " + accessToken,
          Accept: "application/json",
        },
      });
    },
    onSuccess: (result, variables, context) => {
      console.log("RESULT:", result);
      console.log("variables", variables);
      console.log("CONTEXT", context);

      navigate("/login");

      if (onSuccessCb) onSuccessCb();
    },
    onError: (error, variables, context) => {},
  });

  return mutation;
};

interface ILoginQuery {
  email: string;
  password: string;
}

interface loginQueryProps {
  accessToken: string | null;
  queryProps: ILoginQuery;
}

const useLoginQuery = (onSuccessCb?: Function) => {
  const navigate = useNavigate();

  const accessToken = useAuthProvider((state) => state.accessToken);
  const user = useAuthProvider((state) => state.user);
  const isLoggedIn = useAuthProvider((state) => state.isLoggedIn);
  const setAccessToken = useAuthProvider((state) => state.setAccessToken);
  const setUser = useAuthProvider((state) => state.setUser);
  const setIsLoggedIn = useAuthProvider((state) => state.setIsLoggedIn);

  const mutation = useMutation({
    mutationFn: async ({ accessToken, queryProps }: loginQueryProps) => {
      return axios.post(loginUrl, queryProps, {
        headers: {
          Authorization: "Bearer " + accessToken,
          Accept: "application/json",
        },
      });
    },
    onSuccess: (result, variables, context) => {
      console.log("RESULT:", result);
      console.log("variables", variables);
      console.log("CONTEXT", context);

      setTimeout(() => {
        const freshAccessToken = result.data.token;
        const loggedUser: IUser = {
          name: result.data.user.name,
          email: result.data.user.email,
        };

        localStorage.setItem("accessToken", freshAccessToken);

        setIsLoggedIn(true);
        setAccessToken(freshAccessToken);
        setUser(loggedUser);
        navigate("/");
      }, 1000);

      console.log("accessToken and all", accessToken);
      console.log("user", user);
      console.log("iseLOggedin", isLoggedIn);

      if (onSuccessCb) onSuccessCb();
    },
    onError: (error, variables, context) => {},
  });

  return mutation;
};

const authAPI = {
  useRegisterQuery,
  useLoginQuery,
};

export default authAPI;
