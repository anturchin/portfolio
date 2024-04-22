import { View } from '../../View';

import './BtnGoBack.scss';

export class BtnGoBack extends View {
    constructor() {
        super({ tag: 'button', classNames: ['btn__back'], textContent: 'Go back' });
    }
}
