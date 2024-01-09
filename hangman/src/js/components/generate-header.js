import { createHtmlElement } from "../helpers/create-html-element";

export const generateHeader = () => {
  const header = createHtmlElement("header", "header");
  const headerTitle = createHtmlElement("h1", "header__title");

  headerTitle.textContent = "Hangman Game";

  header.append(headerTitle);

  return header;
};
