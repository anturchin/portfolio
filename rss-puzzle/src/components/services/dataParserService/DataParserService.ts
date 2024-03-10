import { IRoundData, IRounds } from '../types';

export class DataParserService {
    static parseGameData({ rounds }: IRounds): IRoundData[] {
        return rounds.map((round) => ({
            levelData: round.levelData,
            words: round.words.map((word) => ({
                audioExample: word.audioExample,
                textExample: word.textExample,
                textExampleTranslate: word.textExampleTranslate,
                id: word.id,
                word: word.word,
                wordTranslate: word.wordTranslate,
            })),
        }));
    }
}
