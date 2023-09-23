import { Layout } from "@/src/components/Layout";
import { usePosts } from "@/src/hooks/usePosts";
import Link from "next/link";
import classes from "src/components/Posts/Posts.module.css";

export const Posts = () => {
  const { data, error, isLoading, isEmpty } = usePosts();

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
      <ol className={classes.list}>
        {data.map((post) => {
          return (
            <li key={post.id}>
              <Link href={`/posts/${post.id}`}>{post.title}</Link>
            </li>
          );
        })}
      </ol>
    </Layout>
  );
};
