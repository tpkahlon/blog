const { createClient } = require("contentful");
const { previewOptions } = require("../../constants");
export default async function handler(req, res) {
  const client = createClient(previewOptions);
  const data = await client.getEntries();
  const [siteEntry] = data.items.filter((entry) => {
    const contentType = entry.sys.contentType.sys.id;
    return contentType === "site";
  });
  return res.status(200).json(siteEntry);
}
