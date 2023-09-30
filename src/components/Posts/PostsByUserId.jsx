import { useFetchArray } from "@/src/hooks/useFetchArray";
import { API_URL } from "@/src/utils/const";
import Link from "next/link";

export const PostsByUserId = (props) => {
  const { data, error, isLoading, isEmpty } = useFetchArray(props.id ? `${API_URL}/posts?userId=${props.id}` : null);

  // if (isLoading) {
  //   return <div>Loading...</div>;
  // }

  if (error) {
    return <div>{error.message}</div>;
  }

  if (isEmpty) {
    return <div>データは空です。</div>;
  }

  return (
    <div className="mt-20">
      <h2 className="text-2xl font-bold">投稿</h2>
      <ol className="list-decimal list-inside mt-4 space-y-2">
        {data?.map((post) => {
          return (
            <li key={post.id}>
              <Link href={`/posts/${post.id}`}>{post.title}</Link>
            </li>
          );
        })}
      </ol>
    </div>
  );
};
