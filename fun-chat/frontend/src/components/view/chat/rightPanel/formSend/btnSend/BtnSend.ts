import { View } from '../../../../View';

import './BtnSend.scss';

export class BtnSend extends View {
    constructor() {
        super({ tag: 'button', classNames: ['btn__send'], textContent: 'send' });
    }
}
