import { Layout } from "@/src/components/Layout";
import { useFetchArray } from "@/src/hooks/useFetchArray";
import { API_URL } from "@/src/utils/const";
import Link from "next/link";

export const Comments = () => {
  const { data, error, isLoading, isEmpty } = useFetchArray(`${API_URL}/comments`);

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
      <ul className="space-y-4">
        {data.map((comment) => {
          return (
            <li key={comment.id} className="border-b pb-4">
              <Link
                href={`/comments/${comment.id}`}
                className="hover:text-blue-500 transition-all"
                prefetch={false}
              >
                {comment.body}
              </Link>
            </li>
          );
        })}
      </ul>
  );
};
