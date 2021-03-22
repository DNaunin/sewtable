import styles from "./HowTo.module.css";
import Button from "../button/Button";

function HowTo() {
  return (
    <div className={styles.howtocontainer}>
      <span className={styles.title}>How it works</span>
      <span className={styles.info}>
        Take a picture of your favourite fabric
      </span>
      <span className={styles.info}>Choose a sewing pattern</span>
      <span className={styles.info}>
        Drag your pattern on the desired clothing item
      </span>
      <span className={styles.info}>How does it look?</span>
      <Button className={styles.startbtn} label="Get started" />
    </div>
  );
}

export default HowTo;
