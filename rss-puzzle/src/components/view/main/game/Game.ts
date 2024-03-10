import { Router } from '../../../router/router/Router';
import { View } from '../../View';
import { FileLoaderService } from '../../../services/fileLoader/FileLoaderService';
import { DataParserService } from '../../../services/dataParserService/DataParserService';
import { IRounds } from '../../../services/types';
import { PathToFilesJSONType, basePath } from '../../../services/pathToFilesJSON';

export class Game extends View {
    private router: Router;

    constructor(router: Router) {
        super({ tag: 'section', callback: null });
        this.router = router;
        this.loadData();
    }

    private async loadData(): Promise<void> {
        try {
            console.log(basePath);
            if (basePath) {
                const data = await FileLoaderService.loadJSON<IRounds>(
                    `${basePath}${PathToFilesJSONType.LEVEL_1}`
                );
                const gameData = DataParserService.parseGameData(data);
                console.log(gameData);
            }
        } catch (error) {
            if (error instanceof Error) {
                console.error(error.message);
            }
        }
    }
}
