import { CommentsByPostId } from "@/src/components/Comments/commentsByPostId";
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
        <h1 className="text-center font-bold text-4xl">{post?.title}</h1>
        <p className="mt-10 text-lg">{post?.body}</p>
        {user?.name ? <small className="block mt-5 text-gray-400">Created by {user.name}</small> : null}
        <CommentsByPostId id={post?.id} />
      </Layout>
    </>
  );
};
