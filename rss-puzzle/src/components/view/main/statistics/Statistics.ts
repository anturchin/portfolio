import { Router } from '../../../router/router/Router';
import { DataParserService } from '../../../services/dataParserService/DataParserService';
import { FileLoaderService } from '../../../services/fileLoader/FileLoaderService';
import { PathToFilesJSONType, basePath } from '../../../services/pathToFilesJSON';
import { IRoundData, IRounds } from '../../../services/types';
import { LocalStorageManager } from '../../../utils/localStorageManager/LocalStorageManager';
import { StatisticsType } from '../../../utils/localStorageManager/types';
import { View } from '../../View';
import { Picture } from './picture/Picture';
import { NameImage } from './nameImage/NameImage';
import { ItemList } from './itemList/ItemList';
import { GuessedList } from './guessedList/GuessedList';
import { Wrapper } from './wrapper/Wrapper';
import { NameList } from './nameList/NameList';
import { ButtonStatistic } from './buttonContinue/ButtonStatistic';
import { PictureSound } from './pictureSound/PictureSound';
import { TextContent } from './textContent/TextContent';

import './Statistics.scss';

export class Statistics extends View {
    private router: Router;

    private gameStatisticsFromLS: StatisticsType | null = null;

    constructor(router: Router) {
        super({ tag: 'section', callback: null, classNames: ['statistics'] });
        this.router = router;
        this.loadGameStatistic();
    }

    private setupStatistics(data: IRoundData[]): void {
        if (this.gameStatisticsFromLS) {
            const indexRound = this.gameStatisticsFromLS.round;

            const wrapperList = new Wrapper().getElement();

            const nameGuessedList = new NameList('i know', true).getElement();
            const guessedList = new GuessedList().getElement();
            const nameUnguessedList = new NameList("i don't know", false).getElement();
            const unguessedList = new GuessedList().getElement();

            wrapperList.append(...[nameGuessedList, guessedList, nameUnguessedList, unguessedList]);

            const wrapperPicture = new Wrapper().getElement();

            const picture = new Picture(
                `${basePath}/images/${data[indexRound].levelData.cutSrc}`
            ).getElement();
            const nameImage = new NameImage(data[indexRound].levelData.author).getElement();

            wrapperPicture.append(...[picture, nameImage]);

            this.gameStatisticsFromLS.wordsStatistic.forEach((elem, index) => {
                const itemList = new ItemList().getElement();
                const imageSound = new PictureSound(
                    `${basePath}/${data[indexRound].words[index].audioExample}`
                ).getElement();
                itemList.append(imageSound);
                if (elem.isWordGuessed) {
                    const { textExample } = data[indexRound].words[index];
                    const textContent = new TextContent(textExample).getElement();
                    itemList.append(textContent);
                    guessedList.append(itemList);
                } else {
                    const { textExample } = data[indexRound].words[index];
                    const textContent = new TextContent(textExample).getElement();
                    itemList.append(textContent);
                    unguessedList.append(itemList);
                }
            });

            const button = new ButtonStatistic(this.router).getElement();

            this.viewHtmlElementCreator
                .getElement()
                .append(...[wrapperPicture, wrapperList, button]);
        }
    }

    private async loadGameStatistic(): Promise<void> {
        try {
            if (basePath) {
                this.gameStatisticsFromLS = LocalStorageManager.getGameStatistics();
                if (this.gameStatisticsFromLS) {
                    const level = this.getLevelPath(this.gameStatisticsFromLS.level);
                    const data = await FileLoaderService.loadJSON<IRounds>(`${basePath}${level}`);
                    const gameData = DataParserService.parseGameData(data);
                    this.setupStatistics(gameData);
                }
            }
        } catch (error) {
            if (error instanceof Error) {
                console.error(error.message);
            }
        }
    }

    private getLevelPath(level: number): string {
        switch (level) {
            case 1:
                return PathToFilesJSONType.LEVEL_1;
            case 2:
                return PathToFilesJSONType.LEVEL_2;
            case 3:
                return PathToFilesJSONType.LEVEL_3;
            case 4:
                return PathToFilesJSONType.LEVEL_4;
            case 5:
                return PathToFilesJSONType.LEVEL_5;
            case 6:
                return PathToFilesJSONType.LEVEL_6;
            default:
                throw new Error('Invalid level');
        }
    }
}
