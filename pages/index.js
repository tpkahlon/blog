import Link from "next/link";
import Head from "next/head";
import data from "../public/data.json";

export default function Home() {
  const articles = data.fields.articles.map(
    ({ fields: { name, slug }, sys: { id, updatedAt } }) => {
      const date = new Date(updatedAt);
      const isoDate = date.toISOString();
      const time = `${isoDate.substring(0, 10)} ${isoDate.substring(11, 19)}`;
      return (
        <Link href={`/article/${slug}`} key={id}>
          <span>{time}</span>
          {name}
        </Link>
      );
    }
  );
  return (
    <>
      <Head>
        <title>Home - Tej</title>
      </Head>
      <main>{articles}</main>
    </>
  );
}
