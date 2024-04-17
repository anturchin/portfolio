import { View } from '../../../View';
import { MessageItem } from './messageItem/MessageItem';
import { MessageTakeType } from '../../../../services/chatService/messageReceiveService/types';

import './MessageContainer.scss';

export class MessageContainer extends View {
    constructor(leftOrRight: string, message: MessageTakeType) {
        super({ tag: 'div', classNames: ['message__container', leftOrRight] });
        this.setupMessageContainer(leftOrRight, message);
    }

    private setupMessageContainer(leftOrRight: string, message: MessageTakeType): void {
        const messageItem = new MessageItem(leftOrRight, message).getElement();
        this.addInnerElement(messageItem);
    }
}
