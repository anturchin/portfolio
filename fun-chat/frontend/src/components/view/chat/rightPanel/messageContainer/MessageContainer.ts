import { View } from '../../../View';
import { MessageItem } from './messageItem/MessageItem';
import { MessageTakeType } from '../../../../services/chatService/messageReceiveService/types';

import './MessageContainer.scss';

export class MessageContainer extends View {
    private messageItem: MessageItem;

    constructor(leftOrRight: string, message: MessageTakeType) {
        super({ tag: 'div', classNames: ['message__container', leftOrRight] });
        this.messageItem = new MessageItem(leftOrRight, message);
        this.handleItemClick = this.handleItemClick.bind(this);
        this.setupMessageContainer();
        this.setupEventListener();
    }

    public getMessageItem(): MessageItem {
        return this.messageItem;
    }

    private setupMessageContainer(): void {
        this.addInnerElement(this.messageItem.getElement());
    }

    private handleItemClick(event: MouseEvent): void {
        const target = event.target as HTMLElement;
        if (target.matches('.message__item.right .delete')) {
            console.log('Clicked on delete');
        } else if (target.matches('.message__item.right .edit')) {
            console.log('Clicked on edit');
        }
    }

    private setupEventListener(): void {
        this.getElement().addEventListener('click', this.handleItemClick);
    }
}
