import { Router } from '../router/router/Router';
import { DataParserService } from '../services/dataParserService/DataParserService';
import { FileLoaderService } from '../services/fileLoader/FileLoaderService';
import { basePath, PathToFilesJSONType } from '../services/pathToFilesJSON';
import { IRounds } from '../services/types';
import { State } from '../state/State';
import { Game } from '../view/main/game/Game';

export class GameController {
    private game: Game;

    private router: Router;

    private state: State;

    private level: number;

    private isRoundCompleted: boolean;

    constructor(game: Game, router: Router) {
        this.game = game;
        this.router = router;
        this.state = new State();
        this.level = 1;
        this.isRoundCompleted = false;
        this.handleClickCell();
    }

    public getAllCellsFromResultLine(): HTMLCollection | null {
        return this.game.resultLine?.getElement().children || null;
    }

    public checkWordValidity(): void {
        const originalWords = this.getTextExample()?.split(' ');
        const cells = this.getAllCellsFromResultLine();
        if (cells) {
            const collectedWords = [...cells].reduce((acc: string[], elem) => {
                const word = elem.getAttribute('data-word');
                if (word) {
                    acc.push(word);
                }
                return acc;
            }, []);
            if (originalWords && collectedWords) {
                const compareWordArrays = originalWords?.every(
                    (elem, index) => elem === collectedWords[index]
                );
                console.log(originalWords);
                console.log(collectedWords);
                if (compareWordArrays) {
                    this.nextSentence();
                }
            }
        }
    }

    public handleClickCell(): void {
        this.game.onCellsChecked = () => {
            const allCellsAreResultBlock = this.game.cells?.every((cell) => {
                const element = cell.getElement();
                const isResultBlock = element.getAttribute('data-is-result-block');
                return isResultBlock === 'true';
            });
            if (allCellsAreResultBlock) {
                this.checkWordValidity();
            }
        };
    }

    public getCurrentWordIndex(): number {
        return this.state.getCurrentSentenceIndex();
    }

    public setRound(round: number): void {
        this.state.setCurrentRoundIndex(round);
        this.game.render();
    }

    public setLevel(level: number): void {
        this.level = level;
        this.game.loadData();
    }

    public async loadGameData(): Promise<void> {
        try {
            if (basePath) {
                const levelGame = this.getLevelPath(this.level);
                const data = await FileLoaderService.loadJSON<IRounds>(`${basePath}${levelGame}`);
                const gameData = DataParserService.parseGameData(data);
                this.state.setGameData(gameData);
            }
        } catch (error) {
            if (error instanceof Error) {
                console.error(error.message);
            }
        }
    }

    public getTextExample(): string | null {
        return this.state.getCurrentSentence();
    }

    public getImagePath(): string | undefined {
        return `${basePath}/images/${this.state.getCurrentImagePath()}`;
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

    private disabledButtonContinue(): void {
        (this.game.buttonContinue?.getElement() as HTMLButtonElement).disabled = true;
    }

    private activeButtonContinue(): void {
        (this.game.buttonContinue?.getElement() as HTMLButtonElement).disabled = false;
    }

    private updateResultLineAndSourceLine(): void {
        this.removeHandleClickAndDragAndDrop();
        this.game.renderGamePuzzleLine();
        this.game.renderGameCells();
    }

    private showFinalImage(): void {
        if (this.game.gamePuzzleBlock) {
            this.game.gamePuzzleBlock.removePlaceholder();
        }
    }

    private removeAllResultLines(): void {
        if (this.game.gamePuzzleBlock) {
            const resultBlock = this.game.gamePuzzleBlock.getElement();
            resultBlock.querySelectorAll('ul').forEach((line) => line.remove());
            this.showFinalImage();
        }
    }

    private nextSentence(): void {
        this.activeButtonContinue();
        this.game.onHandleClickContinue = () => {
            this.state.moveToNextWord();
            if (this.getCurrentWordIndex() === 0 && !this.isRoundCompleted) {
                // удаляем все линии результатов
                this.removeAllResultLines();
                this.isRoundCompleted = true;
                // в исоходные дынне добавляем информацию о раунде
            } else {
                this.disabledButtonContinue();
                this.updateResultLineAndSourceLine();
            }
            if (this.isRoundCompleted) {
                // в исходные данные добавляем информацию о раунде
                this.isRoundCompleted = false; // Сбрасываем флаг после обработки раунда
            }
        };
    }

    private getLevelPath(level: number): string {
        switch (level) {
            case 1:
                return PathToFilesJSONType.LEVEL_1;
            case 2:
                return PathToFilesJSONType.LEVEL_2;
            case 3:
                return PathToFilesJSONType.LEVEL_3;
            case 4:
                return PathToFilesJSONType.LEVEL_4;
            case 5:
                return PathToFilesJSONType.LEVEL_5;
            case 6:
                return PathToFilesJSONType.LEVEL_6;
            default:
                throw new Error('Invalid level');
        }
    }
}
