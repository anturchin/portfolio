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

export interface IResponse {
    status: string;
    articles: ISources[];
}
