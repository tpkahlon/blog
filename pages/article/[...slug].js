import Head from "next/head";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
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
  const time = isoDate.substring(0, 10);
  const options = {
    renderNode: {
      [BLOCKS.QUOTE]: (node) => {
        const code = node.content
          .map((block) =>
            block.content.map((element) => element.value).join("")
          )
          .join("\n");
        return <pre>{code}</pre>;
      },
    },
  };
  const { body, name } = props.article.fields;
  const titleName = `${name} - Tej`;
  return (
    <>
      <Head>
        <title>{titleName}</title>
      </Head>
      <main>
        <header>
          <h1>{name}</h1>
          <small>{time}</small>
        </header>
        <hr />
        <div>{documentToReactComponents(body, options)}</div>
      </main>
    </>
  );
}
