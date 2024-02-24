import './news.scss';
import { ISources, INews } from '../../../types/';

class News implements INews<ISources> {
    public draw(data: Readonly<ISources[]>): void {
        const news = data.length >= 10 ? data.filter((_item, idx) => idx < 10) : data;

        const fragment = document.createDocumentFragment();
        const newsItemTemp: HTMLTemplateElement | null = document.querySelector('#newsItemTemp');

        if (newsItemTemp) {
            news.forEach((item, idx) => {
                const newsClone = newsItemTemp.content.cloneNode(true) as HTMLElement;

                const newsItem: HTMLElement | null = newsClone.querySelector('.news__item');
                if (idx % 2) {
                    if (newsItem) {
                        newsItem.classList.add('alt');
                    }
                }

                const newsMetaPhoto: HTMLElement | null = newsClone.querySelector('.news__meta-photo');
                if (newsMetaPhoto) {
                    newsMetaPhoto.style.backgroundImage = `url(${item.urlToImage || 'img/news_placeholder.jpg'})`;
                }

                const newsMetaAuthor: HTMLElement | null = newsClone.querySelector('.news__meta-author');
                if (newsMetaAuthor) {
                    newsMetaAuthor.textContent = item.author || item.source.name;
                }

                const newsMetaDate: HTMLElement | null = newsClone.querySelector('.news__meta-date');
                if (newsMetaDate) {
                    newsMetaDate.textContent = item.publishedAt.slice(0, 10).split('-').reverse().join('-');
                }

                const newsDescriptionTitle: HTMLElement | null = newsClone.querySelector('.news__description-title');
                if (newsDescriptionTitle) {
                    newsDescriptionTitle.textContent = item.title;
                }

                const newsDescriptionSource: HTMLElement | null = newsClone.querySelector('.news__description-source');
                if (newsDescriptionSource) {
                    newsDescriptionSource.textContent = item.source.name;
                }

                const newsDescriptionContent: HTMLElement | null =
                    newsClone.querySelector('.news__description-content');
                if (newsDescriptionContent) {
                    newsDescriptionContent.textContent = item.description;
                }

                const newsReadMore: HTMLElement | null = newsClone.querySelector('.news__read-more a');
                if (newsReadMore) {
                    newsReadMore.setAttribute('href', item.url);
                }

                fragment.append(newsClone);
            });
        }

        const newsElement: HTMLElement | null = document.querySelector('.news');
        if (newsElement) {
            newsElement.innerHTML = '';
            newsElement.appendChild(fragment);
        }
    }
}

export default News;
