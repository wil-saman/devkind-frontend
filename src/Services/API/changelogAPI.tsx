import axios from "axios";
import { baseAddress } from "../settings";
import { useQuery } from "@tanstack/react-query";
import useAuthProvider from "../../Components/Provider/AuthProvider";

const changelogUrl = "http://" + baseAddress + "/changelog";

const useRetrieveChangelogQuery = (onSuccessCb?: Function) => {
  const accessToken = useAuthProvider((state) => state.accessToken);
  const user = useAuthProvider((state) => state.user);

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
      //   enabled: Boolean(
      //     retrieveContactsQuery.accessToken &&
      //       retrieveContactsQuery.companyId &&
      //       retrieveContactsQuery.contactPageDisplay === "Contact"
      //   ),
      retry: true,

      staleTime: Infinity,
      // refetchOnReconnect: true,
    }
  );
  return contactsQuery;
};

const changelogAPI = {
  useRetrieveChangelogQuery,
};

export default changelogAPI;
