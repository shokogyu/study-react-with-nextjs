import { API_URL } from "@/src/utils/const";
import { useRouter } from "next/router";
import useSWR from "swr";

export const usePost = () => {
  const router = useRouter();

  const { data: post, error: postError } = useSWR(
    router.query.id ? `${API_URL}/posts/${router.query.id}` : null
  );
  const { data: user, error: userError } = useSWR(
    post?.userId ? `${API_URL}/users/${post.userId}` : null
  );

  return {
    post,
    user,
    error: postError || userError,
    isLoading: !post && !postError && !user && !userError,
  };
};
