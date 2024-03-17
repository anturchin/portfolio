import { Game } from '../view/main/game/Game';
import { GamePuzzleImage } from '../view/main/game/gamePuzzle/gamePuzzleImage/GamePuzzleImage';
import { GameDataController } from './GameDataController';
import { GameEventController } from './GameEventController';

const style = 'position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);';
export class GameRenderController {
    private game: Game;

    private eventController: GameEventController;

    private dataController: GameDataController;

    constructor(
        game: Game,
        eventController: GameEventController,
        dataController: GameDataController
    ) {
        this.game = game;
        this.eventController = eventController;
        this.dataController = dataController;
    }

    public updateResultLineAndSourceLine(): void {
        this.eventController.removeHandleClickAndDragAndDrop();
        const puzzleBlock = this.game.gamePuzzleBlock?.getElement();
        if (puzzleBlock) {
            puzzleBlock.classList.add('placeholder');
            const img = puzzleBlock.querySelector<HTMLElement>('.images');
            img?.remove();
        }
        this.game.renderGamePuzzleLine();
        this.game.renderGameCells();
    }

    public renderImageInGamePuzzleContainer(
        author: string,
        imageSrc: string,
        nameImage: string,
        year: string
    ): void {
        const imageComponent = new GamePuzzleImage(imageSrc).getElement();
        this.game.gamePuzzleBlock?.getElement().classList.remove('placeholder');
        this.game.gamePuzzleBlock?.addInnerElement(imageComponent);
        const sourceLine = this.game.gameSourceLine?.getElement();
        if (sourceLine) {
            sourceLine.innerHTML = `<h4 style="${style}">${author} - ${nameImage} (${year})</h4>`;
        }
    }

    public renderAutoFillSentenceInResultLine(sortedCells: HTMLElement[]): void {
        const resultLine = document.querySelector<HTMLElement>('.game__row.active');
        if (resultLine) {
            sortedCells.forEach((cell) => {
                cell.setAttribute('data-is-result-block', 'true');
                resultLine.append(cell);
            });
        }
    }

    public updateHintText(): void {
        const textElement = this.game.hintText?.getElement();
        const round = this.dataController.getCurrentRound();
        const currentIndex = this.dataController.getCurrentWordIndex();
        if (textElement && round) {
            textElement.textContent = round.words[currentIndex].textExampleTranslate;
        }
    }

    public clearHintText(): void {
        const textElement = this.game.hintText?.getElement();
        if (textElement) textElement.textContent = '';
    }
}
