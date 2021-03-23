import Head from "next/head";
import styles from "../styles/Canvas.module.css";
import Button from "../components/button/Button";
import Drawing from "../components/canvas/drawingarea";
import { useRouter } from "next/dist/client/router";

export default function Canvas() {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <Head>
        <title>Sewtable</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <span className={styles.title}>Combine fabric and pattern </span>
        <Drawing />
        <div className={styles.footercontainer}>
          <Button className={styles.homebtn} label="Home" />
          <Button
            className={styles.backbtn}
            onClick={router.back}
            label="Back"
          />
          <img
            className={styles.footerimg}
            src="/footer.svg"
            alt="a grey footer"
          />
        </div>
      </main>
    </div>
  );
}
