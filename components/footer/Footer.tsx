import styles from "./Footer.module.css";
import Button from "../button/Button";
import { useRouter } from "next/router";

export default function Footer() {
  const router = useRouter();
  return (
    <div className={styles.footercontainer}>
      <Button label="Home" />
      <Button onClick={router.back} label="Back" />
    </div>
  );
}
