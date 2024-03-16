import { Game } from '../view/main/game/Game';
import { GamePuzzleImage } from '../view/main/game/gamePuzzle/gamePuzzleImage/GamePuzzleImage';
import { GameEventController } from './GameEventController';

const style = 'position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);';
export class GameRenderController {
    private game: Game;

    private eventController: GameEventController;

    constructor(game: Game, eventController: GameEventController) {
        this.game = game;
        this.eventController = eventController;
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
}
