import Head from "next/head";
import styles from "../styles/Canvas.module.css";
import Drawing from "../components/canvas/drawingarea";
import Footer from "../components/footer/Footer";

export default function Canvas() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Sewtable</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <span className={styles.title}>Combine fabric and pattern </span>
        <Drawing />
        <Footer />
      </main>
    </>
  );
}
