import { generateTemplate } from "./generate-template";
import { generateLevel } from "./generate-level";
import { generateSelect } from "./generate-select";

export const generateSelectedGame = (templates, timer, sound) => {
  const fragment = new DocumentFragment();
  const selectBlock = generateSelect();
  const levelList = generateLevel(timer, sound);
  const templatesSection = generateTemplate(templates, timer, sound);
  selectBlock.append(levelList);
  fragment.append(selectBlock);
  fragment.append(templatesSection);
  return fragment;
};
