import { Game } from '../view/main/game/Game';
import { GameController } from './GameController';
import { GameDataController } from './GameDataController';
import { GameHideController } from './GameHideController';

export class GameLogicController {
    private game: Game;

    private dataController: GameDataController;

    private mainController: GameController;

    private hideController: GameHideController;

    constructor(
        game: Game,
        dataController: GameDataController,
        mainController: GameController,
        hideController: GameHideController
    ) {
        this.game = game;
        this.mainController = mainController;
        this.dataController = dataController;
        this.hideController = hideController;
    }

    public checkWordValidity(): void {
        const originalWords = this.dataController.getTextExample()?.split(' ');
        const cells = this.getAllCellsFromResultLine();
        if (cells) {
            const collectedWords = [...cells].reduce((acc: string[], elem) => {
                if (elem.textContent) {
                    acc.push(elem.textContent);
                }
                return acc;
            }, []);
            if (originalWords && collectedWords) {
                const compareWordArrays = originalWords?.every(
                    (elem, index) => elem === collectedWords[index]
                );
                if (compareWordArrays) {
                    this.activeButtonContinue();
                    this.hideController.showButtonContinue();
                    this.hideController.hideButtonCheck();
                    this.mainController.nextSentence();
                } else {
                    this.disabledButtonContinue();
                    this.hideController.hideButtonContinue();
                    this.hideController.showButtonCheck();
                }
            }
        }
    }

    public getResultsLine(): false | NodeListOf<HTMLUListElement> {
        if (this.game.gamePuzzleBlock) {
            const resultBlock = this.game.gamePuzzleBlock.getElement();
            return resultBlock.querySelectorAll('ul');
        }
        return false;
    }

    public isAllCellsAreResultBlock(): boolean {
        return this.game.cells?.every((cell) => {
            const element = cell.getElement();
            const isResultBlock = element.getAttribute('data-is-result-block');
            return isResultBlock === 'true';
        });
    }

    public getAllCellsFromResultLine(): HTMLCollection | null {
        return this.game.resultLine?.getElement().children || null;
    }

    public checkCellValidity(): void {
        const cells = this.getAllCellsFromResultLine();
        const originalText = this.dataController.getTextExample()?.split(' ');
        if (cells && originalText) {
            [...cells].forEach((cell, index) => {
                if (originalText[index] === cell.textContent) {
                    cell.classList.toggle('valid');
                } else {
                    cell.classList.toggle('invalid');
                }
            });
        }
    }

    public isNewRoundStarted(): boolean {
        const resultLines = this.getResultsLine();
        const words = this.dataController.getCurrentWords();
        if (resultLines && words) {
            const newRound = resultLines.length === words.length;
            return newRound;
        }
        return false;
    }

    public disabledButtonContinue(): void {
        (this.game.buttonContinue?.getElement() as HTMLButtonElement).disabled = true;
    }

    public activeButtonContinue(): void {
        (this.game.buttonContinue?.getElement() as HTMLButtonElement).disabled = false;
    }

    public disabledButtonCheck(): void {
        (this.game.buttonCheck?.getElement() as HTMLButtonElement).disabled = true;
    }

    public activeButtonCheck(): void {
        (this.game.buttonCheck?.getElement() as HTMLButtonElement).disabled = false;
    }

    public removeAllResultLines(): void {
        if (this.game.gamePuzzleBlock) {
            const resultBlock = this.game.gamePuzzleBlock.getElement();
            resultBlock.querySelectorAll('ul').forEach((line) => line.remove());
        }
    }
}
