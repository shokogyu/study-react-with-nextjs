import { usePost } from "@/src/hooks/usePost";
import Head from "next/head";
import styles from "src/styles/Home.module.css";

export const Post = () => {
  const { post, user, error, isLoading } = usePost();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <>
      <Head>
        <title>{post?.title}</title>
      </Head>

      <div className={styles.container}>
        {/* optional chaining */}
        <h1>{post?.title}</h1>
        <p>{post?.body}</p>
        {user?.name ? <small>Created by {user.name}</small> : null}
      </div>
    </>
  );
};
