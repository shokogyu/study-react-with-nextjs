import { Header } from "@/src/components/Header";
import { Comment as CommentComponent } from "@/src/components/Comment";
import Head from "next/head";
import { SWRConfig } from "swr";
import { useRouter } from "next/router";

export const getStaticPaths = async () => {
  const comments = await fetch("https://jsonplaceholder.typicode.com/comments?_limit=10");
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
    fallback: "blocking",
  };
};

export const getStaticProps = async (ctx) => {
  const { id } = ctx.params;
  const COMMENT_API_URL = `https://jsonplaceholder.typicode.com/comments/${id}`;
  const comment = await fetch(COMMENT_API_URL);

  if (!comment.ok) {
    return {
      notFound: true,
    };
  }

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
  const router = useRouter();
  const { fallback } = props;

  if (router.isFallback) {
    return <div>Loading...</div>;
  }
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
