import { Header } from "@/src/components/Header";
import { User as UserComponent } from "@/src/components/User";
import Head from "next/head";

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
