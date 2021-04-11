import styles from "./Drawing.module.css";
import { useEffect, useRef, useState } from "react";
import Button from "../button/Button";
import PageLink from "../pagelink/Pagelink";
import { useRouter } from "next/router";

function getFromLocalStorage<T>(key: string, defaultValue: T) {
  return localStorage.getItem(key) || defaultValue;
}
function Drawing() {
  const router = useRouter();
  const [zoom, setZoom] = useState<number>(1.0);
  const canvasRefDesign = useRef<HTMLCanvasElement>(null);
  const uploadedImageSrc = getFromLocalStorage<string>(
    "Image",
    "/dandelion.jpg"
  );
  const selectedPatternSrc = getFromLocalStorage<string>("Design", "");
  useEffect(() => {
    const designCanvas = canvasRefDesign.current;
    const context = designCanvas.getContext("2d");
    const uploadedImage = new Image();
    uploadedImage.crossOrigin = "anonymous";
    uploadedImage.src = uploadedImageSrc;
    const selectedPattern = new Image();
    selectedPattern.crossOrigin = "anonymous";
    selectedPattern.src = selectedPatternSrc;
    function handleSelectedPatternLoad() {
      canvasRefDesign.current.width = selectedPattern.width;
      canvasRefDesign.current.height = selectedPattern.height;
      context.clearRect(0, 0, selectedPattern.width, selectedPattern.height);
      if (uploadedImage.complete) {
        handleUploadedImageLoad();
      } else {
        uploadedImage.onload = handleUploadedImageLoad;
      }
    }
    function handleUploadedImageLoad() {
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
      context.drawImage(
        selectedPattern,
        0,
        0,
        selectedPattern.width,
        selectedPattern.height
      );
    }
    if (selectedPattern.complete) {
      handleSelectedPatternLoad();
    } else {
      selectedPattern.onload = handleSelectedPatternLoad;
    }
  }, [uploadedImageSrc, selectedPatternSrc, zoom]);
  function minusClick() {
    setZoom(+zoom * 0.8);
  }
  function plusClick() {
    setZoom(+zoom * 1.1);
  }

  function saveCanvas() {
    const designCanvas = canvasRefDesign.current;
    const canvasImage = designCanvas.toDataURL();
    localStorage.setItem("canvasImage", canvasImage);
    router.push("/final");
  }

  return (
    <div className={styles.container}>
      <canvas ref={canvasRefDesign} className={styles.canvasDesign} />
      <button className={styles.patternImg}>
        <img className={styles.patternImg} src={uploadedImageSrc} />
      </button>
      <Button className={styles.minusBtn} label="-" onClick={minusClick} />
      <Button className={styles.plusBtn} label="+" onClick={plusClick} />
      <PageLink href="/design">Design Page</PageLink>
      <Button onClick={saveCanvas} label="Show Final Product" />
    </div>
  );
}
export default Drawing;
