import { BLOCKS } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const Article = ({ body, name, time }) => {
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
  return (
    <main>
      <header>
        <h1>{name}</h1>
        <small>{time}</small>
      </header>
      <hr />
      <div>{documentToReactComponents(body, options)}</div>
    </main>
  );
};

export default Article;
