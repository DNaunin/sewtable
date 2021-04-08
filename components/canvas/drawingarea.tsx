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
  const selectedPattern = new Image();
  selectedPattern.src = selectedPatternSrc;
  useEffect(() => {
    const context = canvasRefDesign.current.getContext("2d");
    const uploadedImage = new Image();
    uploadedImage.src = uploadedImageSrc;

    context.clearRect(0, 0, selectedPattern.width, selectedPattern.height);

    function drawSelectedPattern() {
      context.drawImage(
        selectedPattern,
        0,
        0,
        selectedPattern.width,

        selectedPattern.height
      );
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
    <div className={styles.container}>
      <canvas
        ref={canvasRefDesign}
        className={styles.canvasDesign}
        height={selectedPattern.height}
        width={selectedPattern.width}
      />
      <button className={styles.patternImg}>
        <img className={styles.patternImg} src={uploadedImageSrc} />
      </button>
      <Button className={styles.minusBtn} label="-" onClick={minusClick} />
      <Button className={styles.plusBtn} label="+" onClick={plusClick} />
      <PageLink href="/design">Different Design</PageLink>
    </div>
  );
}

export default Drawing;
