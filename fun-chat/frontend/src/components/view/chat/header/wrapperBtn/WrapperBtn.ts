import { View } from '../../../View';

import './WrapperBtn.scss';

export class WrapperBtn extends View {
    constructor() {
        super({ tag: 'div', classNames: ['wrapper__btn'] });
    }
}
