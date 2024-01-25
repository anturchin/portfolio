import { createHtmlElement } from "../helpers/create-html-element";

const theme = localStorage.getItem("theme");

const STYLES = {
  header: "container",
  h1: "title",
  button: theme === "dark" ? "dark__button" : "light__button",
};

export const generateHeader = () => {
  const buttonID = "toggle-theme";
  const buttonText = "Change Theme";
  const h1Text = "Nonograms Game";

  const header = createHtmlElement("header", STYLES.header);
  const h1 = createHtmlElement("h1", STYLES.h1, h1Text);
  const button = createHtmlElement("button", STYLES.button, buttonText, null, buttonID);
  header.append(h1);
  header.append(button);
  return header;
};
