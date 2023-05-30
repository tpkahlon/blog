const isLocal = process.env.ENVIRONMENT === "local";

const devOptions = {
  environment: "master",
  host: "preview.contentful.com",
  space: "rv8g4s0yjblf",
  accessToken: "z1ndlIRQT8C5eynhI1BsKRf44hqINVkj0MkRSW6cGC0",
};

const productionOptions = {
  environment: "master",
  space: "rv8g4s0yjblf",
  accessToken: "9LGAzdfrZ9Di11IXb65jePOEw1J9I4ZQcrZBiR2Ugjw",
};

const contentfulClient = isLocal ? devOptions : productionOptions;

module.exports = {
  contentfulClient,
  devOptions,
  isLocal,
  productionOptions,
};
