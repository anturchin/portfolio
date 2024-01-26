import { createHtmlElement } from "../helpers/create-html-element";
import { onChangeLevel } from "../handlers/on-change-level";
import { getThemeLs } from "../helpers/get-theme-ls";

const STYLES = {
  section: "level",
  container: "container",
  levelList: "level__list",
  levelItem: "level__item",
  levelItemActive: "level__item_active",
};

const options = [
  { text: "Easy (5x5)", id: "easy" },
  { text: "Medium (10x10)", id: "medium" },
  { text: "Hard (15x15)", id: "hard" },
];

export const generateLevel = () => {
  const themeBtn = getThemeLs({ light: "light__button", dark: "dark__button" });

  const sectionLevel = createHtmlElement("section", [STYLES.section, STYLES.container]);
  const levelList = createHtmlElement("ul", STYLES.levelList);
  const levelItems = options.map((item) => {
    const active = item.id === "easy" ? STYLES.levelItemActive : "";
    const levelItem = createHtmlElement(
      "li",
      [STYLES.levelItem, themeBtn, active],
      item.text,
      null,
      item.id,
    );

    return levelItem;
  });

  levelList.append(...levelItems);
  sectionLevel.append(levelList);

  levelList.addEventListener("click", onChangeLevel);

  return sectionLevel;
};
