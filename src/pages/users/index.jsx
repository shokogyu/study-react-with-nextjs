import { Header } from "@/src/components/Header";
import { Layout } from "@/src/components/Layout";
import { API_URL } from "@/src/utils/const";
import Head from "next/head";
import { Users as UserComponent } from "src/components/Users";
import { SWRConfig } from "swr";

export const getServerSideProps = async () => {
  const USERS_API_URL = `${API_URL}/users`;
  const users = await fetch(USERS_API_URL);
  const usersData = await users.json();

  return {
    props: {
      fallback: {
        [USERS_API_URL]: usersData,
      },
    },
  };
};

const Users = (props) => {
  const { fallback } = props;
  return (
    <>
      <Head>
        <title>Users Page</title>
      </Head>

      <Header />

      <main>
        <SWRConfig value={{ fallback }}>
          <Layout>
            <h1 className="text-center font-bold text-4xl mb-8">ユーザー一覧</h1>
            <UserComponent />
          </Layout>
        </SWRConfig>
      </main>
    </>
  );
};

export default Users;
