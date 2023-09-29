import { Header } from "@/src/components/Header";
import { Comment as CommentComponent } from "@/src/components/Comment";
import Head from "next/head";
import { SWRConfig } from "swr";

export const getStaticPaths = async () => {
  const comments = await fetch("https://jsonplaceholder.typicode.com/comments");
  const commentsData = await comments.json();
  const paths = commentsData.map((comment) => {
    return {
      params: {
        id: comment.id.toString(),
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (ctx) => {
  const { id } = ctx.params;
  const COMMENT_API_URL = `https://jsonplaceholder.typicode.com/comments/${id}`;
  const comment = await fetch(COMMENT_API_URL);
  const commentData = await comment.json();

  return {
    props: {
      fallback: {
        [COMMENT_API_URL]: commentData,
      },
    },
  };
};

const CommentId = (props) => {
  const { fallback } = props;
  return (
    <>
      <Head>
        <title>Comment Detail Page</title>
      </Head>

      <Header />

      <main>
        <SWRConfig value={{ fallback }}>
          <CommentComponent />
        </SWRConfig>
      </main>
    </>
  );
};

export default CommentId;
