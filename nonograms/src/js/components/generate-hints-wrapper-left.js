import { createHtmlElement } from "../utils/create-html-element";
import { getThemeLs } from "../utils/get-theme-ls";
import { easyTemplates } from "../modules/easy-templates";
import { mediumTemplates } from "../modules/medium-templates";
import { hardTemplates } from "../modules/hard-templates";

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
