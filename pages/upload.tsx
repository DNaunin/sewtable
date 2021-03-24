import Head from "next/head";
import styles from "../styles/Upload.module.css";
import Button from "../components/button/Button";
import { useForm } from "react-hook-form";
import Footer from "../components/footer/Footer";

export default function Upload() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
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
        <div className={styles.subtitle}>Upload your pattern here</div>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
          <input
            ref={register}
            type="file"
            name="picture"
            className={styles.forminput}
          />
          <Button label="Upload" />
        </form>
      </main>
      <Footer />
    </>
  );
}
