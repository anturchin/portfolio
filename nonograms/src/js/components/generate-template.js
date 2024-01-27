import { startGame } from "../app";
import { createHtmlElement } from "../helpers/create-html-element";
import { getThemeLs } from "../helpers/get-theme-ls";
import { generateGameBoardAndHints } from "./generate-game-board-and-hints";

const STYLES = {
  template: "template",
  container: "container",
  templateWrapper: "template__wrapper",
  templateItem_5: "template__item_5x5",
  templateItem_10: "template__item_10x10",
  templateItem_15: "template__item_15x15",
  templateSell: "template__cell",
  templateSell_5: "template__cell_5x5",
  templateSell_10: "template__cell_10x10",
  templateSell_15: "template__cell_15x15",
};

const onSelectedGame = (e) => {
  if (e.currentTarget) {
    const id = e.currentTarget.id;
    const level = Object.values(e.currentTarget.dataset)[0];
    const game = generateGameBoardAndHints(id, level);
    const body = document.querySelector("body");
    body.innerHTML = "";
    startGame(game);
  }
};

export const generateCellElements = (templates, size) => {
  const themeCell = getThemeLs({ light: "light__cell", dark: "dark__cell" });

  const cells = [];

  templates.forEach(({ template, level }, index) => {
    const templateItem = createHtmlElement(
      "div",
      STYLES[`templateItem_${size}`],
      null,
      level,
      index + 1,
    );
    template.forEach((items) => {
      const templateCell = [];
      items.forEach((item) => {
        const cell = createHtmlElement("div", [
          STYLES.templateSell,
          STYLES[`templateSell_${size}`],
          themeCell,
        ]);
        if (item === "X") {
          const backGround = getThemeLs({
            light: "light__checked",
            dark: "dark__checked",
          });
          cell.classList.add(backGround);
        }
        templateCell.push(cell);
      });
      templateItem.append(...templateCell);
      templateItem.addEventListener("click", onSelectedGame);
      cells.push(templateItem);
    });
  });

  return cells;
};

export const generateTemplate = (templates) => {
  const size = templates[0].template.length;
  const templateContainer = createHtmlElement("section", [
    STYLES.template,
    STYLES.container,
  ]);
  const templateWrapper = createHtmlElement("div", STYLES.templateWrapper);
  templateWrapper.append(...generateCellElements(templates, size));
  templateContainer.append(templateWrapper);
  return templateContainer;
};
