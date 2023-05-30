const { createClient } = require("contentful");
const { previewOptions } = require("../../constants");
export default async function handler(req, res) {
  const client = createClient(previewOptions);
  return res.status(200).json(client);
}
