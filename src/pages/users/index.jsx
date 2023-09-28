import { Header } from "@/src/components/Header";
import { Layout } from "@/src/components/Layout";
import Head from "next/head";
import { Users as UserComponent } from "src/components/Users";

const Users = () => {
  return (
    <>
      <Head>
        <title>Users Page</title>
      </Head>

      <Header />

      <main>
        <Layout>
          <h1 className="text-center font-bold text-4xl mb-8">ユーザー一覧</h1>
          <UserComponent />
        </Layout>
      </main>
    </>
  );
};

export default Users;
