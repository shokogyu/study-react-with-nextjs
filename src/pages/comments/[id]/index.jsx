import { Header } from "@/src/components/Header";
import { Layout } from "@/src/components/Layout";
import { Comment as CommentComponent } from "@/src/components/Comment";
import classes from "@/src/components/Layout/Layout.module.css";
import { fetcher } from "@/src/utils/fetcher";
import Head from "next/head";
import { useRouter } from "next/router";
import useSWR from "swr";

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
