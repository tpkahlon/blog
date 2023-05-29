const { createClient } = require("contentful");
export default async function handler(req, res) {
  const devOptions = {
    environment: "master",
    host: "preview.contentful.com",
    space: "rv8g4s0yjblf",
    accessToken: "z1ndlIRQT8C5eynhI1BsKRf44hqINVkj0MkRSW6cGC0",
  };

  const client = createClient(devOptions);

  const data = await client.getEntries();
  const [siteEntry] = data.items.filter((entry) => {
    const contentType = entry.sys.contentType.sys.id;
    return contentType === "site";
  });

  res.status(200).json(siteEntry);
}
