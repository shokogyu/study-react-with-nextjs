import { Header } from "@/src/components/Header";
import { User as UserComponent } from "@/src/components/User";
import Head from "next/head";
import { SWRConfig } from "swr";

export const getServerSideProps = async (ctx) => {
  const { id } = ctx.query;

  // ユーザー情報を取得
  const USER_API_URL = `https://jsonplaceholder.typicode.com/users/${id}`;
  const user = await fetch(USER_API_URL);
  const userData = await user.json();
  // ユーザーの投稿情報を取得
  const POSTS_API_URL = `https://jsonplaceholder.typicode.com/posts?userId=${userData.id}`;
  const posts = await fetch(POSTS_API_URL);
  const postsData = await posts.json();

  return {
    props: {
      fallback: {
        [USER_API_URL]: userData,
        [POSTS_API_URL]: postsData,
      },
    },
  };
};

const UserId = ({ fallback }) => {
  // const { fallback } = props;

  return (
    <>
      <Head>
        <title>Users Detail Page</title>
      </Head>

      <Header />

      <main>
        <SWRConfig value={{ fallback }}>
          <UserComponent />
        </SWRConfig>
      </main>
    </>
  );
};

export default UserId;
