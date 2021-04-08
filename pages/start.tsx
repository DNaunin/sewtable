import styles from "../styles/Start.module.css";
import Welcome from "../components/messages/Welcome";

export default function Start() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Welcome />
        <img
          className={styles.footerImg}
          src="/needles.svg"
          alt="sewing utensils"
        />
      </main>
    </div>
  );
}
