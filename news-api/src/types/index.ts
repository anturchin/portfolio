export interface ISource {
    id: string;
    name: string;
}

export interface ISources {
    source: ISource;
    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
}

export type Articles = {
    articles: ISources[];
};

export type Sources = {
    sources: ISource[];
};

export interface IResponse {
    ok: boolean;
    status: number;
    statusText: string;
    articles: ISources[];
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
