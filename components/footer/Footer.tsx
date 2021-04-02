import styles from "./Footer.module.css";
import Pagelink from "../pagelink/Pagelink";
// import { useRouter } from "next/router";

export default function Footer() {
  // const router = useRouter();

  return (
    <div className={styles.footerContainer}>
      <Pagelink href="./">Home</Pagelink>
      <Pagelink href="">Back</Pagelink>
    </div>
  );
}
