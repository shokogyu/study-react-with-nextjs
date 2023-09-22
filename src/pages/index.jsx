import Head from "next/head";
import { Inter } from "next/font/google";
import { Header } from "src/components/Header";
import { useCallback, useEffect, useState } from "react";
import { Posts } from "@/src/components/Posts";

const inter = Inter({ subsets: ["latin"] });

const Home = (props) => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <Posts />
    </>
  );
};

export default Home;
