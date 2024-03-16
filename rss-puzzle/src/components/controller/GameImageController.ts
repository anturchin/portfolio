import { basePath } from '../services/pathToFilesJSON';
import { GameDataController } from './GameDataController';
import { GameRenderController } from './GameRenderController';

export class GameImageController {
    private renderController: GameRenderController;

    private dataController: GameDataController;

    constructor(dataController: GameDataController, renderController: GameRenderController) {
        this.dataController = dataController;
        this.renderController = renderController;
    }

    public setCompletedRoundImagePath(): void {
        const pastRound = this.dataController.getPastRound();
        if (pastRound) {
            this.renderController.renderImageInGamePuzzleContainer(
                pastRound.author,
                `${basePath}/images/${pastRound.imageSrc}`,
                pastRound.name,
                pastRound.year
            );
        }
    }
}
