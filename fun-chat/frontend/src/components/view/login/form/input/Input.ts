import { CustomInputType, callbackInputType } from './types';
import { View } from '../../../View';

import './Input.scss';

export class Input extends View {
    private validationFn: callbackInputType | null = null;

    private minimumLength: number;

    constructor(props: CustomInputType) {
        super({ tag: 'input', classNames: ['input'] });
        this.minimumLength = props.minimumLength;
        if (props.callback) {
            this.validationFn = props.callback;
        }
        this.setupInput(props);
        this.setupEventListener();
    }

    private setupInput(props: CustomInputType): void {
        const input = this.getElement();
        input.setAttribute('type', props.type);
        input.setAttribute('placeholder', props.label);
        if (props.required) {
            input.setAttribute('required', `${props.required}`);
        }
    }

    private setupEventListener(): void {
        const currentInput = this.getElement();
        currentInput.addEventListener('input', this.handleInput.bind(this));
    }

    private handleInput(event: Event): void {
        const inputValue = (event.target as HTMLInputElement).value;
        if (this.validationFn) {
            if (!this.validationFn(inputValue, this.minimumLength)) {
                this.getElement().classList.add('error');
            } else {
                this.getElement().classList.remove('error');
            }
        }
    }
}
