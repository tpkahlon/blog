import Link from "next/link";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <header>
        <nav>
          <Link href="/">Home</Link>
          <a href="https://life-of-tej.netlify.app" rel="noopener noreferrer">
            Blog
          </a>
          <a href="https://github.com/tpkahlon" rel="noopener noreferrer">
            Github
          </a>
        </nav>
      </header>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
