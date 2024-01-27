import { createHtmlElement } from "../helpers/create-html-element";
import { easyTemplates } from "../easy-templates";
import { mediumTemplates } from "../medium-templates";
import { hardTemplates } from "../hard-templates";
import { getThemeLs } from "../helpers/get-theme-ls";

const STYLES = {
  gameWrapper_5: "game__wrapper_5x5",
  gameWrapper_10: "game__wrapper_10x10",
  gameWrapper_15: "game__wrapper_15x15",
  gameGrid_5: "game__grid_5x5",
  gameGrid_10: "game__grid_10x10",
  gameGrid_15: "game__grid_15x15",
  gameCell_5: "game__cell_5x5",
  gameCell_10: "game__cell_10x10",
  gameCell_15: "game__cell_15x15",
};

const templates = {
  ["easy"]: easyTemplates,
  ["medium"]: mediumTemplates,
  ["hard"]: hardTemplates,
};

const createGameGrid = (id, level, size) => {
  const gridTheme = getThemeLs({ light: "light__grid", dark: "dark__grid" });
  const cellTheme = getThemeLs({ light: "light__cell", dark: "dark__cell" });
  const checkedTheme = getThemeLs({ light: "light__checked", dark: "dark__checked" });
  const template = templates[level][id - 1].template;
  const gameContainer = createHtmlElement("div", [STYLES[`gameGrid_${size}`], gridTheme]);
  template.forEach((row) => {
    row.forEach((col) => {
      const gameCell = createHtmlElement("div", [STYLES[`gameCell_${size}`], cellTheme]);
      if (col === "X") {
        gameCell.classList.add(checkedTheme);
        gameCell.dataset.mark = col;
      }
      gameContainer.append(gameCell);
    });
  });
  return gameContainer;
};

export const generateGameBoard = (id, level) => {
  const size = templates[level][0].template.length;
  const gameWrapper = createHtmlElement("div", STYLES[`gameWrapper_${size}`]);
  const gameGrid = createGameGrid(id, level, size);
  gameWrapper.append(gameGrid);
  return gameWrapper;
};
