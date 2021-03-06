import styles from "../styles/Upload.module.css";
import Footer from "../components/footer/Footer";
import React, { useState } from "react";
import PageLink from "../components/pagelink/Pagelink";
import Loading from "../components/loading/Loading";

const cloud = process.env.NEXT_PUBLIC_CLOUDINARY_URL;

export default function Upload() {
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState("");

  const uploadImage = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "sewtableimages");
    setLoading(true);

    const res = await fetch(
      `https://api.cloudinary.com/v1_1/${cloud}/image/upload`,
      {
        method: "POST",
        body: data,
      }
    );

    const file = await res.json();
    setImage(file.secure_url);
    localStorage.setItem("Image", file.secure_url);
    setLoading(false);
  };

  return (
    <>
      <main className={styles.main}>
        <div className={styles.title}>Upload</div>
        <div className={styles.subtitle}>Upload your fabric photo here</div>
        <form
          className={styles.form}
          method="post"
          encType="multipart/form-data"
        >
          <input
            className={styles.input}
            type="file"
            name="files[]"
            multiple
            onChange={uploadImage}
          />

          {loading ? <Loading /> : <img src={image} className={styles.image} />}
        </form>
        <PageLink href="/design">Choose a Sewing Pattern</PageLink>
        <p id="data"></p>
        <script src="upload.js"></script>
      </main>
      <Footer />
    </>
  );
}
