export type UserDataType = {
    firstName: string;
    lastName: string;
};

export type GameStateType = {
    currentRoundIndex: number;
};

export type WordsStatisticType = {
    index: number;
    isWordGuessed: boolean;
};

export type StatisticsType = {
    level: number;
    round: number;
    wordsStatistic: WordsStatisticType[];
};
