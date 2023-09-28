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
    <div>
      <h2>Post of this Comment is...</h2>
      {data?.map((post) => {
        return (
          <div key={post.id}>
            <Link href={`/posts/${post.id}`}>{post.title}</Link>
          </div>
        );
      })}
    </div>
  );
};
