import { easyTemplates } from "../modules/easy-templates";
import { mediumTemplates } from "../modules/medium-templates";
import { hardTemplates } from "../modules/hard-templates";

const templates = [
  ["easy", easyTemplates],
  ["medium", mediumTemplates],
  ["hard", hardTemplates],
];

export const getRandomTemplate = () => {
  const randomLevelIndex = Math.floor(Math.random() * templates.length);
  const randomLevel = templates[randomLevelIndex];

  const randomGameIndex = Math.floor(Math.random() * randomLevel[1].length);
  const randomGame = randomLevel[1][randomGameIndex].level;
  return { randomGameIndex, randomGame };
};
