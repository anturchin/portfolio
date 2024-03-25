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
    wins?: string;
    time?: string;
}

interface ICar {
    id: number;
    name: string;
    color: string;
}

export type MergedType = IWinner & ICar;
