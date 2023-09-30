import { API_URL } from "@/src/utils/const";
import { useRouter } from "next/router";
import useSWR from "swr";

export const useComment = () => {
  const router = useRouter();

  const { data, error, isLoading } = useSWR(
    router.query.id ? `${API_URL}/comments/${router.query.id}` : null
  );

  return {
    data,
    error,
    isLoading,
  };
};
