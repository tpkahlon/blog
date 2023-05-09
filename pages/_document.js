import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `if(!sessionStorage.getItem("_swa")&&document.referrer.indexOf(location.protocol+"//"+location.host)!== 0){fetch("https://counter.dev/track?"+new URLSearchParams({referrer:document.referrer,screen:screen.width+"x"+screen.height,user:"tpkahlon",utcoffset:"-5"}))};sessionStorage.setItem("_swa","1");`,
          }}
        ></script>
        <meta
          name="description"
          content="In this blog, Tej, a front-end developer with over two years of professional experience, shares insights into his world. Tej discusses the challenges he has faced as a developer, the skills he has developed over time, and the latest trends in the field. He also provides valuable advice for new developers who are just starting out. With Tej's experience and expertise, readers can gain a better understanding of what it takes to succeed in the front-end development world."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
