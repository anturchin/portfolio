import { generateGameSection } from "./generate-game-section";
import { generateTimer } from "./generate-timer";
import { generateGameBoard } from "./generate-game-board";
import { generateHints } from "./generate-hints";
import { generateResetGame } from "./generate-reset-game";
import { generateHintsWrapperTop } from "./generate-hints-wrapper-top";
import { generateHintsWrapperLeft } from "./generate-hints-wrapper-left";
import { createHtmlElement } from "../helpers/create-html-element";

const STYLES = {
  game: "game",
  container: "container",
};

export const generateGameBoardAndHints = (id, level) => {
  const gameBoard = createHtmlElement("div", [STYLES.game, STYLES.container]);
  const gameSection = generateGameSection();
  const timerWrapper = generateTimer();
  const resetGame = generateResetGame();
  const gameWrapper = generateGameBoard(id, level);

  const hintsWrapperTop = generateHintsWrapperTop(level);
  const hintsTop = generateHints(id, level, "cols");
  hintsWrapperTop.append(hintsTop);
  gameWrapper.append(hintsWrapperTop);

  const hintsWrapperLeft = generateHintsWrapperLeft(level);
  const hintsLeft = generateHints(id, level, "rows");
  hintsWrapperLeft.append(hintsLeft);
  gameWrapper.append(hintsWrapperLeft);

  gameBoard.append(gameWrapper);

  gameSection.append(timerWrapper);
  gameSection.append(resetGame);
  gameSection.append(resetGame);
  gameSection.append(gameBoard);

  return gameSection;
};
