import { View } from '../../../View';

import './FormSend.scss';
import { BtnSend } from './btnSend/BtnSend';
import { InputSend } from './inputSend/InputSend';

export class FormSend extends View {
    constructor() {
        super({ tag: 'form', classNames: ['form__send'] });
        this.setupFormSend();
    }

    private setupFormSend(): void {
        const input = new InputSend().getElement();
        const btn = new BtnSend().getElement();
        this.getElement().append(...[input, btn]);
    }
}
