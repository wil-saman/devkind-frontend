import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { baseAddress } from "../settings";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuthProvider from "../../Components/Provider/AuthProvider";
import { IUser } from "../../Models/auth";

let registerUrl = "http://" + baseAddress + "/register";
let loginUrl = "http://" + baseAddress + "/login";
let logout = "http://" + baseAddress + "/logout";
let currentTokenUrl = "http://" + baseAddress + "/currentUser";
let updatePasswordUrl = "http://" + baseAddress + "/updatePassword";
let updateEmailUrl = "http://" + baseAddress + "/updateEmail";
let updateNameUrl = "http://" + baseAddress + "/updateName";
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
          userId: result.data.user.id,
        };

        localStorage.setItem("accessToken", freshAccessToken);

        setIsLoggedIn(true);
        setAccessToken(freshAccessToken);
        setUser(loggedUser);
        navigate("/");
      }, 1000);

      if (onSuccessCb) onSuccessCb();
    },
    onError: (error, variables, context) => {},
  });

  return mutation;
};

interface logoutQueryProps {
  accessToken: string | null;
}

const useLogoutQuery = (onSuccessCb?: Function) => {
  const navigate = useNavigate();

  const setAccessToken = useAuthProvider((state) => state.setAccessToken);
  const setUser = useAuthProvider((state) => state.setUser);
  const setIsLoggedIn = useAuthProvider((state) => state.setIsLoggedIn);

  const mutation = useMutation({
    mutationFn: async ({ accessToken }: logoutQueryProps) => {
      return axios.post(
        logout,
        {},
        {
          headers: {
            Authorization: "Bearer " + accessToken,
            Accept: "application/json",
          },
        }
      );
    },
    onSuccess: (result, variables, context) => {
      console.log("RESULT:", result);
      console.log("variables", variables);
      console.log("CONTEXT", context);

      setTimeout(() => {
        localStorage.removeItem("accessToken");

        setIsLoggedIn(false);
        setAccessToken(null);
        setUser(undefined);
        navigate("/");
      }, 1000);

      if (onSuccessCb) onSuccessCb();
    },
    onError: (error, variables, context) => {},
  });

  return mutation;
};

interface currentTokenQueryProps {
  accessToken: string | null;
}

const useCurrentTokenQuery = (onSuccessCb?: Function) => {
  const navigate = useNavigate();

  // const setAccessToken = useAuthProvider((state) => state.setAccessToken);
  const setUser = useAuthProvider((state) => state.setUser);
  const setIsLoggedIn = useAuthProvider((state) => state.setIsLoggedIn);

  const mutation = useMutation({
    mutationFn: async ({ accessToken }: currentTokenQueryProps) => {
      return axios.post(
        currentTokenUrl,
        { currentToken: accessToken },
        {
          headers: {
            Authorization: "Bearer " + accessToken,
            Accept: "application/json",
          },
        }
      );
    },
    onSuccess: (result, variables, context) => {
      console.log("RESULT:", result);
      console.log("variables", variables);
      console.log("CONTEXT", context);

      const loggedUser: IUser = {
        name: result.data.name,
        email: result.data.email,
        userId: result.data.id,
      };

      setUser(loggedUser);
      setIsLoggedIn(true);

      if (onSuccessCb) onSuccessCb();
    },
    onError: (error, variables, context) => {
      setUser(undefined);
      setIsLoggedIn(false);
      navigate("/");

      if (onSuccessCb) onSuccessCb();
    },
  });

  return mutation;
};

interface IUpdatePasswordQuery {
  email: string;
  old_password: string;
  new_password: string;
  new_password_confirmation: string;
}

interface updatePasswordQueryProps {
  accessToken: string | null;
  queryProps: IUpdatePasswordQuery;
}

const useUpdatePasswordQuery = (onSuccessCb?: Function) => {
  // const navigate = useNavigate();
  // const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async ({
      accessToken,
      queryProps,
    }: updatePasswordQueryProps) => {
      return axios.post(updatePasswordUrl, queryProps, {
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

      if (onSuccessCb) onSuccessCb();
    },
    onError: (error, variables, context) => {},
  });

  return mutation;
};

interface IUpdateEmailQuery {
  email: string;
}

interface updateEmailQueryProps {
  accessToken: string | null;
  queryProps: IUpdateEmailQuery;
}

const useUpdateEmailQuery = (onSuccessCb?: Function) => {
  const user = useAuthProvider((state) => state.user);
  const setUser = useAuthProvider((state) => state.setUser);

  const mutation = useMutation({
    mutationFn: async ({ accessToken, queryProps }: updateEmailQueryProps) => {
      return axios.post(updateEmailUrl, queryProps, {
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

      const updatedUser: IUser = {
        userId: user?.userId,
        email: variables.queryProps.email,
        name: user!.name,
      };

      setUser(updatedUser);

      if (onSuccessCb) onSuccessCb();
    },
    onError: (error, variables, context) => {},
  });

  return mutation;
};

interface IUpdateNameQuery {
  name: string;
}

interface updateNameQueryProps {
  accessToken: string | null;
  queryProps: IUpdateNameQuery;
}

const useUpdateNameQuery = (onSuccessCb?: Function) => {
  const user = useAuthProvider((state) => state.user);
  const setUser = useAuthProvider((state) => state.setUser);

  const mutation = useMutation({
    mutationFn: async ({ accessToken, queryProps }: updateNameQueryProps) => {
      return axios.post(updateNameUrl, queryProps, {
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

      const updatedUser: IUser = {
        userId: user?.userId,
        email: user!.email,
        name: variables.queryProps.name,
      };

      setUser(updatedUser);

      if (onSuccessCb) onSuccessCb();
    },
    onError: (error, variables, context) => {},
  });

  return mutation;
};

const authAPI = {
  useRegisterQuery,
  useLoginQuery,
  useLogoutQuery,
  useCurrentTokenQuery,
  useUpdatePasswordQuery,
  useUpdateEmailQuery,
  useUpdateNameQuery,
};

export default authAPI;
