export interface ISource {
    readonly id: string;
    readonly name: string;
}

export interface ISources {
    readonly source: ISource;
    readonly author: string;
    readonly title: string;
    readonly description: string;
    readonly url: string;
    readonly urlToImage: string;
    readonly publishedAt: string;
}

export type Articles = {
    readonly articles: ISources[];
};

export type Sources = {
    readonly sources: ISource[];
};

export interface IResponse {
    readonly ok: boolean;
    readonly status: number;
    readonly statusText: string;
    readonly articles: ISources[];
    readonly sources: ISource[];
}

export interface IOptions {
    [key: string]: string;
}

export type TypeResp = {
    endpoint: string;
    options?: IOptions;
};

export interface INews<T> {
    draw(data: T[]): void;
}

export interface ICallback {
    (res?: IResponse): void;
}

export type TypeMethod = 'GET' | 'POST';

export enum StatusCode {
    Unauthorized = 401,
    NotFound = 404,
}
