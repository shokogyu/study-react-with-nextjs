import { usePostByPostId } from "@/src/hooks/useFetchArray";
import Link from "next/link";

export const PostByPostId = (props) => {
  const { data, error, isLoading, isEmpty } = usePostByPostId(props.id);

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
      <h2 className="text-3xl font-semibold">The Post</h2>
      {data?.map((post) => {
        return (
          <div key={post.id} className="mt-4">
            <Link href={`/posts/${post.id}`}>{post.title}</Link>
          </div>
        );
      })}
    </div>
  );
};
