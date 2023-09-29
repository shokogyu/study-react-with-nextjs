import { Layout } from "@/src/components/Layout";
import { useComments } from "@/src/hooks/useFetchArray";
import Link from "next/link";

export const Comments = () => {
  const { data, error, isLoading, isEmpty } = useComments();

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
    <Layout>
      <ul className="space-y-4">
        {data.map((comment) => {
          return (
            <li key={comment.id} className="border-b pb-4">
              <Link href={`/comments/${comment.id}`} className="hover:text-blue-500 transition-all">
                {comment.body}
              </Link>
            </li>
          );
        })}
      </ul>
    </Layout>
  );
};
