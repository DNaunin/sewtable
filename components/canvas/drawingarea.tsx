import styles from "./Drawing.module.css";
import { useRef } from "react";

function Drawing() {
  const canvasRef = useRef(null);

  function createPattern(src) {
    // const src = "/fabric1.svg";

    const context = canvasRef.current.getContext("2d");
    const image = new Image();
    image.src = src;
    image.onload = () => {
      const pattern = context.createPattern(image, "repeat");
      context.fillStyle = pattern;
      context.fillRect(0, 0, 300, 300);
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
      <canvas ref={canvasRef} className={styles.canvas}></canvas>
    </div>
  );
}

export default Drawing;
