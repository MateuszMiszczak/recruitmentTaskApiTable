import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useSetRecoilState } from "recoil";
import {
  tableDataState,
  isLoadingState,
  errorState,
} from "../state/stateAtoms";

const BASE_URL = "https://api.stackexchange.com";
const ENDPOINT_URL = "/2.3/tags?order=desc&sort=popular&site=stackoverflow";

// Normally I would put this in .env file but in this case I need it here for API to get 10000 requests per day instead of 300.
const HIGHER_QUOTA_SECRET = "&key=JuyVsKzok6JGUx8d29vYoQ((";

export const useFetchTags = () => {
  const setData = useSetRecoilState(tableDataState);
  const setIsLoading = useSetRecoilState(isLoadingState);
  const setError = useSetRecoilState(errorState);

  const query = useQuery({
    queryKey: ["stackData", ENDPOINT_URL, HIGHER_QUOTA_SECRET],
    queryFn: async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(
          `${BASE_URL}${ENDPOINT_URL}${HIGHER_QUOTA_SECRET}`
        );
        setData(response.data.items);
        return response.data.items;
      } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
          setError({
            status: error.response.status,
            message: error.message,
          });
        } else if (error instanceof Error) {
          setError({ status: 0, message: error.message });
        } else {
          setError({ status: 0, message: "An unknown error occurred" });
        }
        throw error;
      } finally {
        setIsLoading(false);
      }
    },
    retry: 1,
  });

  return query;
};
