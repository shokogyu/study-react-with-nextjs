import { Header } from "@/src/components/Header";
import { Layout } from "@/src/components/Layout";
import Head from "next/head";
import { Comments as CommentComponent } from "src/components/Comments";

const Comments = () => {
  return (
    <>
      <Head>
        <title>Comments Page</title>
      </Head>

      <Header />

      <main>
        <Layout>
          <h1 className="text-center font-bold text-4xl mb-8">コメント一覧</h1>
          <CommentComponent />
        </Layout>
      </main>
    </>
  );
};

export default Comments;
