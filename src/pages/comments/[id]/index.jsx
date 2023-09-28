import { Header } from "@/src/components/Header";
import { Comment as CommentComponent } from "@/src/components/Comment";
import Head from "next/head";

const CommentId = () => {
  return (
    <>
      <Head>
        <title>Comment Detail Page</title>
      </Head>

      <Header />

      <main>
        <CommentComponent />
      </main>
    </>
  );
};

export default CommentId;
