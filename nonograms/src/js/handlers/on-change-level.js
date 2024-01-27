import { generateCellElements } from "../components/generate-template";
import { easyTemplates } from "../easy-templates";
import { mediumTemplates } from "../medium-templates";
import { hardTemplates } from "../hard-templates";

const templateAll = {
  ["easy"]: easyTemplates,
  ["medium"]: mediumTemplates,
  ["hard"]: hardTemplates,
};

const updateTemplateDisplay = (level) => {
  const templates = templateAll[level.id];
  const size = templates[0].template.length;
  const templateWrapper = document.querySelector(".template__wrapper");
  const newTemplateItem = generateCellElements(templates, size);
  if (templateWrapper) {
    templateWrapper.innerHTML = "";
    templateWrapper.append(...newTemplateItem);
  }
};

export const onChangeLevel = (e) => {
  const target = e.target;
  if (target && target.nodeName === "BUTTON") {
    updateTemplateDisplay(target);
    const listLevel = document.querySelector(".level__list");
    listLevel.querySelectorAll("button").forEach((item) => {
      item.disabled = false;
      if (item.classList.contains("dark__button"))
        item.classList.remove("dark__button_active");
      else item.classList.remove("light__button_active");
    });
    if (target.classList.contains("dark__button"))
      target.classList.add("dark__button_active");
    else target.classList.add("light__button_active");
    target.disabled = true;
  }
};
