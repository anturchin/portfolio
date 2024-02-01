import { createHtmlElement } from "../utils/create-html-element";

const STYLES = {
  popup: "popup",
  show: "show",
};

export const generateMessage = () => {
  const messageWrapper = createHtmlElement(
    "div",
    [STYLES.popup, STYLES.show],
    "The game progress is saved",
  );
  return messageWrapper;
};
