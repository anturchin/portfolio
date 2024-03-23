import { View } from '../../../View';

import './CarList.scss';

export class CarList extends View {
    constructor() {
        super({ tag: 'div', classNames: ['car__list'] });
    }
}
