import { Header } from "@/src/components/Header";
import { Layout } from "@/src/components/Layout";
import Head from "next/head";
import { Comments as CommentComponent } from "src/components/Comments";
import { SWRConfig } from "swr";

export const getStaticProps = async () => {
  const COMMENTS_API_URL = "https://jsonplaceholder.typicode.com/comments";
  const comments = await fetch(COMMENTS_API_URL);
  const commentsData = await comments.json();

  return {
    props: {
      fallback: {
        [COMMENTS_API_URL]: commentsData,
      },
    },
  };
};

const Comments = (props) => {
  const { fallback } = props;
  return (
    <>
      <Head>
        <title>Comments Page</title>
      </Head>

      <Header />

      <main>
        <SWRConfig value={fallback}>
          <Layout>
            <h1 className="text-center font-bold text-4xl mb-8">コメント一覧</h1>
            <CommentComponent />
          </Layout>
        </SWRConfig>
      </main>
    </>
  );
};

export default Comments;
