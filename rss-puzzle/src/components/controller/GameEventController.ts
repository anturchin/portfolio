import { Game } from '../view/main/game/Game';
import { GameController } from './GameController';
import { GameLogicController } from './GameLogicController';

export class GameEventController {
    private game: Game;

    private mainController: GameController;

    private logicController: GameLogicController;

    constructor(game: Game, logicController: GameLogicController, mainController: GameController) {
        this.game = game;
        this.mainController = mainController;
        this.logicController = logicController;
        this.handleClickCell();
        this.handleClickButtonCheck();
    }

    public handleClickCell(): void {
        this.game.onCellsChecked = () => {
            if (this.logicController.isAllCellsAreResultBlock()) {
                this.logicController.activeButtonCheck();
                this.logicController.checkWordValidity();
            } else {
                this.logicController.disabledButtonCheck();
            }
        };
    }

    public removeHandleClickAndDragAndDrop(): void {
        if (this.game.resultLine) {
            this.game.resultLine.removeEventListener();
        }
        if (this.game.cells) {
            this.game.cells.forEach((cell) => {
                cell.removeEventListener();
            });
        }
    }

    public handleClickButtonCheck(): void {
        this.game.onHandleClickCheck = () => {
            if (!this.logicController.isAllCellsAreResultBlock()) {
                this.logicController.disabledButtonCheck();
                return;
            }

            const oldStateButtonContinue = (
                this.game.buttonContinue?.getElement() as HTMLButtonElement
            ).disabled;

            this.logicController.checkCellValidity();
            this.logicController.disabledButtonCheck();
            this.logicController.disabledButtonContinue();
            setTimeout(() => {
                this.logicController.checkCellValidity();
                this.logicController.activeButtonCheck();
                if (!oldStateButtonContinue) {
                    this.logicController.activeButtonContinue();
                }
            }, 3000);
        };
    }

    public onHandleClickContinue(): void {
        this.game.onHandleClickContinue = () => {
            if (this.logicController.isNewRoundStarted()) {
                this.mainController.endGame();
            } else {
                this.mainController.continueGame();
            }
        };
    }
}
