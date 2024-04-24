/* eslint-disable brace-style */
import { IObserverMessages } from '../../../observers/observerMessages/ObserverMessages.interface';
import { IObserverStatusMsg } from '../../../observers/observerStatusMsg/ObserverStatusMsg.interface';
import { ChatService } from '../../../services/chatService/ChatService';
import {
    DeleteMessageType,
    FetchingMessageType,
    MessageTakeType,
    ReadMessageType,
} from '../../../services/chatService/messageReceiveService/types';
import { User } from '../../../services/chatService/types';
import { State } from '../../../state/State';
import { SessionStorageManager } from '../../../utils/sessionStorageManager/SessionStorageManager';
import { LeftPanel } from '../../../view/chat/leftPanel/LeftPanel';
import { RightPanel } from '../../../view/chat/rightPanel/RightPanel';
import { Divider } from '../../../view/chat/rightPanel/messageContainer/divider/Divider';
import { StatusMessage } from './types';

export class RightPanelController
    implements IObserverMessages<MessageTakeType[]>, IObserverStatusMsg<FetchingMessageType>
{
    private chatService: ChatService;

    private rightPanel: RightPanel;

    private leftPanel: LeftPanel;

    private state: State;

    private ignoreHandleClickWrapperMsg: boolean = false;

    constructor(
        chatService: ChatService,
        rightPanel: RightPanel,
        leftPanel: LeftPanel,
        state: State
    ) {
        this.chatService = chatService;
        this.rightPanel = rightPanel;
        this.leftPanel = leftPanel;
        this.state = state;
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.updateReadStatusMessage = this.updateReadStatusMessage.bind(this);
        this.removeMessageByIdAndUpdateMessages =
            this.removeMessageByIdAndUpdateMessages.bind(this);
        this.state.registerMessageObserver(this.constructor.name, this);

        const messageReceiveService = this.chatService.getMessageReceiveService();
        messageReceiveService.registerStatusObserver(this.constructor.name, this);
        messageReceiveService.setCallbackUpdateReadStatusMsg(this.updateReadStatusMessage);
        messageReceiveService.setCallbackDeleteMessage(this.removeMessageByIdAndUpdateMessages);

        this.setEventListenerFormSubmit();
        this.setEventListenerClickWrapperMsg();
        this.setEventListenerScrollWrapperMsg();
    }

    public handleClickRemoveMessage(id: string): void {
        const messageService = this.chatService.getMessageReceiveService();
        messageService.sendRequestDeleteMessage(id, this.removeMessageByIdAndUpdateMessages);
    }

    public removeMessageByIdAndUpdateMessages(message: DeleteMessageType): void {
        this.ignoreHandleClickWrapperMsg = true;

        const wrapperMessage = this.rightPanel.getWrapperMessage();
        const messages = this.rightPanel.getMessages();
        if (messages.length) {
            const { id } = message;
            const findMessage = messages.find(
                ({ messageItem }) => messageItem.getElement().dataset.id === id
            );
            if (findMessage) {
                const statusMessage = findMessage
                    .getMessageItem()
                    .getMessageStatus()
                    .getElement().textContent;

                const userName = findMessage.getMessageItem().getUserNameFromMessage();
                this.rightPanel.removeMessage(findMessage);

                if (statusMessage !== StatusMessage.Read) {
                    const userItem = this.leftPanel.getUserItem(userName);
                    userItem?.decreaseCounter();
                    if (userItem?.getCounter() === 0) {
                        document.querySelector('.divider')?.remove();
                    }
                }
            }
        }

        if (messages.length === 0) {
            wrapperMessage.updateTextContentInPlaceholder();
            wrapperMessage.placeHolderShow();
        }
    }

    public updateStatus(data: FetchingMessageType): void {
        const messageItems = this.rightPanel.getMessages();
        messageItems.forEach((item) => {
            const messageItem = item.getMessageItem();
            const dataId = messageItem.getElement().getAttribute('data-id');
            if (dataId && data.id === dataId) {
                messageItem.setMessageStatus(StatusMessage.Delivered);
            }
        });
    }

    public updateReadStatusMessage(data: ReadMessageType): void {
        const messageItems = this.rightPanel.getMessages();
        messageItems.forEach((item) => {
            const messageItem = item.getMessageItem();
            const dataId = messageItem.getElement().getAttribute('data-id');
            if (dataId && data.id === dataId) {
                messageItem.setMessageStatus(StatusMessage.Read);
            }
        });
    }

    public addUnreadMessageDivider(user: string): void {
        const divider = new Divider().getElement();
        const countUnreadMessage = this.leftPanel.getUserItem(user)?.getCounter() || 0;
        const messages = this.rightPanel
            .getMessages()
            .filter((msg) => msg.getElement().classList.contains('left'));
        const targetMessage = messages[messages.length - countUnreadMessage];
        const dividerOld = document.querySelector('.divider');
        if (targetMessage && !dividerOld) {
            this.rightPanel
                .getWrapperMessage()
                .getElement()
                .insertBefore(divider, targetMessage.getElement());
        }
    }

    public updateMessages(data: MessageTakeType[]): void {
        if (data.length > 0) {
            const message = data[0];
            const sender = message.from;
            const recipient = message.to;
            const { companionName } = this.rightPanel.getPanelTop();
            const currentUser = SessionStorageManager.getUserData();
            if (currentUser) {
                if (
                    (sender === currentUser.login &&
                        recipient === companionName.getCompanionNameText()) ||
                    (recipient === currentUser.login &&
                        sender === companionName.getCompanionNameText())
                ) {
                    this.rightPanel.updateMessageList(data[0]);
                    this.rightPanel.scrollMessagesToBottom();
                }
                this.leftPanel.increaseCounterInUserItem(data[0].from);
            }
            this.addUnreadMessageDivider(data[0].from);
            this.rightPanel.scrollMessagesToBottom();
        }
    }

    public initialMessages(data: MessageTakeType[], user: User): void {
        this.updatePlaceHolder(data);
        this.updateTopPanel(user);
        this.updateMessageContainer(data);
        this.addUnreadMessageDivider(user.login);
        const divider = document.querySelector<HTMLElement>('.divider');
        if (divider) {
            const item = divider.nextElementSibling as HTMLElement;
            const message = item.querySelector('.message__content');
            message?.scrollIntoView({ block: 'end', behavior: 'smooth' });
        }
    }

    private updatePlaceHolder(messages: MessageTakeType[]): void {
        const wrapperMessage = this.rightPanel.getWrapperMessage();
        if (messages.length < 1) {
            wrapperMessage.updateTextContentInPlaceholder();
        } else {
            wrapperMessage.placeHolderHidden();
        }
    }

    private updateTopPanel(user: User): void {
        this.rightPanel.updatePanelTop(user.login, user.isLogined);
    }

    private updateMessageContainer(messages: MessageTakeType[]): void {
        if (messages.length > 0) {
            this.rightPanel.initialMessages(messages);
        } else {
            this.rightPanel.clearMessageList();
            const wrapperMessage = this.rightPanel.getWrapperMessage();
            wrapperMessage.placeHolderShow();
        }
        this.rightPanel.switchOnInput(false);
    }

    private clearInput(): void {
        const form = this.rightPanel.getFormSend();
        form.clearInputValue();
    }

    private handleFormSubmit(event: Event): void {
        event.preventDefault();

        const form = this.rightPanel.getFormSend();
        const text = form.getInputValue();
        const { companionName } = this.rightPanel.getPanelTop();

        const messageService = this.chatService.getMessageReceiveService();
        messageService.sendRequestToReceiveMessages(
            companionName.getCompanionNameText() || '',
            text
        );

        this.clearInput();

        this.handleClickWrapperMsg();
    }

    private setEventListenerFormSubmit(): void {
        const form = this.rightPanel.getFormSend();
        form.getElement().addEventListener('submit', this.handleFormSubmit);
    }

    private handleClickWrapperMsg(): void {
        const wrapper = this.rightPanel.getWrapperMessage().getElement();
        const messages = wrapper.querySelectorAll<HTMLElement>('.message__item.left');
        const msgService = this.chatService.getMessageReceiveService();
        messages.forEach((msg) => {
            const idMessage = msg.getAttribute('data-id');
            msgService.sendRequestReadMessage(idMessage || '', this.updateReadStatusMessage);
        });

        const { companionName } = this.rightPanel.getPanelTop();
        const userName = companionName.getCompanionNameText();
        const currentItem = this.leftPanel.getUserItems().find((item) => {
            const dataName = item.getElement().getAttribute('data-name');
            return dataName === userName;
        });
        currentItem?.resetCounter();

        const divider = document.querySelector('.divider');
        if (divider) divider.remove();
    }

    private setEventListenerClickWrapperMsg(): void {
        const wrapperMsg = this.rightPanel.getWrapperMessage().getElement();
        wrapperMsg.addEventListener('click', () => {
            this.handleClickWrapperMsg();
        });
    }

    private setEventListenerScrollWrapperMsg(): void {
        const wrapperMsg = this.rightPanel.getWrapperMessage().getElement();
        wrapperMsg.addEventListener('scroll', () => {
            const { scrollHeight } = wrapperMsg;
            const { scrollTop } = wrapperMsg;
            const { clientHeight } = wrapperMsg;

            if (scrollHeight - scrollTop === clientHeight) {
                if (!this.ignoreHandleClickWrapperMsg) {
                    this.handleClickWrapperMsg();
                }
            }
            this.ignoreHandleClickWrapperMsg = false;
        });
    }
}
