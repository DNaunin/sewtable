import Head from "next/head";
import styles from "../styles/Home.module.css";
import HowTo from "../components/messages/HowTo";
import Button from "../components/button/Button";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sewtable</title>
      </Head>

      <main className={styles.main}>
        <HowTo />
        <Button label="Get started" />
      </main>
    </div>
  );
}
