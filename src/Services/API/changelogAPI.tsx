import axios from "axios";
import { baseAddress } from "../settings";
import { useQuery } from "@tanstack/react-query";
import useAuthProvider from "../../Components/Provider/AuthProvider";

const changelogUrl = "http://" + baseAddress + "/changelog";

interface changelogQueryProps {
  accessToken: string | null;
}

const useRetrieveChangelogQuery = (onSuccessCb?: Function) => {
  const accessToken = useAuthProvider((state) => state.accessToken);

  const qKey = ["changelog"];
  const contactsQuery = useQuery(
    qKey,
    async () => {
      return axios.get(changelogUrl, {
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
