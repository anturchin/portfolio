import { generateGameSection } from "./generate-game-section";
import { generateTimer } from "./generate-timer";
import { generateGameBoard } from "./generate-game-board";
import { generateHints } from "./generate-hints";
import { generateResetGame } from "./generate-reset-game";
import { generateHintsWrapperTop } from "./generate-hints-wrapper-top";
import { generateHintsWrapperLeft } from "./generate-hints-wrapper-left";
import { createHtmlElement } from "../utils/create-html-element";

const STYLES = {
  game: "game",
  container: "container",
};

export const generateGameBoardAndHints = (id, level, timer) => {
  const gameBoard = createHtmlElement("div", [STYLES.game, STYLES.container]);
  const gameSection = generateGameSection();
  const resetGame = generateResetGame(timer);
  const timerWrapper = generateTimer();

  gameSection.append(timerWrapper);
  gameSection.append(resetGame);
  gameSection.append(resetGame);

  const gameWrapper = generateGameBoard(id, level, timer);

  const hintsWrapperTop = generateHintsWrapperTop(level);
  const hintsTop = generateHints(id, level, "cols");
  hintsWrapperTop.append(hintsTop);
  gameWrapper.append(hintsWrapperTop);

  const hintsWrapperLeft = generateHintsWrapperLeft(level);
  const hintsLeft = generateHints(id, level, "rows");
  hintsWrapperLeft.append(hintsLeft);
  gameWrapper.append(hintsWrapperLeft);

  gameBoard.append(gameWrapper);

  gameSection.append(gameBoard);

  return gameSection;
};
