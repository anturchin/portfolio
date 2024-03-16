import { Router } from '../router/router/Router';
import { basePath } from '../services/pathToFilesJSON';
import { State } from '../state/State';
import { Game } from '../view/main/game/Game';
import { GameDataController } from './GameDataController';

export class GameController {
    private game: Game;

    private router: Router;

    private state: State;

    private dataController: GameDataController;

    constructor(game: Game, router: Router) {
        this.game = game;
        this.router = router;
        this.state = new State();
        this.dataController = new GameDataController(this.state);
        this.handleClickCell();
        this.handleClickButtonCheck();
    }

    public setLevel(level: number): void {
        this.dataController.setLevel(level);
        this.game.loadData();
    }

    public getAllCellsFromResultLine(): HTMLCollection | null {
        return this.game.resultLine?.getElement().children || null;
    }

    public checkWordValidity(): void {
        const originalWords = this.getTextExample()?.split(' ');
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
                    this.nextSentence();
                } else {
                    this.disabledButtonContinue();
                }
            }
        }
    }

    public isAllCellsAreResultBlock(): boolean {
        return this.game.cells?.every((cell) => {
            const element = cell.getElement();
            const isResultBlock = element.getAttribute('data-is-result-block');
            return isResultBlock === 'true';
        });
    }

    public getCurrentWordIndex(): number {
        return this.dataController.getCurrentWordIndex();
    }

    public async loadGameData(): Promise<void> {
        await this.dataController.loadGameData();
    }

    public getTextExample(): string | null {
        return this.dataController.getTextExample();
    }

    public getImagePath(): string | undefined {
        return `${basePath}/images/${this.dataController.getCurrentImagePath()}`;
    }

    private checkCellValidity(): void {
        const cells = this.getAllCellsFromResultLine();
        const originalText = this.getTextExample()?.split(' ');
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

    private handleClickCell(): void {
        this.game.onCellsChecked = () => {
            if (this.isAllCellsAreResultBlock()) {
                this.activeButtonCheck();
                this.checkWordValidity();
            } else {
                this.disabledButtonCheck();
            }
        };
    }

    private removeHandleClickAndDragAndDrop(): void {
        if (this.game.resultLine) {
            this.game.resultLine.removeEventListener();
        }
        if (this.game.cells) {
            this.game.cells.forEach((cell) => {
                cell.removeEventListener();
            });
        }
    }

    private handleClickButtonCheck(): void {
        this.game.onHandleClickCheck = () => {
            if (!this.isAllCellsAreResultBlock()) {
                this.disabledButtonCheck();
                return;
            }

            const oldStateButtonContinue = (
                this.game.buttonContinue?.getElement() as HTMLButtonElement
            ).disabled;

            this.checkCellValidity();
            this.disabledButtonCheck();
            this.disabledButtonContinue();
            setTimeout(() => {
                this.checkCellValidity();
                this.activeButtonCheck();
                if (!oldStateButtonContinue) {
                    this.activeButtonContinue();
                }
            }, 3000);
        };
    }

    private disabledButtonContinue(): void {
        (this.game.buttonContinue?.getElement() as HTMLButtonElement).disabled = true;
    }

    private activeButtonContinue(): void {
        (this.game.buttonContinue?.getElement() as HTMLButtonElement).disabled = false;
    }

    private disabledButtonCheck(): void {
        (this.game.buttonCheck?.getElement() as HTMLButtonElement).disabled = true;
    }

    private activeButtonCheck(): void {
        (this.game.buttonCheck?.getElement() as HTMLButtonElement).disabled = false;
    }

    private updateResultLineAndSourceLine(): void {
        this.removeHandleClickAndDragAndDrop();
        this.game.renderGamePuzzleLine();
        this.game.renderGameCells();
    }

    private showFinalImage(): void {}

    private removeAllResultLines(): void {
        if (this.game.gamePuzzleBlock) {
            const resultBlock = this.game.gamePuzzleBlock.getElement();
            resultBlock.querySelectorAll('ul').forEach((line) => line.remove());
        }
    }

    private getResultsLine(): false | NodeListOf<HTMLUListElement> {
        if (this.game.gamePuzzleBlock) {
            const resultBlock = this.game.gamePuzzleBlock.getElement();
            return resultBlock.querySelectorAll('ul');
        }
        return false;
    }

    private isNewRoundStarted(): boolean {
        const resultLines = this.getResultsLine();
        const words = this.dataController.getCurrentWords();
        if (resultLines && words) {
            return resultLines.length === words.length;
        }
        return false;
    }

    private endGame(): void {
        this.removeAllResultLines();
        this.showFinalImage();
    }

    private continueGame(): void {
        this.state.moveToNextWord();
        this.disabledButtonContinue();
        this.updateResultLineAndSourceLine();
    }

    private nextSentence(): void {
        this.game.onHandleClickContinue = () => {
            if (this.isNewRoundStarted()) {
                this.endGame();
            } else {
                this.continueGame();
            }
        };
    }
}
