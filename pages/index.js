import { useContext } from "react";
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.scss";
import deliveryData from "../public/data.json";
import AppContext from "../context/AppContext";

export default function Home() {
  const { previewData, preview } = useContext(AppContext);
  const data = preview ? previewData : deliveryData;
  return (
    <>
      <Head>
        <title>Home - Tej</title>
      </Head>
      <main className={styles.main}>
        <div>
          <header>
            <h1>Hello!</h1>
            <p>{data.fields.name}</p>
          </header>
          <hr />
          <h2>Development</h2>
          <p>
            You can find me on{" "}
            <a href="https://github.com/tpkahlon" rel="noopener noreferrer">
              GitHub
            </a>
            , where I share my latest creations. Here are some notable ones:
          </p>
          <ul>
            <li>
              <a
                href="https://github.com/tpkahlon/jackal"
                rel="noopener noreferrer"
                className={styles.link}
              >
                <strong>Jackal</strong>
              </a>
              : Explore TV content beyond limitations.
            </li>
            <li>
              <a
                href="https://github.com/tpkahlon/cs1000"
                rel="noopener noreferrer"
                className={styles.link}
              >
                <strong>CS1000</strong>
              </a>
              : A beginner's reference site offering insights into various
              subjects in CS and Software Engineering. It serves as a helpful
              resource for students to supplement their undergraduate programs.
            </li>
            <li>
              <a
                href="https://github.com/tpkahlon/github-unstar"
                rel="noopener noreferrer"
                className={styles.link}
              >
                <strong>Github-Unstar</strong>
              </a>
              : Quickly unstar all your GitHub repositories within seconds.
            </li>
          </ul>
          <h2>Teaching</h2>
          <p>
            You can find me on{" "}
            <a
              href="https://www.udemy.com/user/54dbc56d3b1f0"
              rel="noopener noreferrer"
            >
              Udemy
            </a>
            , where I share my experience on various concepts. Here are some
            notable ones:
          </p>
          <ul>
            <li>
              <a
                href="https://www.udemy.com/course/contentful-for-frontend-developers"
                rel="noopener noreferrer"
                className={styles.link}
              >
                <strong>Master Contentful</strong>
              </a>
              : Enroll in this Udemy course to learn the fundamentals of
              Contentful CMS.
            </li>
          </ul>
          <h2>Writing</h2>
          <p>
            You can see all of my articles&nbsp;
            <Link href="/blog">here</Link>.
          </p>
        </div>
      </main>
    </>
  );
}
