import styles from "./Drawing.module.css";
import { useEffect, useRef } from "react";

function Drawing() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const context = canvasRef.current.getContext("2d");
    const image = new Image();
    image.src = "/pattern_hoodie.svg";
    image.onload = () => {
      context.drawImage(image, 0, 0);
    };
  }, []);

  return <canvas ref={canvasRef} className={styles.canvas}></canvas>;
}

export default Drawing;
