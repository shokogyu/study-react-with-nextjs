import { useFetchArray } from "@/src/hooks/useFetchArray";
import { API_URL } from "@/src/utils/const";
import Link from "next/link";

export const PostByPostId = (props) => {
  const { data, error, isLoading, isEmpty } = useFetchArray(
    props.id ? `${API_URL}/posts?id=${props.id}` : null
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  if (isEmpty) {
    return <div>データは空です。</div>;
  }

  return (
    <div className="mt-16">
      <h2 className="text-2xl font-bold">元の投稿</h2>
      {data?.map((post) => {
        return (
          <div key={post.id} className="mt-4">
            <Link href={`/posts/${post.id}`} className="hover:text-blue-500 transition-all">
              <p className="font-semibold">{post.title}</p>
              <p className="text-gray-400">{post.body}</p>
            </Link>
          </div>
        );
      })}
    </div>
  );
};
