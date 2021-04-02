import styles from "./Footer.module.css";
import Pagelink from "../pagelink/Pagelink";
import Button from "../button/Button";
import { useRouter } from "next/router";

export default function Footer() {
  const router = useRouter();

  return (
    <div className={styles.footerContainer}>
      <Pagelink href="./">Home</Pagelink>
      <Button onClick={router.back} label="Back" />
    </div>
  );
}
