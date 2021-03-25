import styles from "./HowTo.module.css";
import Button from "../button/Button";
import Link from "next/link";

function HowTo() {
  return (
    <div className={styles.howToContainer}>
      <span className={styles.title}>How it works</span>
      <span className={styles.info}>
        Take a picture of your favourite fabric
      </span>
      <span className={styles.info}>Choose a sewing pattern</span>
      <span className={styles.info}>
        Drag your pattern on the desired clothing item
      </span>
      <span className={styles.info}>How does it look?</span>
      <Link href={`/upload`}>
        <Button className={styles.startbtn} label="Get started" />
      </Link>
    </div>
  );
}

export default HowTo;
