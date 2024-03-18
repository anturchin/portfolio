import { DataParserService } from '../services/dataParserService/DataParserService';
import { FileLoaderService } from '../services/fileLoader/FileLoaderService';
import { PathToFilesJSONType, basePath } from '../services/pathToFilesJSON';
import { IRounds } from '../services/types';
import { State } from '../state/State';
import { RoundData, WordType } from '../state/types';

export class GameDataController {
    private state: State;

    private level: number;

    constructor(state: State) {
        this.state = state;
        this.level = 1;
    }

    public setRound(roundIndex: number): void {
        this.state.updateRound(roundIndex);
    }

    public getCurrentRound(): RoundData | null {
        return this.state.getCurrentRound() || null;
    }

    public moveToNextWord(): void {
        this.state.moveToNextWord();
    }

    public getCurrentImagePath(): string | undefined {
        return `${basePath}/images/${this.state.getCurrentImagePath()}`;
    }

    public getCurrentWords(): WordType[] | null {
        return this.state.getCurrentWords();
    }

    public getTextExample(): string | null {
        return this.state.getCurrentSentence();
    }

    public getCurrentWordIndex(): number {
        return this.state.getCurrentSentenceIndex();
    }

    public setLevel(level: number): void {
        this.level = level;
        this.state.setCurrentRoundIndex(0);
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

    public getLevelPath(level: number): string {
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
