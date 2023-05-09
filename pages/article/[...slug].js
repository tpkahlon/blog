import Head from "next/head";
import Image from "next/image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import data from "../../public/data.json";
import styles from "../../styles/Article.module.scss";

const ImageComponent = ({ title, url }) => {
  return (
    <div className={styles.image}>
      <Image src={`https://${url}`} alt={title} fill />
    </div>
  );
};

const options = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      const {
        title,
        file: { url },
      } = node.data.target.fields;
      return <ImageComponent title={title} url={url} />;
    },
  },
};

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
  console.log("props", props);
  if (!props || !props?.article?.fields?.name) return null;
  const date = new Date(props.article.sys.updatedAt);
  const isoDate = date.toISOString();
  const time = isoDate.substring(0, 10);
  // const time = `${isoDate.substring(0, 10)} ${isoDate.substring(11, 19)}`;
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
        <div>
          {documentToReactComponents(props.article.fields.body, options)}
        </div>
      </main>
    </>
  );
}
