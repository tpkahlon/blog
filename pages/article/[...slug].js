import Head from "next/head";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, MARKS } from "@contentful/rich-text-types";
import data from "../../public/data.json";
import ImageComponent from "../../components/ImageComponent";

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
  const time = isoDate.substring(0, 10);
  const options = {
    renderNode: {
      [BLOCKS.QUOTE]: (node) => {
        const code = node.content
          .map((i) => i.content.map((j) => j.value).join(""))
          .join("\n");
        return <pre>{code}</pre>;
      },
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        const {
          title,
          file: { url },
        } = node.data.target.fields;
        return <ImageComponent title={title} url={url} />;
      },
    },
  };
  const titleName = `${props.article.fields.name} - Tej`;
  return (
    <>
      <Head>
        <title>{titleName}</title>
      </Head>
      <main>
        <header>
          <h1>{props.article.fields.name}</h1>
          <small>{time}</small>
        </header>
        <hr />
        <div>
          {documentToReactComponents(props.article.fields.body, options)}
        </div>
      </main>
    </>
  );
}
