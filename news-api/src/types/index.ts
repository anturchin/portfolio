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
    status: string;
    articles: ISources[];
}

export interface INews<T> {
    draw(data: T[]): void;
}
