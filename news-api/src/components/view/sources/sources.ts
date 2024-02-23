import './sources.scss';
import { ISource, INews } from '../../../types';

class Sources implements INews<ISource> {
    public draw(data: ISource[]): void {
        const fragment = document.createDocumentFragment();
        const sourceItemTemp: HTMLTemplateElement | null = document.querySelector('#sourceItemTemp');
        if (sourceItemTemp) {
            data.forEach((item) => {
                const sourceClone = sourceItemTemp.content.cloneNode(true) as HTMLElement;

                const sourceItemName: HTMLElement | null = sourceClone.querySelector('.source__item-name');
                if (sourceItemName) {
                    sourceItemName.textContent = item.name;
                }

                const sourceItem: HTMLElement | null = sourceClone.querySelector('.source__item');
                if (sourceItem) {
                    sourceItem.setAttribute('data-source-id', item.id);
                }

                fragment.append(sourceClone);
            });

            const sources: HTMLElement | null = document.querySelector('.sources');
            if (sources) {
                sources.append(fragment);
            }
        }
    }
}

export default Sources;
