import { fetcher } from "@/src/utils/fetcher";
import useSWR from "swr";

export const useUsers = () => {
  const { data, error, isLoading } = useSWR("https://jsonplaceholder.typicode.com/users", fetcher);

  return {
    data,
    error,
    isLoading,
    isEmpty: data && data.length === 0,
  };
};
