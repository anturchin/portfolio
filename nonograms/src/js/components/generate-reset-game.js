import { newGame } from "../app";
import { createHtmlElement } from "../utils/create-html-element";
import { getThemeLs } from "../utils/get-theme-ls";
import { createGameGrid } from "./generate-game-board";
import { createStateCellsMatrix } from "../utils/create-state-cells-matrix";
import { showMessage } from "../utils/show-message";

const STYLES = {
  reset: "reset",
  container: "container",
  resetList: "reset__list",
  resetButton: "reset__button",
  resetButtonSolution: "reset__button_solution",
  resetButtonNew: "reset__button_new",
};

const SIZE_GRID = {
  easy: 5,
  medium: 10,
  hard: 15,
};

const saveGameState = (timer) => {
  const cells = document.querySelectorAll(".game__cell");
  const templateId = cells[0].parentElement.id;
  const templateLevel = cells[0].parentElement.dataset.level;

  const saveStateCellsMatrix = createStateCellsMatrix(cells, SIZE_GRID, templateLevel);

  const saveGameSate = {
    saveStateCellsMatrix,
    templateLevel,
    templateId,
    time: timer.saveState(),
  };
  const jsonToLocalStorage = JSON.stringify(saveGameSate);
  localStorage.setItem("saveGame", jsonToLocalStorage);
  showMessage();
};

const openCellsWithSolution = () => {
  const checkedTheme = getThemeLs({ light: "light__checked", dark: "dark__checked" });
  const crossTheme = getThemeLs({ light: "light__cross", dark: "dark__cross" });

  const cellsMark = document.querySelectorAll('[data-mark="X"]');
  const parent = cellsMark[0].parentElement;

  parent.removeEventListener("click", parent.clickHandler);
  parent.removeEventListener("contextmenu", parent.contextMenuHandler);

  const cellsForCleaning = parent.querySelectorAll("div");

  for (const cell of cellsForCleaning) {
    cell.classList.remove(checkedTheme, crossTheme);
  }

  for (const cell of cellsMark) {
    cell.classList.add(checkedTheme);
  }
};

const showSolution = () => {
  const buttons = document.querySelectorAll(".reset__button");
  for (const button of buttons) {
    if (button.classList.contains("reset__button_new")) {
      continue;
    }
    button.disabled = true;
  }
  openCellsWithSolution();
};

const resetGame = () => {
  const cell = document.querySelector('[data-mark="X"]');
  const parent = cell.parentElement;
  const id = +parent.id;
  const level = parent.dataset.level;
  const size = SIZE_GRID[level];
  const gameGrid = createGameGrid(id, level, size);
  const cells = gameGrid.children;
  parent.innerHTML = "";
  parent.append(...cells);
};

export const generateResetGame = (timer) => {
  const themeBtn = getThemeLs({ light: "light__button", dark: "dark__button" });

  const resetWrapper = createHtmlElement("section", [STYLES.reset, STYLES.container]);
  const resetList = createHtmlElement("div", STYLES.resetList);
  const resetButton = createHtmlElement(
    "button",
    [STYLES.resetButton, themeBtn],
    "Reset Game",
  );
  const resetButtonTwo = createHtmlElement(
    "button",
    [STYLES.resetButton, themeBtn, STYLES.resetButtonNew],
    "New Game",
  );
  const saveButton = createHtmlElement(
    "button",
    [STYLES.resetButton, themeBtn],
    "Save Game",
  );

  const solutionButton = createHtmlElement(
    "button",
    [STYLES.resetButton, themeBtn, STYLES.resetButtonSolution],
    "Solution",
  );

  resetButton.addEventListener("click", () => {
    const timerDuration = document.querySelector(".timer__duration");
    timerDuration.innerHTML = "00 : 00";
    timer.stop();
    resetGame();
  });

  resetButtonTwo.addEventListener("click", () => {
    timer.stop();
    const body = document.querySelector("body");
    body.innerHTML = "";
    newGame();
  });

  solutionButton.addEventListener("click", () => {
    timer.stop();
    showSolution();
  });

  saveButton.addEventListener("click", () => {
    saveGameState(timer);
  });

  resetList.append(resetButton);
  resetList.append(saveButton);
  resetList.append(solutionButton);
  resetList.append(resetButtonTwo);
  resetWrapper.append(resetList);
  return resetWrapper;
};
