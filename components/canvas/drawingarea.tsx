import styles from "./Drawing.module.css";
import { useEffect, useRef, useState } from "react";
import Button from "../button/Button";
import Pagelink from "../pagelink/Pagelink";

let x = 1.0;
let y = 1.0;

function Drawing() {
  const canvasRefFabric = useRef(null);
  const canvasRefDesign = useRef(null);
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
    chooseDesign(localStorage.getItem("Design"));
  }, []);

  function createPattern(src) {
    const contextFabric = canvasRefFabric.current.getContext("2d");
    contextFabric.clearRect(0, 0, 302, 152);
    const image = new Image();
    image.src = src;
    contextFabric.drawImage(
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
    const contextDesign = canvasRefDesign.current.getContext("2d");
    contextDesign.clearRect(0, 0, 302, 152);
    const design = new Image();
    design.src = src;
    design.onload = () => {
      contextDesign.drawImage(design, 0, 0, 302, 152);
    };
  }

  return (
    <div className={styles.patternContainer}>
      <canvas ref={canvasRefFabric} className={styles.canvasFabric}></canvas>
      <canvas ref={canvasRefDesign} className={styles.canvasDesign}></canvas>
      <button
        className={styles.patternimg}
        onClick={() => createPattern(patternImage)}
      >
        <img className={styles.patternimg} src={patternImage} />
      </button>
      <Button className={styles.minusbtn} label="-" onClick={minusClick} />
      <Button className={styles.plusbtn} label="+" onClick={plusClick} />
      <Pagelink href="/design">Different Design</Pagelink>
    </div>
  );
}

export default Drawing;
