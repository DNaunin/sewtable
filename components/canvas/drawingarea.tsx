import styles from "./Drawing.module.css";
import { useEffect, useRef, useState } from "react";
import Button from "../button/Button";
import PageLink from "../pagelink/Pagelink";

function getFromLocalStorage<T>(key: string, defaultValue: T) {
  return localStorage.getItem(key) || defaultValue;
}

function Drawing() {
  const [zoom, setZoom] = useState<number>(1.0);
  const canvasRefDesign = useRef<HTMLCanvasElement>(null);
  const uploadedImageSrc = getFromLocalStorage<string>(
    "Image",
    "/pusteblume.jpg"
  );
  const selectedPatternSrc = getFromLocalStorage<string>("Design", "");
  useEffect(() => {
    const context = canvasRefDesign.current.getContext("2d");
    context.clearRect(0, 0, 302, 152);
    const uploadedImage = new Image();
    uploadedImage.src = uploadedImageSrc;
    const selectedPattern = new Image();
    selectedPattern.src = selectedPatternSrc;
    function drawSelectedPattern() {
      context.drawImage(selectedPattern, 0, 0, 302, 152);
    }
    function drawUploadedImage() {
      context.drawImage(
        uploadedImage,
        0,
        0,
        uploadedImage.width,
        uploadedImage.height,
        0,
        0,
        uploadedImage.width * zoom,
        uploadedImage.height * zoom
      );
      if (selectedPattern.complete) {
        drawSelectedPattern();
      } else {
        selectedPattern.onload = drawSelectedPattern;
      }
    }
    if (uploadedImage.complete) {
      drawUploadedImage();
    } else {
      uploadedImage.onload = drawUploadedImage;
    }
  }, [uploadedImageSrc, selectedPatternSrc, zoom]);

  function minusClick() {
    const uploadedImage = new Image();
    uploadedImage.src = uploadedImageSrc;
    if (uploadedImage.width * (+zoom * 0.8) > 302) {
      setZoom(+zoom * 0.8);
    }
  }
  function plusClick() {
    setZoom(+zoom * 1.1);
  }

  return (
    <div className={styles.patternContainer}>
      <canvas ref={canvasRefDesign} className={styles.canvasDesign} />
      <button className={styles.patternimg}>
        <img className={styles.patternimg} src={uploadedImageSrc} />
      </button>
      <Button className={styles.minusbtn} label="-" onClick={minusClick} />
      <Button className={styles.plusbtn} label="+" onClick={plusClick} />
      <PageLink href="/design">Different Design</PageLink>
    </div>
  );
}

export default Drawing;
