import { startGame } from "../app";
import { createHtmlElement } from "../utils/create-html-element";
import { getThemeLs } from "../utils/get-theme-ls";
import { generateGameBoardAndHints } from "./generate-game-board-and-hints";
import { getRandomTemplate } from "../utils/get-random-template";

const STYLES = {
  section: "level",
  container: "container",
  levelList: "level__list",
  levelItem: "level__item",
  levelContinue: "level__item_continue",
  levelItemActive: "light__button_active",
};

const createRandomGame = (timer, sound) => {
  const { randomGameIndex, randomGame } = getRandomTemplate();
  const game = generateGameBoardAndHints(randomGameIndex + 1, randomGame, timer, sound);
  const body = document.querySelector("body");
  body.innerHTML = "";
  startGame(game);
};

const updateActivityClasses = (listLevel) => {
  listLevel.querySelectorAll("button").forEach((item) => {
    item.disabled = false;
    if (item.classList.contains("dark__button"))
      item.classList.remove("dark__button_active");
    else item.classList.remove("light__button_active");
  });
};

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

export const generateOptionGame = (timer, sound) => {
  const themeBtn = getThemeLs({ light: "light__button", dark: "dark__button" });
  const sectionLevel = createHtmlElement("section", [STYLES.section, STYLES.container]);
  const levelList = createHtmlElement("div", STYLES.levelList);

  const randomBtn = createHtmlElement(
    "button",
    [STYLES.levelItem, STYLES.levelContinue, themeBtn],
    "Random Game",
  );

  randomBtn.addEventListener("click", () => {
    createRandomGame(timer, sound);
  });

  const resultTableBtn = createHtmlElement(
    "button",
    [STYLES.levelItem, STYLES.levelContinue, themeBtn],
    "Results Games",
  );

  levelList.append(randomBtn);
  levelList.append(resultTableBtn);

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

  levelList.addEventListener("click", (e) => {
    const target = e.target;
    if (target && target.nodeName === "BUTTON") {
      updateActivityClasses(levelList);
      if (target.classList.contains("dark__button"))
        target.classList.add("dark__button_active");
      else target.classList.add("light__button_active");
      target.disabled = true;
    }
  });

  sectionLevel.append(levelList);

  return sectionLevel;
};
