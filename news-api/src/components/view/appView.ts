import News from './news/news';
import Sources from './sources/sources';
import { Articles as TypeArticles, Sources as TypeSources } from '../../types';

export class AppView {
    private news: News;
    private sources: Sources;

    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    drawNews(data: TypeArticles): void {
        const values = data?.articles ? data?.articles : [];
        this.news.draw(values);
    }

    drawSources(data: TypeSources): void {
        const values = data?.sources ? data?.sources : [];
        this.sources.draw(values);
    }
}

export default AppView;
