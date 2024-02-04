import { createHtmlElement } from "../utils/create-html-element";
import { getThemeLs } from "../utils/get-theme-ls";
import { easyTemplates } from "../modules/easy-templates";
import { mediumTemplates } from "../modules/medium-templates";
import { hardTemplates } from "../modules/hard-templates";

const templates = {
  ["easy"]: easyTemplates,
  ["medium"]: mediumTemplates,
  ["hard"]: hardTemplates,
};

const STYLES = {
  templateWrapper: "template__wrapper",
  templateItem_5: "template__item_5x5",
  templateItem_10: "template__item_10x10",
  templateItem_15: "template__item_15x15",
  templateSell: "template__cell",
  templateSell_5: "template__cell_5x5",
  templateSell_10: "template__cell_10x10",
  templateSell_15: "template__cell_15x15",
};

export const generateTemplateForModal = (id, level, name) => {
  const template = templates[level][id - 1].template;
  const size = template.length;
  const templateWrapper = createHtmlElement("div", STYLES.templateWrapper);
  const templateName = createHtmlElement("p", null, name);
  const templateItem = createHtmlElement("div", STYLES[`templateItem_${size}`]);
  const cells = [];

  template.forEach((row) => {
    const themeCell = getThemeLs({ light: "light__cell", dark: "dark__cell" });
    row.forEach((col) => {
      const cell = createHtmlElement("div", [
        STYLES.templateSell,
        STYLES[`templateSell_${size}`],
        themeCell,
      ]);
      if (col === "X") {
        const backGround = getThemeLs({
          light: "light__checked",
          dark: "dark__checked",
        });
        cell.classList.add(backGround);
      }
      cells.push(cell);
    });
  });

  templateItem.append(...cells);
  templateWrapper.append(templateName);
  templateWrapper.append(templateItem);
  return templateWrapper;
};
