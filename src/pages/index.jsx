import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import classes from "src/styles/Home.module.css";
import { Main } from "src/components/Main";
import { Header } from "src/components/Header";
import { useCallback, useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [count, setCount] = useState(1);
  const [text, setText] = useState("");
  const [isShow, setIsShow] = useState(true);
  const [array, setArray] = useState([]);

  const handleDisplay = useCallback(() => {
    setIsShow((prevIsShow) => !prevIsShow);
  }, []);

  const handleClick = useCallback(() => {
    console.log(count);
    setCount((prevCount) => prevCount + 1);
  }, [count]);

  const handleChange = useCallback((e) => {
    setText(e.target.value);
  }, []);

  const handleAdd = useCallback(() => {
    console.log("111");
    setArray((prevArray) => {
      console.log("222");
      if (prevArray.some((item) => item === text)) {
        console.log("333");
        alert("同じアイテムが存在します");
        return prevArray;
      }
      return [...prevArray, text];
    });
  }, [text]);

  useEffect(() => {
    // Mount時の処理
    // document.body.style.backgroundColor = "lightblue";

    // Unmount時の処理
    return () => {
      // document.body.style.backgroundColor = "";
    };
  }, []);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <div className={classes.content}>
        <p>{isShow ? count : null}</p>
        <button onClick={handleClick}>カウントアップ</button>
        <button onClick={() => handleDisplay()}>{isShow ? "非表示" : "表示"}</button>

        <div className={classes.textAdd}>
          <input type="text" value={text} onChange={(e) => handleChange(e)} />
          <button onClick={handleAdd}>Add</button>
          <ul>
            {array.map((item) => {
              return <li key={item}>{item}</li>;
            })}
          </ul>
        </div>
      </div>

      <Main page="index" />
    </>
  );
}
