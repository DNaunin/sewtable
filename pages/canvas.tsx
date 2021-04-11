import styles from "../styles/Canvas.module.css";
import Footer from "../components/footer/Footer";
import dynamic from "next/dynamic";
const DynamicDrawing = dynamic(
  () => import("../components/canvas/drawingarea"),
  { ssr: false }
);
export default function Canvas() {
  return (
    <>
      <main className={styles.main}>
        <span className={styles.title}>Combine fabric and pattern </span>
        <span className={styles.subtitle}>
          Pick a pattern! Scale pattern with - and +.
        </span>
        <DynamicDrawing />
        <Footer />
      </main>
    </>
  );
}
