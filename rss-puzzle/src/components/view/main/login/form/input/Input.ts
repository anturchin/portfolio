import { InputType } from './types';
import { View } from '../../../../View';

import './Input.scss';

export class Input extends View {
    constructor(props: InputType) {
        super({ tag: 'input', classNames: ['login__form-field'], callback: null });
        this.setupInput(props);
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
}
