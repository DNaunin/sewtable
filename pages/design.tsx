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
          onClick={() => storeDesign("/sweater.png")}
          className={styles.designButton}
        >
          <img
            className={styles.patternImage}
            src="/sweater.png"
            alt="Sweater pattern"
          />
        </button>
        <button
          className={styles.designButton}
          onClick={() => storeDesign("/hoodie.png")}
        >
          <img
            className={styles.patternImage}
            src="/hoodie.png"
            alt="Hoodie pattern"
          />
        </button>
        <button
          className={styles.designButton}
          onClick={() => storeDesign("/shirt.png")}
        >
          <img
            className={styles.patternImage}
            src="/shirt.png"
            alt="Shirt pattern"
          />
        </button>
        <button
          className={styles.designButton}
          onClick={() => storeDesign("/bag.png")}
        >
          <img
            className={styles.patternImage}
            src="/bag.png"
            alt="Bag pattern"
          />
        </button>
        <button
          className={styles.designButton}
          onClick={() => storeDesign("/dressshirt.png")}
        >
          <img
            className={styles.patternImage}
            src="/dressshirt.png"
            alt="Shirt pattern"
          />
        </button>
        <button
          className={styles.designButton}
          onClick={() => storeDesign("/coat.png")}
        >
          <img
            className={styles.patternImage}
            src="/coat.png"
            alt="Coat pattern"
          />
        </button>
        <button
          className={styles.designButton}
          onClick={() => storeDesign("/top.png")}
        >
          <img
            className={styles.patternImage}
            src="/top.png"
            alt="Top pattern"
          />
        </button>
        <button
          className={styles.designButton}
          onClick={() => storeDesign("/tanktop.png")}
        >
          <img
            className={styles.patternImage}
            src="/tanktop.png"
            alt="Tanktop pattern"
          />
        </button>
        <button
          className={styles.designButton}
          onClick={() => storeDesign("/apron.png")}
        >
          <img
            className={styles.patternImage}
            src="/apron.png"
            alt="Apron pattern"
          />
        </button>
      </main>
      <Footer />
    </>
  );
}
