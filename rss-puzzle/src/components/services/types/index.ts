export type WordDataType = {
    audioExample: string;
    textExample: string;
    textExampleTranslate: string;
    id: number;
    word: string;
    wordTranslate: string;
};

export type LevelDataType = {
    id: string;
    name: string;
    imageSrc: string;
    cutSrc: string;
    author: string;
    year: string;
};

export interface IRoundData {
    levelData: LevelDataType;
    words: WordDataType[];
}

export interface IRounds {
    rounds: IRoundData[];
}
