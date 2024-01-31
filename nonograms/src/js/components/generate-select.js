import { createHtmlElement } from "../utils/create-html-element";

const STYLES = {
  select: "select",
};

export const generateSelect = () => {
  const select = createHtmlElement("div", STYLES.select);
  return select;
};
