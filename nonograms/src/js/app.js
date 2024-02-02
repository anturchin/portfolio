import { easyTemplates } from "./modules/easy-templates";
import { getThemeLs } from "./utils/get-theme-ls";
import { generateHeader } from "./components/generate-header";
import { generateMain } from "./components/generate-main";
import { generateSelectedGame } from "./components/generate-selected-game";
import { Timer } from "./modules/timer";
import { SoundManager } from "./modules/sound-manager";

const timer = new Timer();
const sound = new SoundManager();

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

export const newGame = () => {
  const selectTemplateGame = generateSelectedGame(easyTemplates, timer, sound);
  startGame(selectTemplateGame);
};

const app = () => {
  newGame();
};

export default app;
