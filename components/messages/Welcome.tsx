import styles from "./Welcome.module.css";
import Button from "../button/Button";
import Link from "next/link";

function Welcome() {
  return (
    <div className={styles.welcomecontainer}>
      <span className={styles.title}>Welcome</span>
      <span className={styles.subtitle}>Get inspired and sew</span>
      <img
        className={styles.img}
        src="/schneiderpuppe.svg"
        alt="a dress form"
      />
      <Link href={`/introduction`}>
        <a>
          <Button className={styles.button} label="How it works" />
        </a>
      </Link>

      <Button className={styles.button} label="Get started" />
    </div>
  );
}

export default Welcome;
