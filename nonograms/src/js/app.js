import { easyTemplates } from "./easy-templates";
import { getThemeLs } from "./helpers/get-theme-ls";
import { generateHeader } from "./components/generate-header";
import { generateMain } from "./components/generate-main";
import { generateSelectedGame } from "./components/generate-selected-game";

export const startGame = (elem) => {
  const themeBody = getThemeLs({ light: "light-theme", dark: "dark-theme" });
  const body = document.querySelector("body");
  body.classList.add(themeBody);
  const header = generateHeader();
  const main = generateMain();
  main.append(elem);
  body.append(header);
  body.append(main);
};

const init = () => {
  const selectTemplateGame = generateSelectedGame(easyTemplates);
  startGame(selectTemplateGame);
};

const app = () => {
  init();
};

export default app;
