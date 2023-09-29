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
        <h1 className="text-center font-bold text-4xl">{data?.body}</h1>
        <h2 className="text-2xl mt-10 font-bold">詳細</h2>
        <ul className="list-inside mt-5 list-disc">
          <li>名前 : {data?.name}</li>
          <li>Email : {data?.email}</li>
        </ul>

        <PostByPostId id={data?.postId} />
      </Layout>
    </>
  );
};
