import { View } from '../../../../View';
import { DeliveryInfo } from './deliveryInfo/DeliveryInfo';
import { MessageContent } from './messageContent/MessageContent';
import { MessageTop } from './messageTop/MessageTop';

import './MessageItem.scss';

export class MessageItem extends View {
    constructor(leftOrRight: string = 'right') {
        super({ tag: 'div', classNames: ['message__item', leftOrRight] });
        this.setupMessageItem(leftOrRight);
    }

    private setupMessageItem(leftOrRight: string): void {
        const messageTop = new MessageTop(leftOrRight).getElement();
        const messageContent = new MessageContent().getElement();
        const messageStatus = new DeliveryInfo(leftOrRight).getElement();
        this.getElement().append(...[messageTop, messageContent, messageStatus]);
    }
}
