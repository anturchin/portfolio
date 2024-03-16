import { LocalStorageManager } from '../utils/localStorageManager/LocalStorageManager';
import { RoundData, WordType } from './types';

export class State {
    private gameData: RoundData[] | null;

    private currentRoundIndex: number;

    private currentSentenceIndex: number;

    constructor() {
        this.gameData = null;
        this.currentRoundIndex = 0;
        this.currentSentenceIndex = 0;
        this.setupGameState();
    }

    public restartGame(): void {
        this.currentRoundIndex = 0;
        this.currentSentenceIndex = 0;

        this.saveStateToLocalStorage();
    }

    public moveToNextRound(): void {
        if (this.gameData && this.currentRoundIndex < this.gameData.length - 1) {
            this.currentRoundIndex += 1;
            this.currentSentenceIndex = 0;
            if (this.currentRoundIndex > this.gameData.length - 1) {
                this.restartGame();
            }
        }
        this.saveStateToLocalStorage();
    }

    public moveToNextWord(): void {
        const currentRound = this.getCurrentRound();
        if (currentRound && this.currentSentenceIndex < currentRound.words.length - 1) {
            this.currentSentenceIndex += 1;
            if (this.currentSentenceIndex === currentRound.words.length - 1) {
                this.moveToNextRound();
            }
            this.saveStateToLocalStorage();
        }
    }

    public getGameData(): RoundData[] | null {
        return this.gameData;
    }

    public setGameData(newGameData: RoundData[]): void {
        this.gameData = newGameData;
    }

    public setCurrentRoundIndex(index: number): void {
        this.currentRoundIndex = index;
        this.saveStateToLocalStorage();
    }

    public setCurrentSentenceIndex(index: number): void {
        this.currentSentenceIndex = index;
        this.saveStateToLocalStorage();
    }

    public getCurrentRound(): RoundData | null {
        if (this.gameData) {
            return this.gameData[this.currentRoundIndex];
        }
        return null;
    }

    public getCurrentWords(): WordType[] | null {
        if (this.gameData) {
            return this.gameData[this.currentRoundIndex].words;
        }
        return null;
    }

    public getCurrentSentenceIndex(): number {
        return this.currentSentenceIndex;
    }

    public getCurrentSentence(): string | null {
        const currentRound = this.getCurrentRound();
        if (currentRound) {
            return currentRound.words[this.currentSentenceIndex].textExample;
        }
        return null;
    }

    public getCurrentImagePath(): string | null {
        const currentRound = this.getCurrentRound();
        if (currentRound) {
            return currentRound.levelData.imageSrc;
        }
        return null;
    }

    private setupGameState(): void {
        const storedState = LocalStorageManager.getGameIndexes();
        if (storedState) {
            this.currentRoundIndex = storedState.currentRoundIndex;
            this.currentSentenceIndex = storedState.currentSentenceIndex;
        }
    }

    private saveStateToLocalStorage(): void {
        LocalStorageManager.saveGameIndexes({
            currentRoundIndex: this.currentRoundIndex,
            currentSentenceIndex: this.currentSentenceIndex,
        });
    }
}
