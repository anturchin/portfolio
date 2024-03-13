export type LevelDataType = {
    id: string;
    name: string;
    imageSrc: string;
    cutSrc: string;
    author: string;
    year: string;
};

export type WordType = {
    audioExample: string;
    textExample: string;
    textExampleTranslate: string;
    id: number;
    word: string;
    wordTranslate: string;
};

export type RoundData = {
    levelData: LevelDataType;
    words: WordType[];
};

export interface IStateGame {
    rounds: RoundData[];
}
