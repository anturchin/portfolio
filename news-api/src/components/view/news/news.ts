import './news.scss';
import { ISources } from '../../../types/';

interface INews<T> {
    draw(data: T[]): void;
}

class News implements INews<ISources> {
    draw(data: ISources[]): void {
        const news = data.length >= 10 ? data.filter((_item, idx) => idx < 10) : data;

        const fragment = document.createDocumentFragment() as DocumentFragment;
        const newsItemTemp = document.querySelector('#newsItemTemp') as HTMLTemplateElement;

        news.forEach((item, idx) => {
            const newsClone = newsItemTemp.content.cloneNode(true) as HTMLElement;

            const newsItem = newsClone.querySelector('.news__item') as HTMLElement;
            if (idx % 2) {
                if (newsItem) {
                    newsItem.classList.add('alt');
                }
            }

            const newsMetaPhoto = newsClone.querySelector('.news__meta-photo') as HTMLElement;
            if (newsMetaPhoto) {
                newsMetaPhoto.style.backgroundImage = `url(${item.urlToImage || 'img/news_placeholder.jpg'})`;
            }

            const newsMetaAuthor = newsClone.querySelector('.news__meta-author') as HTMLElement;
            if (newsMetaAuthor) {
                newsMetaAuthor.textContent = item.author || item.source.name;
            }

            const newsMetaDate = newsClone.querySelector('.news__meta-date') as HTMLElement;
            if (newsMetaDate) {
                newsMetaDate.textContent = item.publishedAt.slice(0, 10).split('-').reverse().join('-');
            }

            const newsDescriptionTitle = newsClone.querySelector('.news__description-title') as HTMLElement;
            if (newsDescriptionTitle) {
                newsDescriptionTitle.textContent = item.title;
            }

            const newsDescriptionSource = newsClone.querySelector('.news__description-source') as HTMLElement;
            if (newsDescriptionSource) {
                newsDescriptionSource.textContent = item.source.name;
            }

            const newsDescriptionContent = newsClone.querySelector('.news__description-content') as HTMLElement;
            if (newsDescriptionContent) {
                newsDescriptionContent.textContent = item.description;
            }

            const newsReadMore = newsClone.querySelector('.news__read-more a') as HTMLElement;
            if (newsReadMore) {
                newsReadMore.setAttribute('href', item.url);
            }

            fragment.append(newsClone);
        });

        const newsElement = document.querySelector('.news') as HTMLElement;
        if (newsElement) {
            newsElement.innerHTML = '';
            newsElement.appendChild(fragment);
        }
    }
}

export default News;
