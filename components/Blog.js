import styles from "../styles/Home.module.scss";

const Blog = ({ articles }) => {
  return (
    <main>
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
  );
};

export default Blog;
