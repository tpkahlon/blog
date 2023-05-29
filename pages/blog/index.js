import { useContext } from "react";
import Link from "next/link";
import Head from "next/head";
import data from "../../public/data.json";
import styles from "../../styles/Home.module.scss";
import AppContext from "../../context/AppContext";

export default function Home() {
  const { data: previewData, preview } = useContext(AppContext);
  const allArticles = preview ? previewData.fields.articles : data.fields.articles;
  const articles = allArticles.map(
    ({ fields: { name, slug }, sys: { id, updatedAt } }) => {
      const date = new Date(updatedAt);
      const isoDate = date.toISOString();
      const time = isoDate.substring(0, 10);
      const href = `/article/${slug}`;
      return (
        <div key={id}>
          <Link href={href}>{name}</Link>
          <small>{time}</small>
        </div>
      );
    }
  );
  return (
    <>
      <Head>
        <title>Blog - Tej</title>
      </Head>
      <main className={styles.main}>
        <header>
          <h1>Blog</h1>
          <p>
            Here on this page, you will find a list of all the articles I have
            written and published.
          </p>
        </header>
        <hr />
        <h2>Archive</h2>
        <div className={styles.articles}>{articles}</div>
      </main>
    </>
  );
}
