import { View } from '../../../View';

import './Wrapper.scss';

export class Wrapper extends View {
    constructor() {
        super({ tag: 'div', callback: null, classNames: ['statistics__wrapper'] });
    }
}
