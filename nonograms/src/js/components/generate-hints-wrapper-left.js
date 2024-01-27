import { createHtmlElement } from "../helpers/create-html-element";
import { getThemeLs } from "../helpers/get-theme-ls";
import { easyTemplates } from "../easy-templates";
import { mediumTemplates } from "../medium-templates";
import { hardTemplates } from "../hard-templates";

const STYLES = {
  hintsLeft_5: "hints__left_5x5",
  hintsLeft_10: "hints__left_10x10",
  hintsLeft_15: "hints__left_15x15",
};

const templates = {
  ["easy"]: easyTemplates,
  ["medium"]: mediumTemplates,
  ["hard"]: hardTemplates,
};

export const generateHintsWrapperLeft = (level) => {
  const size = templates[level][0].template.length;
  const theme = getThemeLs({ light: "light__left", dark: "dark__left" });
  const left = createHtmlElement("div", [STYLES[`hintsLeft_${size}`], theme]);
  return left;
};
