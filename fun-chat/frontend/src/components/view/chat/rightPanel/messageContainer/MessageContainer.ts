import { View } from '../../../View';
import { MessageItem } from './messageItem/MessageItem';
import { MessageTakeType } from '../../../../services/chatService/messageReceiveService/types';
import { Chat } from '../../Chat';

import './MessageContainer.scss';

export class MessageContainer extends View {
    public messageItem: MessageItem;

    private chat: Chat;

    constructor(leftOrRight: string, message: MessageTakeType, chat: Chat) {
        super({ tag: 'div', classNames: ['message__container', leftOrRight] });
        this.messageItem = new MessageItem(leftOrRight, message);
        this.chat = chat;
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

        const chatController = this.chat.getChatController();
        const rightPanelController = chatController.getRightPanelController();

        if (target.matches('.message__item.right .delete')) {
            const idMessage = target.parentElement?.dataset.id;
            if (idMessage) rightPanelController.handleClickRemoveMessage(idMessage);
        } else if (target.matches('.message__item.right .edit')) {
            const idMessage = target.parentElement?.dataset.id;
            const text = this.messageItem.getMessageContent().getElement().textContent;
            if (idMessage && text) rightPanelController.handleClickEditMessage(idMessage, text);
        }
    }

    private setupEventListener(): void {
        this.getElement().addEventListener('click', this.handleItemClick);
    }
}
