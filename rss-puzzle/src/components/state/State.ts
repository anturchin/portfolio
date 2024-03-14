import { LocalStorageManager } from '../utils/localStorageManager/LocalStorageManager';
import { RoundData } from './types';

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
        return this.gameData?.[this.currentRoundIndex] ?? null;
    }

    public getCurrentSentence(): string | null {
        const currentRound = this.getCurrentRound();
        return currentRound?.words?.[this.currentSentenceIndex]?.textExample ?? null;
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
