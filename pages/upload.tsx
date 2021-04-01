import Head from "next/head";
import styles from "../styles/Upload.module.css";
import Footer from "../components/footer/Footer";
import { useState } from "react";
import Button from "../components/button/Button";

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
      "https://api.cloudinary.com/v1_1/diote21e/image/upload",
      {
        method: "POST",
        body: data,
      }
    );

    const file = await res.json();
    setImage(file.secure_url);
    setLoading(false);
  };

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Sewtable</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
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

          {loading ? (
            <div className={styles.subtitle}>Loading... </div>
          ) : (
            <img src={image} className={styles.image} />
          )}
          {console.log(image)}
        </form>

        <Button label={"Go to combine page"} />
        <p id="data"></p>
        <script src="upload.js"></script>
      </main>
      <Footer />
    </>
  );
}
