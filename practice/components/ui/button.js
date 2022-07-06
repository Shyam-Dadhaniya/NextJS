import React from "react";
import Link from "next/link";
import styles from "./button.module.css";
const Button = (props) => {
  if (props.link) {
    return (
      <Link href={props.link}>
        <a className={styles.btn}>
          <span>{props.children}</span>
        </a>
      </Link>
    );
  }
  return <button className={styles.btn} onClick={props.onClick}>{props.children}</button>;
};
export default Button;
