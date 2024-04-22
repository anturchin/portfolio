/* eslint-disable brace-style */
import { IObserverMessages } from '../../../observers/observerMessages/ObserverMessages.interface';
import { IObserverStatusMsg } from '../../../observers/observerStatusMsg/ObserverStatusMsg.interface';
import { ChatService } from '../../../services/chatService/ChatService';
import {
    FetchingMessageType,
    MessageTakeType,
} from '../../../services/chatService/messageReceiveService/types';
import { User } from '../../../services/chatService/types';
import { State } from '../../../state/State';
import { SessionStorageManager } from '../../../utils/sessionStorageManager/SessionStorageManager';
import { LeftPanel } from '../../../view/chat/leftPanel/LeftPanel';
import { RightPanel } from '../../../view/chat/rightPanel/RightPanel';
import { StatusMessage } from './types';

export class RightPanelController
    implements IObserverMessages<MessageTakeType[]>, IObserverStatusMsg<FetchingMessageType>
{
    private chatService: ChatService;

    private rightPanel: RightPanel;

    private leftPanel: LeftPanel;

    private state: State;

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
        this.state.registerMessageObserver(this.constructor.name, this);

        const messageReceiveService = this.chatService.getMessageReceiveService();
        messageReceiveService.registerStatusObserver(this.constructor.name, this);

        this.setEventListenerFormSubmit();
    }

    public updateStatus(data: FetchingMessageType): void {
        const messageItems = this.rightPanel.getMessages();
        messageItems.forEach((item) => {
            const messageItem = item.getMessageItem();
            const dataId = messageItem.getElement().getAttribute('data-id');
            if (dataId) {
                if (data.id === dataId) {
                    messageItem.setMessageStatus(StatusMessage.Delivered);
                }
            }
        });
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
                }
                this.leftPanel.increaseCounterInUserItem(data[0].from);
            }
        }
    }

    public initialMessages(data: MessageTakeType[], user: User): void {
        this.updatePlaceHolder(data);
        this.updateTopPanel(user);
        this.updateMessageContainer(data);
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
    }

    private setEventListenerFormSubmit(): void {
        const form = this.rightPanel.getFormSend();
        form.getElement().addEventListener('submit', this.handleFormSubmit);
    }
}
