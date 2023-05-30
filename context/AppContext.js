import { createContext } from "react";

const AppContext = createContext({
  data: null,
  preview: false,
  setData: () => {},
});

export default AppContext;
