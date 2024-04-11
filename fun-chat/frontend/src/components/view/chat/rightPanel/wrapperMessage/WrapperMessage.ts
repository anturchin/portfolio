import { View } from '../../../View';

import './WrapperMessage.scss';

export class WrapperMessage extends View {
    constructor() {
        super({ tag: 'div', classNames: ['message__wrapper'] });
    }
}
