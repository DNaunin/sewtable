import styles from "./Footer.module.css";
import Button from "../button/Button";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Footer() {
  const router = useRouter();
  return (
    <div className={styles.footerContainer}>
      <Link href={`./`}>
        <Button label="Home" />
      </Link>
      <Button onClick={router.back} label="Back" />
    </div>
  );
}
