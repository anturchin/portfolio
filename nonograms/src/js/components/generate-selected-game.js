import { generateTemplate } from "./generate-template";
import { generateLevel } from "./generate-level";
import { generateSelect } from "./generate-select";
import { generateOptionGame } from "./generate-option-game";

export const generateSelectedGame = (templates, timer, sound) => {
  const fragment = new DocumentFragment();
  const selectBlock = generateSelect();
  const levelList = generateLevel();
  const optionGame = generateOptionGame(timer, sound);
  const templatesSection = generateTemplate(templates, timer, sound);
  selectBlock.append(levelList);
  selectBlock.append(optionGame);
  fragment.append(selectBlock);
  fragment.append(templatesSection);
  return fragment;
};
