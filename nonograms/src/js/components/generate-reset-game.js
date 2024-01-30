import { newGame } from "../app";
import { createHtmlElement } from "../helpers/create-html-element";
import { getThemeLs } from "../helpers/get-theme-ls";

const STYLES = {
  reset: "reset",
  container: "container",
  resetList: "reset__list",
  resetButton: "reset__button",
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
  resetButton.addEventListener("click", () => {
    console.log("reset game");
  });

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
