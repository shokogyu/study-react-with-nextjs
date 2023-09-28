import { useCommentsByPostId } from "@/src/hooks/useFetchArray";
import Link from "next/link";

export const CommentsByPostId = (props) => {
  const { data, error, isLoading, isEmpty } = useCommentsByPostId(props.id);

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
    <div className="mt-20">
      <h2 className="text-3xl font-semibold">Comments</h2>
      <ol className="list-decimal pl-10 mt-4">
        {data.map((comment) => {
          return (
            <li key={comment.id}>
              <Link href={`/comments/${comment.id}`}>{comment.body}</Link>
            </li>
          );
        })}
      </ol>
    </div>
  );
};
