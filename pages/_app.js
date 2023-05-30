import "../styles/globals.scss";
import { useState } from "react";
import AppContext from "../context/AppContext";
import Layout from "../components/Layout";

function MyApp(props) {
  const { Component, pageProps } = props;
  const [previewData, setPreviewData] = useState(null);
  const handleClick = async () => {
    const data = await fetch(`/api/previewData`);
    const parsedData = await data.json();
    setPreviewData(parsedData);
  };
  return (
    <AppContext.Provider
      value={{
        previewData,
      }}
    >
      <Component {...pageProps} />
      <Layout handleClick={handleClick} />
    </AppContext.Provider>
  );
}

export default MyApp;
