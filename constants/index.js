const previewOptions = {
  environment: "master",
  host: "preview.contentful.com",
  space: "rv8g4s0yjblf",
  accessToken: "z1ndlIRQT8C5eynhI1BsKRf44hqINVkj0MkRSW6cGC0",
};

const deliveryOptions = {
  environment: "master",
  space: "rv8g4s0yjblf",
  accessToken: "9LGAzdfrZ9Di11IXb65jePOEw1J9I4ZQcrZBiR2Ugjw",
};

const defaultAppContext = {
  preview: false,
  previewData: null,
  setPreviewData: () => {},
};

const isPreview = process.env.NODE_ENV === "development";

module.exports = {
  defaultAppContext,
  deliveryOptions,
  isPreview,
  previewOptions,
};
