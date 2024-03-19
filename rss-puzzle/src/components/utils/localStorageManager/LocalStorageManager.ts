import { UserDataType, GameStateType, StatisticsType } from './types';

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

    public static saveGameIndexes({ currentRoundIndex }: GameStateType): void {
        const gameIndexes = { currentRoundIndex };
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

    public static removeGameIndexes(): void {
        localStorage.removeItem('gameIndexes');
    }

    public static saveGameStatistics(statistics: StatisticsType): void {
        const gameIndexesJson = JSON.stringify(statistics);
        localStorage.setItem('gameStatistics', gameIndexesJson);
    }

    public static getGameStatistics(): StatisticsType | null {
        const gameStatisticsString = localStorage.getItem('gameStatistics');
        if (gameStatisticsString) {
            return JSON.parse(gameStatisticsString);
        }
        return null;
    }
}
