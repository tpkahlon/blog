import Link from "next/link";
import Head from "next/head";
import data from "../public/data.json";

export default function Home() {
  const articles = data.fields.articles.map(
    ({ fields: { name, slug }, sys: { id } }) => {
      return (
        <Link href={`/article/${slug}`} key={id}>
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
