import styles from "./Drawing.module.css";
import { useEffect } from "react";
import { useRef } from "react";

function Drawing() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const ctx = canvasRef.current.getContext("2d");
    const image = new Image();
    image.src = "/pattern_hoodie.svg";
    image.onload = () => {
      ctx.drawImage(image, 0, 0);
    };
  }, []);

  return <canvas ref={canvasRef} className={styles.canvas}></canvas>;
}

export default Drawing;
