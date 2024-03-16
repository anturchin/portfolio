import { Router } from '../router/router/Router';
import { basePath } from '../services/pathToFilesJSON';
import { State } from '../state/State';
import { Game } from '../view/main/game/Game';
import { GameDataController } from './GameDataController';
import { GameEventController } from './GameEventController';
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

    constructor(game: Game, router: Router) {
        this.game = game;
        this.router = router;
        this.state = new State();
        this.dataController = new GameDataController(this.state);
        this.logicController = new GameLogicController(this.game, this.dataController, this);
        this.eventController = new GameEventController(this.game, this.logicController, this);
        this.imageController = new GameImageController();
        this.renderController = new GameRenderController(this.game, this.eventController);
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
        return `${basePath}/images/${this.dataController.getCurrentImagePath()}`;
    }

    public endGame(): void {
        this.logicController.removeAllResultLines();
        // this.showFinalImage();
    }

    public continueGame(): void {
        this.state.moveToNextWord();
        this.logicController.disabledButtonContinue();
        this.renderController.updateResultLineAndSourceLine();
    }

    public nextSentence(): void {
        this.eventController.onHandleClickContinue();
    }
}
