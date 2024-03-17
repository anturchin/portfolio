import { basePath } from '../services/pathToFilesJSON';
import { SoundPlayer } from '../utils/SoundPlayer/SoundPlayer';
import { Game } from '../view/main/game/Game';
import { GameController } from './GameController';

export class GameAudioController {
    private game: Game;

    private mainController: GameController;

    private player: SoundPlayer;

    constructor(game: Game, mainController: GameController) {
        this.game = game;
        this.player = new SoundPlayer();
        this.mainController = mainController;
        this.setupEventListener();
    }

    public playSound(): void {
        const currentWordInfo = this.mainController.getCurrentWordInfo();
        if (currentWordInfo) {
            const pathAudioFile = `${basePath}/${currentWordInfo.audioExample}`;
            this.player.playSound(pathAudioFile);
            const btn = this.game.buttonAudioHint?.getElement();
            if (btn) btn.classList.add('sound-animation');
        }
    }

    private stopAnimation(): void {
        const btn = this.game.buttonAudioHint?.getElement();
        if (btn) btn.classList.remove('sound-animation');
    }

    private setupEventListener(): void {
        this.player.audio.addEventListener('ended', this.stopAnimation.bind(this));
    }
}
