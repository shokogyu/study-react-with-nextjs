import { Header } from "@/src/components/Header";
import { Layout } from "@/src/components/Layout";
import { User as UserComponent } from "@/src/components/User";
import classes from "@/src/components/Layout/Layout.module.css";
import { fetcher } from "@/src/utils/fetcher";
import Head from "next/head";
import { useRouter } from "next/router";
import useSWR from "swr";

const UserId = () => {
  return (
    <>
      <Head>
        <title>Users Detail Page</title>
      </Head>

      <Header />

      <main>
        <UserComponent />
      </main>
    </>
  );
};

export default UserId;
