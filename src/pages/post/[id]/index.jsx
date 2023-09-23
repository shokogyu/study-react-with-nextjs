import Head from "next/head";
import { useRouter } from "next/router";
import { Header } from "src/components/Header";
import useSWR from "swr";

const fetcher = async (url) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("エラーが発生したため、データの取得に失敗しました");
  }

  const json = await response.json();
  return json;
};

const PostId = () => {
  const router = useRouter();

  const { data: post, error: postError } = useSWR(
    router.query.id ? `https://jsonplaceholder.typicode.com/posts/${router.query.id}` : null,
    fetcher
  );
  const { data: user, error: userError } = useSWR(
    post?.userId ? `https://jsonplaceholder.typicode.com/users/${post.userId}` : null,
    fetcher
  );

  return (
    <>
      <Head>
        <title>{post?.title}</title>
      </Head>
      <Header />

      {/* optional chaining */}
      <h1>{post?.title}</h1>
      <p>{post?.body}</p>
      <small>Created by {user?.name}</small>
    </>
  );
};

export default PostId;
