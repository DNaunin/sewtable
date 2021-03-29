import styles from "./Drawing.module.css";
import { useEffect, useRef } from "react";

function Drawing() {
  const canvasRef = useRef(null);
  const canvasRef2 = useRef(null);

  useEffect(() => {
    const context = canvasRef.current.getContext("2d");
    context.clearRect(0, 0, window.innerWidth, window.innerHeight);
  });

  function createPattern(src) {
    const context = canvasRef.current.getContext("2d");
    const image = new Image();
    image.src = src;
    image.onload = () => {
      const pattern = context.createPattern(image, "repeat");
      context.fillStyle = pattern;
      context.fillRect(0, 0, 300, 300);
    };
  }

  function chooseDesign(src) {
    const context2 = canvasRef.current.getContext("2d");
    const design = new Image();
    design.src = src;
    design.onload = () => {
      context2.drawImage(design, 0, 0, 302, 152);
    };
  }

  return (
    <div className={styles.patternContainer}>
      <button
        className={styles.patternimg1}
        onClick={() =>
          createPattern(
            "https://images.unsplash.com/photo-1553532434-5ab5b6b84993?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OHx8cGF0dGVybnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          )
        }
      >
        <img
          className={styles.patternimg1}
          src="https://images.unsplash.com/photo-1553532434-5ab5b6b84993?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OHx8cGF0dGVybnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        />
      </button>
      <button
        className={styles.patternimg2}
        onClick={() =>
          createPattern(
            "https://images.unsplash.com/photo-1563989968497-0c52b4093d39?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80"
          )
        }
      >
        <img
          className={styles.patternimg2}
          src="https://images.unsplash.com/photo-1563989968497-0c52b4093d39?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80"
        />
      </button>
      <canvas ref={canvasRef} className={styles.canvas1}></canvas>
      <canvas ref={canvasRef2} className={styles.canvas2}></canvas>
      <button
        className={styles.designbtn}
        onClick={() => chooseDesign("/hoodie.png")}
      >
        <img className={styles.designbtn} src="/hoodie.png" />
      </button>
      <button
        className={styles.designbtn2}
        onClick={() => chooseDesign("/pullisven.png")}
      >
        <img className={styles.designbtn2} src="/pullisven.png" />
      </button>
    </div>
  );
}

export default Drawing;
