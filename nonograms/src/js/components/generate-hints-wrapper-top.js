import { createHtmlElement } from "../utils/create-html-element";
import { getThemeLs } from "../utils/get-theme-ls";
import { easyTemplates } from "../modules/easy-templates";
import { mediumTemplates } from "../modules/medium-templates";
import { hardTemplates } from "../modules/hard-templates";

const STYLES = {
  hintsTop_5: "hints__top_5x5",
  hintsTop_10: "hints__top_10x10",
  hintsTop_15: "hints__top_15x15",
};

const templates = {
  ["easy"]: easyTemplates,
  ["medium"]: mediumTemplates,
  ["hard"]: hardTemplates,
};

export const generateHintsWrapperTop = (level) => {
  const size = templates[level][0].template.length;
  const theme = getThemeLs({ light: "light__top", dark: "dark__top" });
  const top = createHtmlElement("div", [STYLES[`hintsTop_${size}`], theme]);
  return top;
};
