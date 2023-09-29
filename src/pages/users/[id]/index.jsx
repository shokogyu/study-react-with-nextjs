import { Header } from "@/src/components/Header";
import { User as UserComponent } from "@/src/components/User";
import Head from "next/head";
import { SWRConfig } from "swr";

export const getServerSideProps = async (ctx) => {
  const { id } = ctx.query;
  const API_URL = `https://jsonplaceholder.typicode.com/users/${id}`;
  const user = await fetch(API_URL);
  const userData = await user.json();

  return {
    props: {
      fallback: {
        [API_URL]: userData,
      },
    },
  };
};

const UserId = ({ fallback }) => {
  // const { fallback } = props;

  return (
    <SWRConfig value={{ fallback }}>
      <Head>
        <title>Users Detail Page</title>
      </Head>

      <Header />

      <main>
        <UserComponent />
      </main>
    </SWRConfig>
  );
};

export default UserId;
