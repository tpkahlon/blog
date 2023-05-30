import Image from "next/image";
import Link from "next/link";
import "../styles/globals.scss";
import styles from "../styles/Home.module.scss";
import { isLocal } from "../constants";
import AppContext from "../context/AppContext";
import { useState } from "react";

function MyApp({ Component, pageProps }) {
  const [preview, setPreview] = useState(false);
  const [data, setData] = useState(null);
  const handleClick = async () => {
    const data = await fetch(`/api/data`);
    const parsedData = await data.json();
    setPreview(true);
    setData(parsedData);
  };
  return (
    <AppContext.Provider
      value={{
        data,
        preview,
        setData,
      }}
    >
      <Component {...pageProps} />
      <div>
        <header>
          {isLocal ? (
            <button className={styles.refresh} onClick={() => handleClick()}>
              Refresh
            </button>
          ) : null}
          <nav role="navigation" className={styles.nav}>
            <Link href="/" className="button">
              Home
            </Link>
            <Link href="/blog" className="button">
              Blog
            </Link>
            <a
              href="https://twitter.com/iamtejkahlon"
              rel="noopener noreferrer"
              className="button"
            >
              Twitter
            </a>
            <a
              href="https://github.com/tpkahlon"
              rel="noopener noreferrer"
              className="button"
            >
              GitHub
            </a>
            <a
              href="https://www.udemy.com/user/54dbc56d3b1f0"
              rel="noopener noreferrer"
              className="button"
            >
              Udemy
            </a>
          </nav>
          <div className={styles.image}>
            <Image src="/banner.jpg" alt="Banner" fill />
          </div>
        </header>
      </div>
    </AppContext.Provider>
  );
}

export default MyApp;
