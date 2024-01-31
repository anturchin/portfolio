import { generateTemplate } from "./generate-template";
import { generateLevel } from "./generate-level";
import { generateSelect } from "./generate-select";

export const generateSelectedGame = (templates, timer) => {
  const fragment = new DocumentFragment();
  const selectBlock = generateSelect();
  const levelList = generateLevel();
  const templatesSection = generateTemplate(templates, timer);
  selectBlock.append(levelList);
  fragment.append(selectBlock);
  fragment.append(templatesSection);
  return fragment;
};
