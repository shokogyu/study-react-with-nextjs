import { API_URL } from "@/src/utils/const";
import { useRouter } from "next/router";
import useSWR from "swr";

export const useUser = () => {
  const router = useRouter();

  const { data, error, isLoading } = useSWR(
    router.query.id ? `${API_URL}/users/${router.query.id}` : null
  );

  return {
    data,
    error,
    isLoading,
  };
};
