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
      <h2 className="text-2xl font-semibold">コメント</h2>
      <ul className="mt-4 space-y-4">
        {data.map((comment) => {
          return (
            <li key={comment.id} className="border-b pb-4 truncate">
              <Link href={`/comments/${comment.id}`} className="hover:text-blue-500 transition-all ">
                {comment.body}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
