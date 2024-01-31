import { createHtmlElement } from "../utils/create-html-element";
import { toggleTheme } from "../utils/toggle-theme";
import { getThemeLs } from "../utils/get-theme-ls";

const STYLES = {
  header: "container",
  title: "title",
};

export const generateHeader = () => {
  const themeBtn = getThemeLs({ light: "light__button", dark: "dark__button" });

  const buttonID = "toggle-theme";
  const buttonText = "Change Theme";
  const h1Text = "Nonograms Game";

  const header = createHtmlElement("header", STYLES.header);
  const title = createHtmlElement("h1", STYLES.title, h1Text);
  const button = createHtmlElement("button", themeBtn, buttonText, null, buttonID);
  button.addEventListener("click", toggleTheme);
  header.append(title);
  header.append(button);
  return header;
};
