import { Game } from '../view/main/game/Game';
import { GameController } from './GameController';
import { GameHideController } from './GameHideController';
import { GameLogicController } from './GameLogicController';

export class GameEventController {
    private game: Game;

    private mainController: GameController;

    private logicController: GameLogicController;

    private hideController: GameHideController;

    constructor(
        game: Game,
        logicController: GameLogicController,
        mainController: GameController,
        hideController: GameHideController
    ) {
        this.game = game;
        this.mainController = mainController;
        this.logicController = logicController;
        this.hideController = hideController;
        this.handleClickCell();
        this.handleClickButtonCheck();
        this.onHandleClickAutoComplete();
        this.onHandleClickContinue();
    }

    public handleClickCell(): void {
        this.game.onCellsChecked = () => {
            if (this.logicController.isAllCellsAreResultBlock()) {
                this.hideController.activeButtonCheck();
                this.logicController.checkWordValidity();
            } else {
                this.hideController.disabledButtonCheck();
                this.hideController.disabledButtonContinue();
                this.hideController.hideButtonContinue();
                this.hideController.showButtonCheck();
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
                this.hideController.disabledButtonCheck();
                return;
            }

            const oldStateButtonContinue = (
                this.game.buttonContinue?.getElement() as HTMLButtonElement
            ).disabled;

            this.hideController.disabledButtonCheck();
            this.hideController.disabledButtonContinue();
            this.hideController.disabledButtonAutoComplete();
            this.logicController.checkCellValidity();
            setTimeout(() => {
                this.logicController.checkCellValidity();
                this.hideController.activeButtonCheck();
                this.hideController.activeButtonAutoComplete();
                if (!oldStateButtonContinue) {
                    this.hideController.activeButtonContinue();
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

    public onHandleClickAutoComplete(): void {
        this.game.onHandleClickAutoComplete = () => {
            this.logicController.autofillSentenceInResultLine();
        };
    }
}
