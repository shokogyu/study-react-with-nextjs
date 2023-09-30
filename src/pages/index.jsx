import Head from "next/head";
import { Inter } from "next/font/google";
import { Header } from "src/components/Header";
import { Layout } from "@/src/components/Layout";
import { API_URL } from "@/src/utils/const";

const inter = Inter({ subsets: ["latin"] });

export default function Index() {
  return (
    <>
      <Head>
        <title>Index Page</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        <Layout>
          <h1 className="text-center text-4xl font-bold">Next.jsで学ぶReact講座</h1>
          <p className="text-center mt-10">
            <a href={API_URL}>
              {"{"}JSON{"}"} Placeholder
            </a>
            を使ってReactを勉強していきます
          </p>
        </Layout>
      </main>
    </>
  );
}
