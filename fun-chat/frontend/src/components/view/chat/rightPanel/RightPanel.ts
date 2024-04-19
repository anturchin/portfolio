import { View } from '../../View';
import { RightPanelTop } from './rightPanelTop/RightPanelTop';
import { WrapperMessage } from './wrapperMessage/WrapperMessage';
import { FormSend } from './formSend/FormSend';
import { MessageContainer } from './messageContainer/MessageContainer';
import { MessageTakeType } from '../../../services/chatService/messageReceiveService/types';
import { SessionStorageManager } from '../../../utils/sessionStorageManager/SessionStorageManager';

import './RightPanel.scss';

export class RightPanel extends View {
    private panelTop: RightPanelTop;

    private wrapperMessage: WrapperMessage;

    private messages: MessageContainer[] = [];

    private formSend: FormSend;

    constructor() {
        super({ tag: 'div', classNames: ['chat__right-panel'] });
        this.panelTop = new RightPanelTop();
        this.wrapperMessage = new WrapperMessage();
        this.formSend = new FormSend();
        this.render();
    }

    public getPanelTop(): RightPanelTop {
        return this.panelTop;
    }

    public getWrapperMessage(): WrapperMessage {
        return this.wrapperMessage;
    }

    public getFormSend(): FormSend {
        return this.formSend;
    }

    public getMessages(): MessageContainer[] {
        return this.messages;
    }

    public render(): void {
        this.renderPanelTop();
        this.renderWrapperMessage();
        this.renderFormSend();
    }

    public updateMessageList(message: MessageTakeType): void {
        const leftOrRight = this.determineMessageAlignment(message);
        const newMessage = new MessageContainer(leftOrRight, message);
        this.messages.push(newMessage);
        this.wrapperMessage.getElement().append(newMessage.getElement());
    }

    public updatePanelTop(userName: string, isActive: boolean): void {
        const { companionName, companionStatus } = this.panelTop;
        companionName.getElement().textContent = userName;
        const textStatus = isActive ? 'online' : 'offline';
        const style = 'companion__status';
        companionStatus.getElement().textContent = textStatus;
        companionStatus.getElement().classList.add(style);
        if (isActive) {
            companionStatus.getElement().classList.add('active');
        } else {
            companionStatus.getElement().classList.remove('active');
        }
    }

    public clearMessageList(): void {
        const parent = this.wrapperMessage.getElement();
        const items = parent.querySelectorAll('.message__container');
        items.forEach((item) => item.remove());
        this.messages = [];
    }

    public initialMessages(messages: MessageTakeType[]): void {
        const msgList: MessageContainer[] = [];
        this.clearMessageList();
        messages.forEach((message) => {
            const leftOrRight = this.determineMessageAlignment(message);
            msgList.push(new MessageContainer(leftOrRight, message));
        });
        this.messages.push(...msgList);
        this.wrapperMessage.getElement().append(...this.messages.map((msg) => msg.getElement()));
    }

    public switchOnInput(switchOn: boolean): void {
        this.formSend.enableInputs(switchOn);
    }

    private determineMessageAlignment(message: MessageTakeType): string {
        const userData = SessionStorageManager.getUserData();
        const leftOrRight = userData?.login === message.to ? 'left' : 'right';
        return leftOrRight;
    }

    private renderFormSend(): void {
        this.addInnerElement(this.formSend.getElement());
    }

    private renderWrapperMessage(): void {
        this.addInnerElement(this.wrapperMessage.getElement());
    }

    private renderPanelTop(): void {
        this.addInnerElement(this.panelTop.getElement());
    }
}
