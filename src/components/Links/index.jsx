import { Inter } from "next/font/google";
import classes from "src/components/Links/Links.module.css";

const inter = Inter({ subsets: ["latin"] });

export const Links = (props) => {
  return (
    <div className={classes.grid}>
      <button onClick={() => props.handleReduce()}>減らす</button>
      {props.items.map((item) => {
        return (
          <a
            key={item.title}
            href={item.href}
            className={classes.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              {item.title} <span>-&gt;</span>
            </h2>
            <p>{item.description}</p>
          </a>
        );
      })}
    </div>
  );
};
