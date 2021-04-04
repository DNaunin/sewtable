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
        <img
          className={styles.patternImage}
          src="/pulliSven.png"
          alt="Sweater pattern"
        />
        <img
          className={styles.patternImage}
          src="/hoodie.png"
          alt="Hoodie pattern"
        />
        <img
          className={styles.patternImage}
          src="/shirt.png"
          alt="Shirt pattern"
        />
        <img className={styles.patternImage} src="/bag.png" alt="Bag pattern" />
        <img
          className={styles.patternImage}
          src="/hemd.png"
          alt="Shirt pattern"
        />
        <img
          className={styles.patternImage}
          src="/coat.png"
          alt="Coat pattern"
        />
      </main>
      <Footer />
    </>
  );
}
