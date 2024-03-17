import { Router } from '../router/router/Router';
import { State } from '../state/State';
import { Game } from '../view/main/game/Game';
import { GameDataController } from './GameDataController';
import { GameEventController } from './GameEventController';
import { GameHideController } from './GameHideController';
import { GameImageController } from './GameImageController';
import { GameLogicController } from './GameLogicController';
import { GameRenderController } from './GameRenderController';

export class GameController {
    private game: Game;

    private router: Router;

    private state: State;

    private dataController: GameDataController;

    private eventController: GameEventController;

    private logicController: GameLogicController;

    private imageController: GameImageController;

    private renderController: GameRenderController;

    private hideController: GameHideController;

    constructor(game: Game, router: Router) {
        this.game = game;
        this.router = router;
        this.state = new State();
        this.hideController = new GameHideController(this.game);
        this.dataController = new GameDataController(this.state);
        this.logicController = new GameLogicController(
            this.game,
            this.dataController,
            this,
            this.hideController
        );
        this.eventController = new GameEventController(
            this.game,
            this.logicController,
            this,
            this.hideController
        );
        this.renderController = new GameRenderController(this.game, this.eventController);
        this.imageController = new GameImageController(this.dataController, this.renderController);
    }

    public setLevel(level: number): void {
        this.dataController.setLevel(level);
        this.game.loadData();
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
        return this.dataController?.getCurrentImagePath();
    }

    public endGame(): void {
        this.logicController.removeAllResultLines();
        this.imageController.setCompletedRoundImagePath();
        this.hideController.hideButtonCheck();
    }

    public continueGame(): void {
        this.dataController.moveToNextWord();
        this.logicController.disabledButtonContinue();
        this.renderController.updateResultLineAndSourceLine();
        this.hideController.hideButtonContinue();
        this.hideController.showButtonCheck();
        this.logicController.disabledButtonCheck();
    }

    public nextSentence(): void {
        this.eventController.onHandleClickContinue();
    }
}
