import Image from "next/image";
import Link from "next/link";
import "../styles/globals.scss";
import styles from "../styles/Home.module.scss";
import AppContext from "../context/AppContext";
import { isPreview } from "../constants";
import { useState } from "react";

function MyApp(props) {
  const { Component, pageProps } = props;
  const [previewData, setPreviewData] = useState(null);
  const handleClick = async () => {
    const data = await fetch(`/api/previewData`);
    const parsedData = await data.json();
    setPreviewData(parsedData);
  };
  return (
    <AppContext.Provider
      value={{
        previewData,
      }}
    >
      <Component {...pageProps} />
      <div>
        <header>
          {isPreview ? (
            <button className="refresh" onClick={() => handleClick()}>
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
