import { View } from '../../View';
import { RightPanelTop } from './rightPanelTop/RightPanelTop';
import { WrapperMessage } from './wrapperMessage/WrapperMessage';
import { FormSend } from './formSend/FormSend';
import { MessageContainer } from './messageContainer/MessageContainer';

import './RightPanel.scss';

export class RightPanel extends View {
    public panelTop: RightPanelTop;

    public wrapperMessage: WrapperMessage;

    public messages: MessageContainer[] = [];

    public formSend: FormSend;

    constructor() {
        super({ tag: 'div', classNames: ['chat__right-panel'] });
        this.panelTop = new RightPanelTop();
        this.wrapperMessage = new WrapperMessage();
        this.formSend = new FormSend();
        this.render();
    }

    public render(): void {
        this.renderPanelTop();
        this.renderWrapperMessage();
        this.renderFormSend();
    }

    private renderFormSend(): void {
        this.addInnerElement(this.formSend.getElement());
    }

    private renderWrapperMessage(): void {
        this.messages.push(...this.generateMessages());
        this.wrapperMessage.getElement().append(...this.messages.map((msg) => msg.getElement()));
        this.addInnerElement(this.wrapperMessage.getElement());
    }

    private renderPanelTop(): void {
        this.addInnerElement(this.panelTop.getElement());
    }

    private generateMessages(): MessageContainer[] {
        const msgList: MessageContainer[] = [];
        for (let i = 0; i < 15; i += 1) {
            if (i % 2 === 0) {
                msgList.push(new MessageContainer('right'));
            }
            msgList.push(new MessageContainer('left'));
        }
        return msgList;
    }
}
