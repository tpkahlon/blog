const fs = require("fs");
const { createClient } = require("contentful");
const { ENVIRONMENT } = process.env;

const options =
  ENVIRONMENT === "local"
    ? {
        environment: "master",
        host: "preview.contentful.com",
        space: process.env.SPACE,
        accessToken: process.env.CPATOKEN,
      }
    : {
        environment: "master",
        space: process.env.SPACE,
        accessToken: process.env.CDATOKEN,
      };

const client = createClient(options);

client.withoutUnresolvableLinks.getEntries().then((data) => {
  const [siteEntry] = data.items.filter(
    (entry) => entry.sys.contentType.sys.id === "site"
  );
  const jsonString = JSON.stringify(siteEntry, null, 2);
  const filePath = "./public/data.json";
  fs.writeFile(filePath, jsonString, (err) => {
    if (err) {
      console.error("Failed to save JSON data:", err);
    } else {
      console.log("JSON data saved to file:", filePath);
    }
  });
});
