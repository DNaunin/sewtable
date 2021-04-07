import styles from "../styles/Home.module.css";
import Welcome from "../components/messages/Welcome";

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Welcome />
        <img
          className={styles.footerimg}
          src="/needles.svg"
          alt="sewing utensils"
        />
      </main>
    </div>
  );
}
