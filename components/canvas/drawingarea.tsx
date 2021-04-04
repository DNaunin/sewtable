import styles from "./Drawing.module.css";
import { useEffect, useRef, useState } from "react";
import Button from "../button/Button";

let x = 1.0;
let y = 1.0;

function Drawing() {
  const canvasRef = useRef(null);
  const canvasRef2 = useRef(null);
  const [patternImage, setPatternImage] = useState("");

  function minusClick() {
    console.log(patternImage);
    x = Number(x) * 1.08;
    y = Number(y) * 1.08;
    console.log(x, y);
    createPattern(patternImage);
  }

  function plusClick() {
    console.log(patternImage);
    x = Number(x) * 0.8;
    y = Number(y) * 0.8;
    console.log(x, y);
    createPattern(patternImage);
  }

  useEffect(() => {
    setPatternImage(localStorage.getItem("Image"));
  }, []);

  function createPattern(src) {
    const context = canvasRef.current.getContext("2d");
    context.clearRect(0, 0, 302, 152);
    const image = new Image();
    image.src = src;
    context.drawImage(
      image,
      0,
      0,
      image.width * x,
      image.height * y,
      0,
      0,
      image.width,
      image.height
    );
  }

  function chooseDesign(src) {
    const context2 = canvasRef2.current.getContext("2d");
    context2.clearRect(0, 0, 302, 152);
    const design = new Image();
    design.src = src;
    design.onload = () => {
      context2.drawImage(design, 0, 0, 302, 152);
    };
  }

  return (
    <div className={styles.patternContainer}>
      <button
        className={styles.patternimg}
        onClick={() => createPattern(patternImage)}
      >
        <img className={styles.patternimg} src={patternImage} />
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
        onClick={() => chooseDesign("/pulliSven.png")}
      >
        <img className={styles.designbtn2} src="/pulliSven.png" />
      </button>
      <Button className={styles.zoombtn} label="-" onClick={minusClick} />
      <Button className={styles.zoombtn} label="+" onClick={plusClick} />
    </div>
  );
}

export default Drawing;
