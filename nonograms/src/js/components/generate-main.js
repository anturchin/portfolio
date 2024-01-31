import { createHtmlElement } from "../utils/create-html-element";

const STYLES = {
  main: "main",
};

export const generateMain = () => {
  const main = createHtmlElement("main", STYLES.main);
  return main;
};
