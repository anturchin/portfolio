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
        const currentRound = this.dataController.getCurrentRound()?.levelData;
        if (currentRound) {
            this.renderController.renderImageInGamePuzzleContainer(
                currentRound.author,
                `${basePath}/images/${currentRound.imageSrc}`,
                currentRound.name,
                currentRound.year
            );
        }
    }
}
