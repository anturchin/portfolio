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
  const cellTheme = getThemeLs({ light: "light__cell", dark: "dark__cell" });
  const size = templates[level][0].template.length;
  const hints = templates[level][id - 1].hints[direction];
  const fragment = new DocumentFragment();
  const longestArrayHints = hints.reduce((acc, currentArr) => {
    return currentArr.length > acc.length ? currentArr : acc;
  }, []);

  for (let i = 0; i < hints.length; i++) {
    const hintsCell = createHtmlElement("div", [STYLES[`hintsCell_${size}`], theme]);
    for (let j = 0; j < longestArrayHints.length; j++) {
      const value = hints[i][j];
      const content = value ? value : "";
      const hintsNum = createHtmlElement(
        "span",
        [STYLES[`hintsNum_${size}`], cellTheme],
        content,
      );
      if (content) {
        hintsCell.append(hintsNum);
      } else {
        hintsCell.prepend(hintsNum);
      }
    }
    fragment.append(hintsCell);
  }

  return fragment;
};
