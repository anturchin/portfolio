import { View } from '../../../View';

import './WrapperTitle.scss';

export class WrapperTitle extends View {
    constructor() {
        super({ tag: 'div', classNames: ['wrapper__title'] });
    }
}
