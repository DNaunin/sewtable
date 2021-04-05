import styles from "./Welcome.module.css";
import Pagelink from "../pagelink/Pagelink";

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
      <Pagelink href="/introduction">How it works</Pagelink>
      <Pagelink href="/upload">Get started</Pagelink>
    </div>
  );
}

export default Welcome;
