import { createHtmlElement } from "../utils/create-html-element";
import { onChangeLevel } from "../modules/on-change-level";
import { getThemeLs } from "../utils/get-theme-ls";
import { generateGameBoardAndHints } from "./generate-game-board-and-hints";
import { startGame } from "../app";

const STYLES = {
  section: "level",
  container: "container",
  levelList: "level__list",
  levelItem: "level__item",
  levelContinue: "level__item_continue",
  levelItemActive: "light__button_active",
};

const options = [
  { text: "Easy (5x5)", id: "easy" },
  { text: "Medium (10x10)", id: "medium" },
  { text: "Hard (15x15)", id: "hard" },
];

const updateCells = (saveStateCellsMatrix) => {
  const cells = document.querySelectorAll(".game__cell");
  const size = saveStateCellsMatrix[0].length;

  const checkedTheme = getThemeLs({ light: "light__checked", dark: "dark__checked" });
  const crossTheme = getThemeLs({ light: "light__cross", dark: "dark__cross" });

  for (let i = 0; i < cells.length; i++) {
    const currentCell = cells[i];
    const row = Math.floor(i / size);
    const col = i % size;
    if (saveStateCellsMatrix[row][col] === "checked") {
      currentCell.classList.add(checkedTheme);
    }
    if (saveStateCellsMatrix[row][col] === "cross") {
      currentCell.classList.add(crossTheme);
    }
  }
};

const continueGame = (timer, sound) => {
  const saveGame = localStorage.getItem("saveGame");
  if (saveGame) {
    const savedGameState = JSON.parse(saveGame);
    const { saveStateCellsMatrix, templateId, templateLevel, time } = savedGameState;
    const game = generateGameBoardAndHints(templateId, templateLevel, timer, sound);
    timer.restoreState(time, "timer__duration");
    const body = document.querySelector("body");
    body.innerHTML = "";
    startGame(game);
    updateCells(saveStateCellsMatrix);
  }
};

export const generateLevel = (timer = null, sound = null) => {
  const themeBtn = getThemeLs({ light: "light__button", dark: "dark__button" });
  const themeActive = getThemeLs({
    light: "light__button_active",
    dark: "dark__button_active",
  });

  const sectionLevel = createHtmlElement("section", [STYLES.section, STYLES.container]);
  const levelList = createHtmlElement("div", STYLES.levelList);
  const levelItems = options.map((item) => {
    const active = item.id === "easy" ? themeActive : "";
    const disabled = item.id === "easy" ? true : false;
    const levelItem = createHtmlElement(
      "button",
      [STYLES.levelItem, themeBtn, active],
      item.text,
      null,
      item.id,
    );
    if (disabled) {
      levelItem.disabled = true;
    }

    return levelItem;
  });

  levelList.append(...levelItems);

  const saveGame = localStorage.getItem("saveGame");

  if (saveGame) {
    const continueBtn = createHtmlElement(
      "button",
      [STYLES.levelItem, STYLES.levelContinue, themeBtn],
      "Continue Game",
    );
    levelList.append(continueBtn);
    continueBtn.addEventListener("click", () => {
      continueGame(timer, sound);
    });
  }

  sectionLevel.append(levelList);

  levelList.addEventListener("click", onChangeLevel);

  return sectionLevel;
};
