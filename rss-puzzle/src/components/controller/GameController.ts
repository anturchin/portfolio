import { Router } from '../router/router/Router';
import { State } from '../state/State';
import { RoundData, WordType } from '../state/types';
import { Subject } from '../utils/observer/Subject';
import { Game } from '../view/main/game/Game';
import { GameAudioController } from './GameAudioController';
import { GameDataController } from './GameDataController';
import { GameEventController } from './GameEventController';
import { GameHideController } from './GameHideController';
import { GameImageController } from './GameImageController';
import { GameLogicController } from './GameLogicController';
import { GameRenderController } from './GameRenderController';

export class GameController {
    public eventController: GameEventController;

    public router: Router;

    public dataController: GameDataController;

    private game: Game;

    private state: State;

    private logicController: GameLogicController;

    private imageController: GameImageController;

    private renderController: GameRenderController;

    private hideController: GameHideController;

    private audioController: GameAudioController;

    private subject: Subject;

    constructor(game: Game, router: Router, subject: Subject) {
        this.game = game;
        this.router = router;
        this.subject = subject;
        this.state = new State(this.subject);
        this.audioController = new GameAudioController(this.game, this);
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
            this.hideController,
            this.audioController
        );
        this.renderController = new GameRenderController(
            this.game,
            this.eventController,
            this.dataController
        );
        this.imageController = new GameImageController(this.dataController, this.renderController);
    }

    public getCurrentWordInfo(): WordType | null {
        const currentIndex = this.getCurrentWordIndex();
        return this.dataController.getCurrentWords()?.[currentIndex] || null;
    }

    public getGameData(): RoundData[] | null {
        return this.state.getGameData() || null;
    }

    public getRenderController(): GameRenderController {
        return this.renderController;
    }

    public setLevel(level: number): void {
        if (this.game.toolBarTopMain) {
            if (this.game.toolBarTopMain.levelAndRoundBlock) {
                const { round } = this.game.toolBarTopMain.levelAndRoundBlock;
                if (round) round.setCurrentRound(0);
            }
        }
        this.dataController.setLevel(level);
        this.game.loadData();
    }

    public setRound(round: number): void {
        this.dataController.setRound(round);
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
        this.renderController.clearHintText();

        if (this.game.buttonResult) {
            this.hideController.showButton(this.game.buttonResult);
        }

        if (this.game.buttonAutoComplete) {
            this.hideController.hideButton(this.game.buttonAutoComplete);
        }

        this.hideController.hideButtonCheck();
        this.hideController.hideHintBlock();
        this.hideController.hideGameHintBlock();
    }

    public continueGame(): void {
        this.dataController.moveToNextWord();
        this.hideController.disabledButtonContinue();
        this.renderController.updateResultLineAndSourceLine();
        this.renderController.updateHintText();
        this.hideController.hideButtonContinue();
        if (this.game.buttonResult) {
            this.hideController.hideButton(this.game.buttonResult);
        }

        if (this.game.buttonAutoComplete) {
            this.hideController.showButton(this.game.buttonAutoComplete);
        }
        this.hideController.showButtonCheck();
        this.hideController.disabledButtonCheck();
        this.hideController.showHintBlock();
        this.hideController.showGameHintBlock();
    }

    public nextSentence(): void {
        this.eventController.onHandleClickContinue();
    }
}
