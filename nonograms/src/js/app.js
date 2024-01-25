import { toggleTheme } from "./handlers/toggle-theme";
import { onChangeLevel } from "./handlers/on-change-level";
import { generateHeader } from "./components/generate-header";
import { generateSelect } from "./components/generate-select";
import { generateLevel } from "./components/generate-level";
import { generateMain } from "./components/generate-main";

const app = () => {
  const body = document.querySelector("body");
  const listLevel = document.querySelector(".level__list");
  const themeToggleBtn = document.querySelector("#toggle-theme");

  const header = generateHeader();
  const main = generateMain();
  const selectBlock = generateSelect();
  const levelList = generateLevel();

  selectBlock.append(levelList);
  main.append(selectBlock);
  console.log(header);
  console.log(main);

  themeToggleBtn.addEventListener("click", toggleTheme);
  listLevel.addEventListener("click", onChangeLevel);
};

export default app;
