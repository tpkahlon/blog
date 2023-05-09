import Link from "next/link";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <header>
        <nav>
          <Link href="/">Home</Link>
          <a href="https://tpkahlon.netlify.app" rel="noopener noreferrer">
            Blog
          </a>
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
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
