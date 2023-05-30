import { useContext } from "react";
import Link from "next/link";
import Head from "next/head";
import AppContext from "../../context/AppContext";
import Blog from "../../components/Blog";
import deliveryData from "../../public/data.json";

export default function Home() {
  const { previewData } = useContext(AppContext);
  const articleList = Boolean(previewData)
    ? previewData.fields.articles
    : deliveryData.fields.articles;
  const articles = articleList.map(
    ({ fields: { name, slug }, sys: { id, updatedAt } }) => {
      const date = new Date(updatedAt);
      const isoDate = date.toISOString();
      const time = isoDate.substring(0, 10);
      const href = `/article/${slug}`;
      return (
        <div key={id}>
          <Link href={href}>{name}</Link>
          <small>{time}</small>
        </div>
      );
    }
  );
  return (
    <>
      <Head>
        <title>Blog - Tej</title>
      </Head>
      <Blog articles={articles} />
    </>
  );
}
