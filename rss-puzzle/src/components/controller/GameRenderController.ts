import { Game } from '../view/main/game/Game';
import { GameEventController } from './GameEventController';

export class GameRenderController {
    private game: Game;

    private eventController: GameEventController;

    constructor(game: Game, eventController: GameEventController) {
        this.game = game;
        this.eventController = eventController;
    }

    public updateResultLineAndSourceLine(): void {
        this.eventController.removeHandleClickAndDragAndDrop();
        this.game.renderGamePuzzleLine();
        this.game.renderGameCells();
    }
}
