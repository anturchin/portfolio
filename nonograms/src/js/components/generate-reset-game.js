import { newGame } from "../app";
import { createHtmlElement } from "../helpers/create-html-element";
import { getThemeLs } from "../helpers/get-theme-ls";
import { createGameGrid } from "./generate-game-board";

const STYLES = {
  reset: "reset",
  container: "container",
  resetList: "reset__list",
  resetButton: "reset__button",
};

const SIZE_GRID = {
  easy: 5,
  medium: 10,
  hard: 15,
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

export const generateResetGame = () => {
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
    [STYLES.resetButton, themeBtn],
    "New Game",
  );
  resetButton.addEventListener("click", resetGame);

  resetButtonTwo.addEventListener("click", () => {
    const body = document.querySelector("body");
    body.innerHTML = "";
    newGame();
  });
  resetList.append(resetButton);
  resetList.append(resetButtonTwo);
  resetWrapper.append(resetList);
  return resetWrapper;
};
