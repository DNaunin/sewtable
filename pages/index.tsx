import styles from "../styles/Index.module.css";
import router from "next/router";
import { useEffect } from "react";

export default function Index() {
  useEffect(() => {
    setTimeout(() => router.push("/start"), 3000);
  });
  return (
    <>
      <main className={styles.main}>
        <div className={styles.title}>Sewtable</div>
        <img
          className={styles.machineImg}
          src="/machine.svg"
          alt="sewing machine"
        />
        <img
          className={styles.footerImg}
          src="/needles.svg"
          alt="sewing utensils"
        />
      </main>
    </>
  );
}
