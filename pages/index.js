import Link from "next/link";
import Head from "next/head";
import data from "../public/data.json";
import styles from "../styles/Tagline.module.scss";

export default function Home() {
  const articles = data.fields.articles.map(
    ({ fields: { name, slug }, sys: { id } }) => {
      return (
        <Link href={`/article/${slug}`} key={id}>
          {name}
        </Link>
      );
    }
  );
  return (
    <>
      <Head>
        <title>Home - Tej</title>
      </Head>
      <main>
        <div className={styles.tagline}>
          <h1>Tej Kahlon</h1>
          <p>
            Crafting captivating digital experiences with the power of
            JavaScript, React, CSS and a passion for front-end excellence.
          </p>
        </div>
        {articles}
      </main>
    </>
  );
}
