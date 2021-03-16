import Head from "next/head";
import Button from "../components/button/Button";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Button primary label="Primary" />
        <Button primary={false} label="Secondary" />
      </main>
    </div>
  );
}
