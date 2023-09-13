import { Inter } from "next/font/google";
import classes from "src/components/Main/Main.module.css";
import { Links } from "@/src/components/Links";
import { Headline } from "src/components/Headline";

const inter = Inter({ subsets: ["latin"] });

export function Main(props) {
  return (
    <main className={`${classes.main} ${inter.className}`}>
      <Headline page={props.page} />

      <div className={classes.center}>{props.page} Page</div>

      <Links />
    </main>
  );
}
