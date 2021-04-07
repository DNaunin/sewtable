import styles from "../styles/Canvas.module.css";
import Drawing from "../components/canvas/drawingarea";
import Footer from "../components/footer/Footer";

export default function Canvas() {
  return (
    <>
      <main className={styles.main}>
        <span className={styles.title}>Combine fabric and pattern </span>
        <Drawing />
        <Footer />
      </main>
    </>
  );
}
