import { View } from '../../../../View';

import './WrapperCar.scss';

export class WrapperCar extends View {
    constructor() {
        super({ tag: 'div', classNames: ['car__wrapper'] });
    }
}
