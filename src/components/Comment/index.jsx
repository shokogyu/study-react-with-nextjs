import { Layout } from "@/src/components/Layout";
import { PostByPostId } from "@/src/components/Posts/PostByPostId";
import { useComment } from "@/src/hooks/useComment";
import Head from "next/head";

export const Comment = () => {
  const { data, error, isLoading } = useComment();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <>
      <Head>
        <title>{data?.body}</title>
      </Head>

      <Layout>
        {/* optional chaining */}
        <h1>{data?.body}</h1>
        <ul>
          <li>{data?.name}</li>
          <li>{data?.email}</li>
        </ul>

        <PostByPostId id={data?.postId} />
      </Layout>
    </>
  );
};
