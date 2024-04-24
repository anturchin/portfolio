import { View } from '../../../../View';
import { DeliveryInfo } from './deliveryInfo/DeliveryInfo';
import { MessageContent } from './messageContent/MessageContent';
import { MessageTop } from './messageTop/MessageTop';
import { MessageTakeType } from '../../../../../services/chatService/messageReceiveService/types';

import './MessageItem.scss';

export class MessageItem extends View {
    private message: MessageTakeType;

    private messageContent: MessageContent;

    private messageStatus: DeliveryInfo;

    constructor(leftOrRight: string, message: MessageTakeType) {
        super({ tag: 'div', classNames: ['message__item', leftOrRight] });
        this.message = message;
        this.messageContent = new MessageContent(this.message.text);
        this.messageStatus = new DeliveryInfo(leftOrRight, this.message.status);
        this.setupMessageItem(leftOrRight);
    }

    public getMessageContent(): MessageContent {
        return this.messageContent;
    }

    public setMessageContent(textMessage: string): void {
        this.messageContent.getElement().textContent = textMessage;
    }

    public getMessageStatus(): DeliveryInfo {
        return this.messageStatus;
    }

    public setMessageStatus(textStatus: string): void {
        this.messageStatus.getElement().textContent = textStatus;
    }

    private setupMessageItem(leftOrRight: string): void {
        const messageTop = new MessageTop(
            leftOrRight,
            this.message.from,
            this.message.datetime
        ).getElement();

        const deleteBtn = document.createElement('span');
        deleteBtn.classList.add('delete');
        const editBtn = document.createElement('span');
        editBtn.classList.add('edit');

        this.getElement().append(
            ...[messageTop, this.messageContent.getElement(), this.messageStatus.getElement()]
        );

        if (leftOrRight === 'right') {
            this.getElement().append(...[deleteBtn, editBtn]);
        }

        this.getElement().setAttribute('data-id', this.message.id);
    }
}
