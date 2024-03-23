import { View } from '../../../View';

import './Button.scss';

export class Button extends View {
    constructor(text: string) {
        super({
            tag: 'button',
            classNames: ['form__btn'],
            textContent: `${text}`,
        });
    }
}
