import { useContext } from "react";
import Head from "next/head";
import AppContext from "../../context/AppContext";
import Article from "../../components/Article";
import deliveryData from "../../public/data.json";

export function getStaticPaths() {
  const paths = deliveryData.fields.articles.map(({ fields: { slug } }) => {
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
  const [article] = deliveryData.fields.articles.filter(
    ({ fields: { slug } }) => {
      return slug === context.params.slug.join("");
    }
  );
  return {
    props: {
      article,
      slug: context.params.slug.join(""),
    },
  };
}

export default function Home(props) {
  if (!props || !props?.article?.fields?.name) return null;
  const { previewData } = useContext(AppContext);
  const article = Boolean(previewData)
    ? previewData.fields.articles.filter(({ fields: { slug } }) => {
        return slug === props.slug;
      })?.[0]
    : props.article;
  const date = new Date(article.sys.updatedAt);
  const isoDate = date.toISOString();
  const time = isoDate.substring(0, 10);
  const { body, name } = article.fields;
  const titleName = `${name} - Tej`;
  const options = {
    body,
    name,
    time,
  };
  return (
    <>
      <Head>
        <title>{titleName}</title>
      </Head>
      <Article {...options} />
    </>
  );
}
