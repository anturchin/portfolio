import { View } from '../../../../View';

import './MessageContent.scss';

export class MessageContent extends View {
    constructor() {
        super({ tag: 'p', classNames: ['message__content'] });
    }
}
