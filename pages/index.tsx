import Head from "next/head";
import styles from "../styles/Home.module.css";
import Welcome from "../components/messages/Welcome";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Sewtable</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

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
