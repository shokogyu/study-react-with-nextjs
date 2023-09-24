import { Header } from "@/src/components/Header";
import { Layout } from "@/src/components/Layout";
import classes from "@/src/components/Layout/Layout.module.css";
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
          <h1 className={classes.pageTitle}>ユーザー一覧</h1>
          <UserComponent />
        </Layout>
      </main>
    </>
  );
};

export default Users;
