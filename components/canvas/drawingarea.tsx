import styles from "./Drawing.module.css";
import { useEffect, useRef, useState } from "react";
import Button from "../button/Button";
import PageLink from "../pagelink/Pagelink";

let x = 1.0;
let y = 1.0;

function Drawing() {
  const canvasRefFabric = useRef(null);
  const canvasRefDesign = useRef(null);
  const [patternImage, setPatternImage] = useState("");
  const [chosenPattern, setChosenPattern] = useState("");

  function minusClick() {
    const image = new Image();
    image.src = chosenPattern;
    if (image.width * (x * 0.8) > 302) {
      x = Number(x) * 0.8;
      y = Number(y) * 0.8;
      createPattern(chosenPattern);
    }
  }

  function plusClick() {
    x = Number(x) * 1.1;
    y = Number(y) * 1.1;
    createPattern(chosenPattern);
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
      image.width,
      image.height,
      0,
      0,
      image.width * x,
      image.height * y
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

  function choosePattern(src) {
    setChosenPattern(src);
    resetZoom();
    createPattern(src);
  }

  function resetZoom() {
    x = 1.0;
    y = 1.0;
  }

  return (
    <div className={styles.patternContainer}>
      <canvas ref={canvasRefFabric} className={styles.canvasFabric}></canvas>
      <canvas ref={canvasRefDesign} className={styles.canvasDesign}></canvas>
      <button
        className={styles.patternimg}
        onClick={() => choosePattern(patternImage)}
      >
        <img className={styles.patternimg} src={patternImage} />
      </button>
      <Button className={styles.minusbtn} label="-" onClick={minusClick} />
      <Button className={styles.plusbtn} label="+" onClick={plusClick} />
      <PageLink href="/design">Different Design</PageLink>
      <button
        className={styles.examplePattern}
        onClick={() => choosePattern("/pusteblume.jpg")}
      >
        <img className={styles.examplePattern} src={"/pusteblume.jpg"} />
      </button>
    </div>
  );
}

export default Drawing;
