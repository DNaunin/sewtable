import Head from "next/head";
import styles from "../styles/Start.module.css";
import router from "next/router";
import { useEffect } from "react";

export default function Start() {
  useEffect(() => {
    setTimeout(() => router.push("/start"), 3000);
  });
  return (
    <div className={styles.container}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Sewtable</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.title}>Sewtable</div>
        <img
          className={styles.machineimg}
          src="/machine.svg"
          alt="sewing machine"
        />
        <img
          className={styles.footerimg}
          src="/needles.svg"
          alt="sewing utensils"
        />
      </main>
    </div>
  );
}
