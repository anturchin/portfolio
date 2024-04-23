import { View } from '../../View';

import './LoaderContainer.scss';

export class LoaderContainer extends View {
    constructor() {
        super({ tag: 'div', classNames: ['loader__container'] });
    }
}
