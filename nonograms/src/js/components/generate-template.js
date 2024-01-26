import { createHtmlElement } from "../helpers/create-html-element";

const theme = localStorage.getItem("theme");

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
  darkOrLight: theme === "dark" ? "dark__cell" : "light__cell",
};

export const generateCellElements = (templates, size) => {
  const cells = [];

  templates.forEach(({ template }) => {
    const templateItem = createHtmlElement("div", STYLES[`templateItem_${size}`]);
    template.forEach((items) => {
      const templateCell = [];
      items.forEach((item) => {
        const cell = createHtmlElement("div", [
          STYLES.templateSell,
          STYLES[`templateSell_${size}`],
          STYLES.darkOrLight,
        ]);
        if (item === "X") {
          const backGround = theme === "dark" ? "dark__checked" : "light__checked";
          cell.classList.add(backGround);
        }
        templateCell.push(cell);
      });
      templateItem.append(...templateCell);
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
