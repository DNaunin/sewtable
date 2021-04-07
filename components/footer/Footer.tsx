import styles from "./Footer.module.css";
import PageLink from "../pagelink/Pagelink";
import Button from "../button/Button";
import { useRouter } from "next/router";

export default function Footer() {
  const router = useRouter();

  return (
    <div className={styles.footerContainer}>
      <PageLink href="/start">Home</PageLink>
      <Button label="Back" onClick={router.back} />
    </div>
  );
}
