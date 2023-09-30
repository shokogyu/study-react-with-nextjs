import { Layout } from "@/src/components/Layout";
import { useFetchArray } from "@/src/hooks/useFetchArray";
import { API_URL } from "@/src/utils/const";
import Link from "next/link";

export const Posts = () => {
  const { data, error, isLoading, isEmpty } = useFetchArray(`${API_URL}/posts`);

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
      <ul className="pl-10 space-y-6">
        {data.map((post) => {
          return (
            <li key={post.id}>
              <Link href={`/posts/${post.id}`} className="group">
                <h2 className="font-bold text-xl group-hover:text-blue-500 transition-all">
                  {post.title}
                </h2>
                <p className="text-gray-500 pl-2">{post.body}</p>
              </Link>
            </li>
          );
        })}
      </ul>
    </Layout>
  );
};
