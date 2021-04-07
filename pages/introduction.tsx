import styles from "../styles/Introduction.module.css";
import HowTo from "../components/messages/HowTo";

export default function Introduction() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <HowTo />
      </main>
    </div>
  );
}
