import styles from "../styles/Upload.module.css";
import Footer from "../components/footer/Footer";
import React, { useState } from "react";
import PageLink from "../components/pagelink/Pagelink";
import Loading from "../components/loading/Loading";

const cloud = process.env.NEXT_PUBLIC_CLOUDINARY_URL;

export default function Upload() {
  const [loading, setLoading] = useState(false);
  const [images, setImages] = useState([]);

  const uploadImage = async (file) => {
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "sewtableimages");

    const res = await fetch(
      `https://api.cloudinary.com/v1_1/${cloud}/image/upload`,
      {
        method: "POST",
        body: data,
      }
    );
    const uploadedFile = await res.json();
    return uploadedFile.secure_url;
  };

  const uploadImages = async (e) => {
    const savedImages = JSON.parse(localStorage.getItem("Images"));
    const urls = [];
    const files: FileList = e.target.files;
    console.log(files);
    setLoading(true);
    for (let i = 0; i < files.length; i++) {
      const newPath = await uploadImage(files[i]);
      urls.push(newPath);
    }
    setLoading(false);
    setImages(urls);
    const imageArray = [...(savedImages || []), ...urls];
    localStorage.setItem("Images", JSON.stringify(imageArray));
  };

  return (
    <>
      <main className={styles.main}>
        <div className={styles.title}>Upload</div>
        <div className={styles.subtitle}>Upload your fabric photo here</div>
        <form method="post" encType="multipart/form-data">
          <input
            className={styles.input}
            type="file"
            name="files[]"
            multiple
            onChange={uploadImages}
          />

          {loading ? (
            <Loading />
          ) : (
            images.map((image, index) => (
              <img key={index} src={image} className={styles.uploadedImage} />
            ))
          )}
        </form>
        <PageLink href="/design">Choose a Sewing Pattern</PageLink>
        <p id="data"></p>
        <script src="upload.js"></script>
      </main>
      <Footer />
    </>
  );
}
