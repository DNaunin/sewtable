import styles from "./HowTo.module.css";
import PageLink from "../pagelink/Pagelink";

function HowTo() {
  return (
    <div className={styles.howToContainer}>
      <span className={styles.title}>How it works</span>
      <ul className={styles.info}>
        <li>Choose one of the offered sewing patterns.</li>
        <li>Take a picture of your favourite fabric.</li>
        <li>Upload it to the cloud.</li>
        <li> Scale your pattern on the chosen design.</li>
        <li>How does it look?</li>
      </ul>
      <PageLink href="/upload">Get started</PageLink>
    </div>
  );
}

export default HowTo;
