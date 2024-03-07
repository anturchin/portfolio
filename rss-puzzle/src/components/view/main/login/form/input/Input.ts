import { InputType, callbackInputType } from './types';
import { View } from '../../../../View';

import './Input.scss';

export class Input extends View {
    private validationFn: callbackInputType | null;

    private minimumLength: number;

    constructor(props: InputType) {
        super({ tag: 'input', classNames: ['login__form-field'], callback: null });
        this.minimumLength = props.minimumLength;
        this.validationFn = null;
        if (props.callback) {
            this.validationFn = props.callback;
        }
        this.setupInput(props);
        this.setupEventListener();
    }

    setupInput(props: InputType): void {
        const input = this.viewHtmlElementCreator.getElement();
        input.setAttribute('type', props.type);
        input.setAttribute('placeholder', props.label);
        if (props.required) {
            input.setAttribute('required', `${props.required}`);
        }
    }

    render(): void {
        throw new Error('Method not implemented.');
    }

    destroy(): void {
        throw new Error('Method not implemented.');
    }

    private setupEventListener(): void {
        const currentInput = this.viewHtmlElementCreator.getElement();
        currentInput.addEventListener('input', this.handleInput.bind(this));
    }

    private handleInput(event: Event): void {
        const inputValue = (event.target as HTMLInputElement).value;
        if (this.validationFn) {
            if (!this.validationFn(inputValue, this.minimumLength)) {
                this.viewHtmlElementCreator.getElement().classList.add('error');
            } else {
                this.viewHtmlElementCreator.getElement().classList.remove('error');
            }
        }
    }
}
