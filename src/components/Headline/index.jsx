import Image from "next/image";
import { Inter } from "next/font/google";
import classes from "src/components/Headline/Headline.module.css";

const inter = Inter({ subsets: ["latin"] });

export const Headline = (props) => {
  return (
    <div className={classes.description}>
      <p>
        Get started by editing&nbsp;
        <code className={classes.code}>pages/{props.page}.js</code>
      </p>
      <div>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          By{" "}
          <Image
            src="/vercel.svg"
            alt='"Vercel Logo"'
            className={classes.vercelLogo}
            width={100}
            height={24}
            priority
          />
        </a>
      </div>
      <p>アイテムの数は、{props.items.length}個です</p>
      <button onClick={() => props.handleReduce()}>reduce</button>
    </div>
  );
};
