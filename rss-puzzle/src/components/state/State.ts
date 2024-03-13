import { IStateGame } from './types';

export class State {
    private gameState: IStateGame | null;

    constructor() {
        this.gameState = null;
    }

    public getGameState(): IStateGame | null {
        return this.gameState;
    }

    public setGameState(newState: IStateGame): void {
        this.gameState = newState;
    }
}
