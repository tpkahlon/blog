const { createClient } = require("contentful");
const { devOptions } = require("../../constants");
export default async function handler(req, res) {
  const client = createClient(devOptions);
  const data = await client.getEntries();
  const [siteEntry] = data.items.filter((entry) => {
    const contentType = entry.sys.contentType.sys.id;
    return contentType === "site";
  });
  return res.status(200).json(siteEntry);
}
