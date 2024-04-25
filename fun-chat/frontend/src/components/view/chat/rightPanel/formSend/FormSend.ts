import { View } from '../../../View';
import { BtnSend } from './btnSend/BtnSend';
import { InputSend } from './inputSend/InputSend';

import './FormSend.scss';

export class FormSend extends View {
    private inputSend: InputSend;

    private btn: BtnSend;

    constructor() {
        super({ tag: 'form', classNames: ['form__send'] });
        this.inputSend = new InputSend();
        this.btn = new BtnSend();
        this.handleInputChange = this.handleInputChange.bind(this);
        this.setupFormSend();
        this.setEventListenerInputChange();
    }

    public clearInputValue(): void {
        (this.inputSend.getElement() as HTMLInputElement).value = '';
        this.enableBtn(true);
    }

    public getInputValue(): string {
        return (this.inputSend.getElement() as HTMLInputElement).value;
    }

    public setInputValue(text: string) {
        (this.inputSend.getElement() as HTMLInputElement).value = text;
    }

    public enableInputs(switchOn: boolean): void {
        const input = this.inputSend.getElement() as HTMLInputElement;
        input.disabled = switchOn;
    }

    public enableBtn(switchOn: boolean): void {
        const btn = this.btn.getElement() as HTMLButtonElement;
        btn.disabled = switchOn;
    }

    private setEventListenerInputChange(): void {
        this.inputSend.getElement().addEventListener('input', this.handleInputChange);
    }

    private handleInputChange(event: Event): void {
        const { value } = event.target as HTMLInputElement;
        const isText = value.length > 0;
        if (isText) {
            this.enableBtn(false);
        } else {
            this.enableBtn(true);
        }
    }

    private setupFormSend(): void {
        this.getElement().append(...[this.inputSend.getElement(), this.btn.getElement()]);
    }
}
