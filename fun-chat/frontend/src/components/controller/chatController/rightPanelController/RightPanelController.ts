import { IObserverMessages } from '../../../observers/observerMessages/ObserverMessages.interface';
import { ChatService } from '../../../services/chatService/ChatService';
import { MessageTakeType } from '../../../services/chatService/messageReceiveService/types';
import { User } from '../../../services/chatService/types';
import { State } from '../../../state/State';
import { RightPanel } from '../../../view/chat/rightPanel/RightPanel';

export class RightPanelController implements IObserverMessages<MessageTakeType[]> {
    private chatService: ChatService;

    private rightPanel: RightPanel;

    private state: State;

    constructor(chatService: ChatService, rightPanel: RightPanel, state: State) {
        this.chatService = chatService;
        this.rightPanel = rightPanel;
        this.state = state;
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.state.registerMessageObserver(this.constructor.name, this);

        this.setEventListenerFormSubmit();
    }

    public updateMessages(data: MessageTakeType[]): void {
        console.log(data);
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
