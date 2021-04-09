import styles from "../styles/Final.module.css";
import { useEffect, useState } from "react";
import PageLink from "../components/pagelink/Pagelink";

export default function Final() {
  const [finalProduct, setFinalProduct] = useState("");
  useEffect(() => {
    setFinalProduct(localStorage.getItem("canvasImage"));
  });

  console.log(finalProduct);
  return (
    <div className={styles.container}>
      <div className={styles.title}>Final Product</div>
      <div className={styles.subtitle}>Be inspired</div>
      <img className={styles.finalImage} src={finalProduct} />
      <PageLink href="/canvas">Go to Combine Page</PageLink>
    </div>
  );
}
