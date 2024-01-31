import { createHtmlElement } from "../utils/create-html-element";
import { easyTemplates } from "../modules/easy-templates";
import { mediumTemplates } from "../modules/medium-templates";
import { hardTemplates } from "../modules/hard-templates";
import { getThemeLs } from "../utils/get-theme-ls";
import { openModal } from "./generate-modal";

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

let isGameFinished = false;

const checkIfGameIsFinished = (cell) => {
  const parent = cell.parentElement;
  const cells = parent.querySelectorAll("div");
  const id = +cell.parentElement.id;
  const level = cell.parentElement.dataset.level;
  const size = templates[level][id - 1].template.length;
  const template = templates[level][id - 1].template;
  const checkedTheme = getThemeLs({ light: "light__checked", dark: "dark__checked" });

  for (let i = 0; i < cells.length; i++) {
    const currentCell = cells[i];
    const row = Math.floor(i / size);
    const col = i % size;

    const shouldBeBlack = template[row][col] === "X";
    const isCellFilled = currentCell.classList.contains(checkedTheme);

    if ((shouldBeBlack && !isCellFilled) || (!shouldBeBlack && isCellFilled)) {
      return false;
    }
  }

  return true;
};

const handleCellClick = (e, timer) => {
  if (!isGameFinished) {
    if (!timer.startTime) {
      timer.start("timer__duration");
    }

    const cell = e.target;
    const isCell =
      cell.classList.contains(STYLES.gameCell_5) ||
      cell.classList.contains(STYLES.gameCell_10) ||
      cell.classList.contains(STYLES.gameCell_15);
    if (isCell) {
      const checkedTheme = getThemeLs({ light: "light__checked", dark: "dark__checked" });
      const crossTheme = getThemeLs({ light: "light__cross", dark: "dark__cross" });
      if (cell.classList.contains(crossTheme)) {
        cell.classList.remove(crossTheme);
      }
      cell.classList.toggle(checkedTheme);
      if (checkIfGameIsFinished(cell)) {
        const formatTime = timer.formatTime();
        timer.stop();
        setTimeout(() => {
          openModal(cell, formatTime);
        }, 200);
      }
    }
  }
};

const handleCellRightClick = (e, timer) => {
  e.preventDefault();
  if (!timer.startTime) {
    timer.start("timer__duration");
  }
  const cell = e.target;
  const checkedTheme = getThemeLs({ light: "light__checked", dark: "dark__checked" });
  const crossTheme = getThemeLs({ light: "light__cross", dark: "dark__cross" });
  if (cell.classList.contains(checkedTheme)) {
    cell.classList.remove(checkedTheme);
  }
  cell.classList.toggle(crossTheme);
};

export const createGameGrid = (id, level, size, timer) => {
  const gridTheme = getThemeLs({ light: "light__grid", dark: "dark__grid" });
  const cellTheme = getThemeLs({ light: "light__cell", dark: "dark__cell" });
  const template = templates[level][id - 1].template;
  const gameContainer = createHtmlElement("div", [STYLES[`gameGrid_${size}`], gridTheme]);
  template.forEach((row) => {
    row.forEach((col) => {
      const gameCell = createHtmlElement("div", [STYLES[`gameCell_${size}`], cellTheme]);
      if (col === "X") {
        gameCell.dataset.mark = col;
      }
      gameContainer.append(gameCell);
    });
  });
  gameContainer.id = id;
  gameContainer.dataset.level = level;

  gameContainer.addEventListener("click", (e) => {
    handleCellClick(e, timer);
  });
  gameContainer.addEventListener("contextmenu", (e) => {
    handleCellRightClick(e, timer);
  });
  return gameContainer;
};

export const generateGameBoard = (id, level, timer) => {
  const size = templates[level][0].template.length;
  const gameWrapper = createHtmlElement("div", STYLES[`gameWrapper_${size}`]);
  const gameGrid = createGameGrid(id, level, size, timer);
  gameWrapper.append(gameGrid);
  console.table(templates[level][id - 1].template);
  return gameWrapper;
};
