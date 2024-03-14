import { UserDataType, GameStateType } from './types';

export class LocalStorageManager {
    public static saveUserData({ firstName, lastName }: UserDataType): void {
        const userData = { firstName, lastName };
        const userDataJson = JSON.stringify(userData);
        localStorage.setItem('userData', userDataJson);
    }

    public static getUserData(): UserDataType | null {
        const userDataString = localStorage.getItem('userData');
        if (userDataString) {
            return JSON.parse(userDataString);
        }
        return null;
    }

    public static removeUserData(): void {
        localStorage.removeItem('userData');
    }

    public static saveGameIndexes({
        currentRoundIndex,
        currentSentenceIndex,
    }: GameStateType): void {
        const gameIndexes = { currentRoundIndex, currentSentenceIndex };
        const gameIndexesJson = JSON.stringify(gameIndexes);
        localStorage.setItem('gameIndexes', gameIndexesJson);
    }

    public static getGameIndexes(): GameStateType | null {
        const gameIndexesString = localStorage.getItem('gameIndexes');
        if (gameIndexesString) {
            return JSON.parse(gameIndexesString);
        }
        return null;
    }
}
