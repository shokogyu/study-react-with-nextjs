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
      <ol className="list-decimal pl-10">
        {data.map((comment) => {
          return (
            <li key={comment.id}>
              <Link href={`/comments/${comment.id}`}>{comment.body}</Link>
            </li>
          );
        })}
      </ol>
    </Layout>
  );
};
