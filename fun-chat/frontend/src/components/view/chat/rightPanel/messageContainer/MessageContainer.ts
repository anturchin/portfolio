import { View } from '../../../View';
import { MessageItem } from './messageItem/MessageItem';

import './MessageContainer.scss';

export class MessageContainer extends View {
    constructor(leftOrRight: string = 'right') {
        super({ tag: 'div', classNames: ['message__container', leftOrRight] });
        this.setupMessageContainer(leftOrRight);
    }

    private setupMessageContainer(leftOrRight: string): void {
        const messageItem = new MessageItem(leftOrRight).getElement();
        this.addInnerElement(messageItem);
    }
}
