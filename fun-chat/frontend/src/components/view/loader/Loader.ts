import { View } from '../View';
import { LoaderContainer } from './loaderContainer/LoaderContainer';
import { LoaderSpinner } from './loaderSpinner/LoaderSpinner';
import { LoaderText } from './loaderText/LoaderText';

import './Loader.scss';

export class Loader extends View {
    constructor() {
        super({ tag: 'div', classNames: ['loader'] });
        this.setupLoader();
    }

    private setupLoader(): void {
        const container = new LoaderContainer().getElement();
        const content = new LoaderText().getElement();
        const spinner = new LoaderSpinner().getElement();
        container.append(...[content, spinner]);
        this.addInnerElement(container);
    }
}
