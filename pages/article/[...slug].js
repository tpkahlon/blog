import Head from "next/head";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import data from "../../public/data.json";

export function getStaticPaths() {
  const paths = data.fields.articles.map(({ fields: { slug } }) => {
    return {
      params: {
        slug: [slug],
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
}
export function getStaticProps(context) {
  const [article] = data.fields.articles.filter(({ fields: { slug } }) => {
    return slug === context.params.slug.join("");
  });
  return {
    props: {
      article,
    },
  };
}

export default function Home(props) {
  if (!props || !props?.article?.fields?.name) return null;
  const date = new Date(props.article.sys.updatedAt);
  const isoDate = date.toISOString();
  const time = `${isoDate.substring(0, 10)} ${isoDate.substring(11, 19)}`;
  return (
    <>
      <Head>
        <title>{props.article.fields.name} - Tej</title>
        <meta name="description" content="Coming soon..." />
      </Head>
      <main>
        <header>
          <small>{time}</small>
          <h1>{props.article.fields.name}</h1>
        </header>
        <section>
          {documentToReactComponents(props.article.fields.body)}
        </section>
      </main>
    </>
  );
}
