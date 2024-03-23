import { View } from '../../../View';

import './Button.scss';

export class Button extends View {
    constructor() {
        super({ tag: 'button', classNames: ['form__btn'] });
    }
}
