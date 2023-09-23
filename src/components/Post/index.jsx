import { Layout } from "@/src/components/Layout";
import { usePost } from "@/src/hooks/usePost";
import Head from "next/head";

export const Post = () => {
  const { post, user, error, isLoading } = usePost();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <>
      <Head>
        <title>{post?.title}</title>
      </Head>

      <Layout>
        {/* optional chaining */}
        <h1>{post?.title}</h1>
        <p>{post?.body}</p>
        {user?.name ? <small>Created by {user.name}</small> : null}
      </Layout>
    </>
  );
};
