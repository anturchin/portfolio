import { createHtmlElement } from "../utils/create-html-element";
import { onChangeLevel } from "../modules/on-change-level";
import { getThemeLs } from "../utils/get-theme-ls";

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

export const generateLevel = () => {
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
  }

  sectionLevel.append(levelList);

  levelList.addEventListener("click", onChangeLevel);

  return sectionLevel;
};
