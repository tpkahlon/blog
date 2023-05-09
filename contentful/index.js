const fs = require("fs");
const { createClient } = require("contentful");

const client = createClient({
  space: "rv8g4s0yjblf",
  environment: "master",
  accessToken: "9LGAzdfrZ9Di11IXb65jePOEw1J9I4ZQcrZBiR2Ugjw",
});

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
