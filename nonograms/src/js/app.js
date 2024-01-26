import { easyTemplates } from "./easy-templates";
import { mediumTemplates } from "./medium-templates";
import { hardTemplates } from "./hard-templates";
import { toggleTheme } from "./handlers/toggle-theme";
import { onChangeLevel } from "./handlers/on-change-level";
import { generateHeader } from "./components/generate-header";
import { generateSelect } from "./components/generate-select";
import { generateLevel } from "./components/generate-level";
import { generateMain } from "./components/generate-main";
import { generateTemplate } from "./components/generate-template";

const app = () => {
  const body = document.querySelector("body");
  body.classList.add("dark-theme");

  const header = generateHeader();
  const main = generateMain();
  const selectBlock = generateSelect();
  const levelList = generateLevel();
  const selectTemplates = generateTemplate(easyTemplates);

  selectBlock.append(levelList);
  main.append(selectBlock);
  main.append(selectTemplates);
  body.append(header);
  body.append(main);
};

export default app;
