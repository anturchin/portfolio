import { Router } from '../../../router/router/Router';
import { View } from '../../View';
import { FileLoaderService } from '../../../services/fileLoader/FileLoaderService';
import { DataParserService } from '../../../services/dataParserService/DataParserService';
import { IRounds } from '../../../services/types';
import { PathToFilesJSONType, basePath } from '../../../services/pathToFilesJSON';
import { State } from '../../../state/State';
import { GamePuzzle } from './gamePuzzle/GamePuzzle';
import { IView } from '../../View.interface';
import { GamePuzzleLine } from './gamePuzzleLine/GamePuzzleLine';
import { GameSource } from './gameSource/GameSource';
import { GameSourceLine } from './gameSourceLine/GameSourceLine';
import { WordShuffler } from '../../../helpers/WordShuffler';
import { GameCell } from './gameCell/GameCell';

import './Game.scss';

export class Game extends View {
    private router: Router;

    private state: State;

    private gamePuzzleLines: IView[] | null;

    private gameCells: IView[] | null;

    private gameSourceLine: IView | null;

    private round: number;

    private currentWordIndex: number;

    private level: number;

    constructor(router: Router) {
        super({ tag: 'section', callback: null, classNames: ['game__wrapper'] });
        this.router = router;
        this.state = new State();
        this.gamePuzzleLines = [];
        this.gameCells = [];
        this.gameSourceLine = null;
        this.round = 0;
        this.currentWordIndex = 0;
        this.level = 1;
        this.loadData();
    }

    public setRound(round: number): void {
        this.round = round;
        this.render();
    }

    public setLevel(level: number): void {
        this.level = level;
        this.loadData();
    }

    public setCurrentWordIndex(index: number): void {
        this.currentWordIndex = index;
        this.updateActiveGamePuzzleLine();
    }

    public updateActiveGamePuzzleLine(): void {
        if (this.gamePuzzleLines) {
            this.gamePuzzleLines.forEach((line) => line.getElement().classList.remove('active'));
            const activeLine = this.gamePuzzleLines[this.currentWordIndex];
            activeLine.getElement().classList.add('active');
        }
    }

    public override render(): void {
        const componentGamePuzzle = this.getGamePuzzle()?.getElement();
        this.gamePuzzleLines = this.getGamePuzzleLines();
        if (componentGamePuzzle) {
            if (this.gamePuzzleLines) {
                this.gamePuzzleLines.forEach((line) => {
                    componentGamePuzzle.appendChild(line.getElement());
                });
            }
            this.viewHtmlElementCreator.addInnerElement(componentGamePuzzle);
        }
        const gameSource = this.getGameSource()?.getElement();
        const gameSourceLine = this.getGameSourceLine();

        if (gameSourceLine) {
            gameSource?.appendChild(gameSourceLine.getElement());
        }
        if (gameSource) {
            this.viewHtmlElementCreator.addInnerElement(gameSource);
        }

        if (this.gameSourceLine) {
            const sourceRowWidth = this.gameSourceLine.getElement().offsetWidth;
            const gameCells = this.getGameCells(sourceRowWidth);

            if (gameCells) {
                gameCells.forEach((cell) => {
                    gameSourceLine?.getElement().appendChild(cell.getElement());
                });
            }
        }
    }

    public getGamePuzzle(): IView | null {
        const levelData = this.state.getCurrentRound()?.levelData;
        if (levelData) {
            const pathImage = `${basePath}/images/${levelData.imageSrc}`;
            const gamePuzzle = new GamePuzzle(pathImage);
            return gamePuzzle;
        }
        return null;
    }

    public getGamePuzzleLines(): IView[] | null {
        const words = this.state.getCurrentRound()?.words;
        if (words) {
            const list: IView[] = [];
            for (let i = 0; i < words.length; i += 1) {
                if (this.currentWordIndex === i) {
                    const isActive = true;
                    list.push(new GamePuzzleLine(isActive));
                } else {
                    list.push(new GamePuzzleLine());
                }
            }
            return list;
        }
        return null;
    }

    public getGameSource(): IView | null {
        const gameSourceContainer = new GameSource();
        return gameSourceContainer || null;
    }

    public getGameSourceLine(): IView | null {
        this.gameSourceLine = new GameSourceLine();
        return this.gameSourceLine || null;
    }

    public getGameCells(sourceRowWidth: number): IView[] | null {
        const textExample = this.state.getCurrentRound()?.words[this.currentWordIndex].textExample;
        const imagePath = this.state.getCurrentRound()?.levelData.imageSrc;
        let pathBuild = `${basePath}/images/`;
        if (imagePath) {
            pathBuild += imagePath;
        }
        if (textExample) {
            const shuffledWords = WordShuffler.shuffle(textExample.split(' '));
            shuffledWords.forEach((word, index) => {
                this.gameCells?.push(
                    new GameCell(
                        word,
                        shuffledWords,
                        textExample.split(' '),
                        index,
                        sourceRowWidth,
                        this.currentWordIndex,
                        pathBuild
                    )
                );
            });
            return this.gameCells;
        }
        return null;
    }

    private async loadData(): Promise<void> {
        try {
            if (basePath) {
                const level = this.getLevelPath(this.level);
                const data = await FileLoaderService.loadJSON<IRounds>(`${basePath}${level}`);
                const gameData = DataParserService.parseGameData(data);
                this.state.setGameData(gameData);
                this.render();
            }
        } catch (error) {
            if (error instanceof Error) {
                console.error(error.message);
            }
        }
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
