import './sources.scss';
import { ISource, INews } from '../../../types';

class Sources implements INews<ISource> {
    public draw(data: ISource[]): void {
        const fragment = document.createDocumentFragment() as DocumentFragment;
        const sourceItemTemp = document.querySelector('#sourceItemTemp') as HTMLTemplateElement;

        data.forEach((item) => {
            const sourceClone = sourceItemTemp.content.cloneNode(true) as HTMLElement;

            const sourceItemName = sourceClone.querySelector('.source__item-name') as HTMLElement;
            if (sourceItemName) {
                sourceItemName.textContent = item.name;
            }

            const sourceItem = sourceClone.querySelector('.source__item') as HTMLElement;
            if (sourceItem) {
                sourceItem.setAttribute('data-source-id', item.id);
            }

            fragment.append(sourceClone);
        });

        const sources = document.querySelector('.sources') as HTMLElement;
        if (sources) {
            sources.append(fragment);
        }
    }
}

export default Sources;
