export const enum SortBy {
    ID = 'id',
    Wins = 'wins',
    Time = 'time',
}

export const enum SortOrder {
    ASC = 'ASC',
    DESC = 'DESC',
}

interface IWinner {
    id: number;
    wins?: number;
    time?: number;
}

interface ICar {
    id: number;
    name: string;
    color: string;
}

export type MergedType = IWinner & ICar;
