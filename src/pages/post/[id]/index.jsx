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

  const { data, error } = useSWR(
    `https://jsonplaceholder.typicode.com/posts/${router.query.id}`,
    fetcher
  );

  return (
    <>
      <Head>
        <title>{data?.title}</title>
      </Head>
      <Header />

      {/* optional chaining */}
      <h1>{data?.title}</h1>
      <p>{data?.body}</p>
    </>
  );
};

export default PostId;
