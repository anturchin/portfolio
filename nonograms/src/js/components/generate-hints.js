import { createHtmlElement } from "../utils/create-html-element";
import { easyTemplates } from "../modules/easy-templates";
import { mediumTemplates } from "../modules/medium-templates";
import { hardTemplates } from "../modules/hard-templates";
import { getThemeLs } from "../utils/get-theme-ls";

const STYLES = {
  hintsCell_5: "hints__cell_5x5",
  hintsCell_10: "hints__cell_10x10",
  hintsCell_15: "hints__cell_15x15",
  hintsNum_5: "hints__num_5x5",
  hintsNum_10: "hints__num_10x10",
  hintsNum_15: "hints__num_15x15",
};

const templates = {
  ["easy"]: easyTemplates,
  ["medium"]: mediumTemplates,
  ["hard"]: hardTemplates,
};

export const generateHints = (id, level, direction) => {
  const theme = getThemeLs({ light: "light__hints", dark: "dark__hints" });
  const size = templates[level][0].template.length;
  const hints = templates[level][id - 1].hints[direction];
  const fragment = new DocumentFragment();

  hints.forEach((row) => {
    const hintsCell = createHtmlElement("div", [STYLES[`hintsCell_${size}`], theme]);
    row.forEach((col) => {
      const hintsNum = createHtmlElement("span", [STYLES[`hintsNum_${size}`]], col);
      hintsCell.append(hintsNum);
    });
    fragment.append(hintsCell);
  });

  return fragment;
};
