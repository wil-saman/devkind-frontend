import axios from "axios";
import { baseAddress } from "../settings";
import { useQuery } from "@tanstack/react-query";
import useAuthProvider from "../../Components/Provider/AuthProvider";
import { useLocation } from "react-router-dom";

const changelogUrl = "http://" + baseAddress + "/changelog";

const useRetrieveChangelogQuery = (onSuccessCb?: Function) => {
  const accessToken = useAuthProvider((state) => state.accessToken);
  const user = useAuthProvider((state) => state.user);

  const location = useLocation();

  const qKey = ["changelog"];
  const contactsQuery = useQuery(
    qKey,
    async () => {
      return axios.get(changelogUrl, {
        params: {
          userId: user?.userId,
        },
        headers: {
          Authorization: "Bearer " + accessToken,
          Accept: "application/json",
        },
      });
    },
    {
      onSuccess: () => {},

      onError: () => {},
      enabled: Boolean(
        location.pathname === "/" || location.pathname === "/About"
      ),
      retry: true,
      staleTime: Infinity,
    }
  );
  return contactsQuery;
};

const changelogAPI = {
  useRetrieveChangelogQuery,
};

export default changelogAPI;
