import { View } from '../../../View';
import { MessageItem } from './messageItem/MessageItem';
import { MessageTakeType } from '../../../../services/chatService/messageReceiveService/types';

import './MessageContainer.scss';

export class MessageContainer extends View {
    private messageItem: MessageItem;

    constructor(leftOrRight: string, message: MessageTakeType) {
        super({ tag: 'div', classNames: ['message__container', leftOrRight] });
        this.messageItem = new MessageItem(leftOrRight, message);
        this.setupMessageContainer();
    }

    public getMessageItem(): MessageItem {
        return this.messageItem;
    }

    private setupMessageContainer(): void {
        this.addInnerElement(this.messageItem.getElement());
    }
}
