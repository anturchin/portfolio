import { createHtmlElement } from "../utils/create-html-element";

const STYLES = {
  nonograms: "nonograms",
};

export const generateGameSection = () => {
  const div = createHtmlElement("div", STYLES.nonograms);
  return div;
};
