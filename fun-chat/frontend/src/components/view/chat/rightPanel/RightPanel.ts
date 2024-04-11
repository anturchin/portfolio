import { View } from '../../View';
import { RightPanelTop } from './rightPanelTop/RightPanelTop';
import { WrapperMessage } from './wrapperMessage/WrapperMessage';

import './RightPanel.scss';
import { FormSend } from './formSend/FormSend';

export class RightPanel extends View {
    constructor() {
        super({ tag: 'div', classNames: ['chat__right-panel'] });
        this.render();
    }

    public render(): void {
        this.renderPanelTop();
        this.renderWrapperMessage();
        this.renderFormSend();
    }

    private renderFormSend(): void {
        const formSend = new FormSend().getElement();
        this.addInnerElement(formSend);
    }

    private renderWrapperMessage(): void {
        const wrapperMessage = new WrapperMessage().getElement();
        this.addInnerElement(wrapperMessage);
    }

    private renderPanelTop(): void {
        const panelTop = new RightPanelTop().getElement();
        this.addInnerElement(panelTop);
    }
}
