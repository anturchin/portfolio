import { createHtmlElement } from "../helpers/create-html-element";

const STYLES = {
  nonograms: "nonograms",
};

export const generateGameSection = () => {
  const div = createHtmlElement("div", STYLES.nonograms);
  return div;
};
