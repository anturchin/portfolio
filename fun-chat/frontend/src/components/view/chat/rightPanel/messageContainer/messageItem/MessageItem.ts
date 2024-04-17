import { View } from '../../../../View';
import { DeliveryInfo } from './deliveryInfo/DeliveryInfo';
import { MessageContent } from './messageContent/MessageContent';
import { MessageTop } from './messageTop/MessageTop';
import { MessageTakeType } from '../../../../../services/chatService/messageReceiveService/types';

import './MessageItem.scss';

export class MessageItem extends View {
    private message: MessageTakeType;

    constructor(leftOrRight: string, message: MessageTakeType) {
        super({ tag: 'div', classNames: ['message__item', leftOrRight] });
        this.message = message;
        this.setupMessageItem(leftOrRight);
    }

    private setupMessageItem(leftOrRight: string): void {
        const messageTop = new MessageTop(
            leftOrRight,
            this.message.from,
            this.message.datetime
        ).getElement();
        const messageContent = new MessageContent(this.message.text).getElement();
        const messageStatus = new DeliveryInfo(leftOrRight, this.message.status).getElement();
        this.getElement().append(...[messageTop, messageContent, messageStatus]);
        this.getElement().setAttribute('data-id', this.message.id);
    }
}
