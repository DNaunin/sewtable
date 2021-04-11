import styles from "./Welcome.module.css";
import PageLink from "../pagelink/Pagelink";

function Welcome() {
  return (
    <div className={styles.welcomecontainer}>
      <span className={styles.title}>Welcome</span>
      <span className={styles.subtitle}>Get inspired and sew</span>
      <img className={styles.img} src="/dressform.svg" alt="a dress form" />
      <PageLink href="/introduction">How it works</PageLink>
      <PageLink href="/upload">Get started</PageLink>
    </div>
  );
}

export default Welcome;
