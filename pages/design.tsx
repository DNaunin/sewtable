import styles from "../styles/Design.module.css";
import Footer from "../components/footer/Footer";
import { useRouter } from "next/router";

export default function Design() {
  const router = useRouter();
  function storeDesign(src) {
    localStorage.setItem("Design", src);
    router.push("/canvas");
  }

  return (
    <>
      <main className={styles.main}>
        <div className={styles.title}>Choose a Design!</div>
        <div className={styles.subtitle}>
          Which pattern would you like to see?
        </div>
        <button
          onClick={() => storeDesign("/pulliSven.png")}
          className={styles.patternImage}
        >
          <img
            className={styles.patternImage}
            src="/pulliSven.png"
            alt="Sweater pattern"
          />
        </button>
        <button
          className={styles.patternImage}
          onClick={() => storeDesign("/hoodie.png")}
        >
          <img
            className={styles.patternImage}
            src="/hoodie.png"
            alt="Hoodie pattern"
          />
        </button>
        <button
          className={styles.patternImage}
          onClick={() => storeDesign("/shirt.png")}
        >
          <img
            className={styles.patternImage}
            src="/shirt.png"
            alt="Shirt pattern"
          />
        </button>
        <button
          className={styles.patternImage}
          onClick={() => storeDesign("/bag.png")}
        >
          <img
            className={styles.patternImage}
            src="/bag.png"
            alt="Bag pattern"
          />
        </button>
        <button
          className={styles.patternImage}
          onClick={() => storeDesign("/hemd.png")}
        >
          <img
            className={styles.patternImage}
            src="/hemd.png"
            alt="Shirt pattern"
          />
        </button>
        <button
          className={styles.patternImage}
          onClick={() => storeDesign("/coat.png")}
        >
          <img
            className={styles.patternImage}
            src="/coat.png"
            alt="Coat pattern"
          />
        </button>
      </main>
      <Footer />
    </>
  );
}
