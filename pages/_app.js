import Image from "next/image";
import Link from "next/link";
import "../styles/globals.scss";
import styles from "../styles/Home.module.scss";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <div>
        <header>
          <nav role="navigation">
            <Link href="/">Home</Link>
            <Link href="/blog">Blog</Link>
            <a href="https://github.com/tpkahlon" rel="noopener noreferrer">
              Github
            </a>
            <a
              href="https://www.udemy.com/user/54dbc56d3b1f0"
              rel="noopener noreferrer"
            >
              Udemy
            </a>
          </nav>
        </header>
        <div className={styles.image}>
          <Image src="/banner.jpg" alt="Banner" fill />
        </div>
      </div>
    </>
  );
}

export default MyApp;
