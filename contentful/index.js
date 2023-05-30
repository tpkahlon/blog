const fs = require("fs");
const { createClient } = require("contentful");
const { contentfulClient } = require("../constants");

const client = createClient(contentfulClient);

client.withoutUnresolvableLinks
  .getEntries()
  .then((data) => {
    const filePath = "./public/data.json";
    const [siteEntry] = data.items.filter((entry) => {
      const contentType = entry.sys.contentType.sys.id;
      return contentType === "site";
    });
    const jsonString = JSON.stringify(siteEntry);
    fs.writeFile(filePath, jsonString, (err) => {
      if (err) {
        console.error("Failed to save JSON data:", err);
      } else {
        console.log("JSON data saved to file:", filePath);
      }
    });
  })
  .catch((e) => console.error("Data fetching failed: ", e));
