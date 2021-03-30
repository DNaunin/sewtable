import Head from "next/head";
import styles from "../styles/Design.module.css";
import Footer from "../components/footer/Footer";

export default function Design() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Sewtable</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.title}>Choose a Design!</div>
        <div className={styles.subtitle}>
          Which pattern would you like to see?
        </div>
        <img src="/pulliSven.png" />
        <img src="/hoodie.png" />
      </main>
      <Footer />
    </>
  );
}
