import { createHtmlElement } from "../helpers/create-html-element";

const theme = localStorage.getItem("theme");

const STYLES = {
  header: "container",
  title: "title",
  button: theme === "dark" ? "dark__button" : "light__button",
};

export const generateHeader = () => {
  const buttonID = "toggle-theme";
  const buttonText = "Change Theme";
  const h1Text = "Nonograms Game";

  const header = createHtmlElement("header", STYLES.header);
  const title = createHtmlElement("h1", STYLES.title, h1Text);
  const button = createHtmlElement("button", STYLES.button, buttonText, null, buttonID);
  header.append(title);
  header.append(button);
  return header;
};
