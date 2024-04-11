import { View } from '../../../../View';

import './MessageTop.scss';

export class MessageTop extends View {
    constructor() {
        super({ tag: 'div', classNames: ['message__top'] });
    }
}
