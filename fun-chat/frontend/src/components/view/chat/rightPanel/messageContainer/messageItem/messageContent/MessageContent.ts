import { View } from '../../../../../View';

import './MessageContent.scss';

export class MessageContent extends View {
    constructor(message: string) {
        super({ tag: 'p', classNames: ['message__content'], textContent: message });
    }
}
