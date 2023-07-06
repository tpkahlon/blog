import { useContext } from "react";
import Link from "next/link";
import deliveryData from "../public/data.json";
import AppContext from "../context/AppContext";
import styles from "../styles/Home.module.scss";

const Home = () => {
  const { previewData } = useContext(AppContext);
  const data = Boolean(previewData) ? previewData : deliveryData;
  return (
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
              href="http://zero-to-high-school.vercel.app"
              rel="noopener noreferrer"
              className={styles.link}
            >
              <strong>Zero to High School</strong>
            </a>
            : Learn school subjects remotely, from Grade 1 to 12, following
            NCERT curriculum. One touch away education.
          </li>
          <li>
            <a
              href="http://hnjobs.netlify.app"
              rel="noopener noreferrer"
              className={styles.link}
            >
              <strong>HNJobs</strong>
            </a>
            : Simple, easy to scroll list of jobs posted on HN - Who's hiring
            thread.
          </li>
          <li>
            <a
              href="http://jackal.surge.sh"
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
  );
};

export default Home;
