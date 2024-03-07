import { View } from '../../../View';
import { Input } from './input/Input';
import { Button } from './button/Button';

import './Form.scss';

export class Form extends View {
    constructor() {
        super({ tag: 'form', classNames: ['login__form'], callback: null });
        this.setupFormContent();
    }

    setupFormContent(): void {
        const inputName = new Input({ type: 'text', label: 'Name', required: true }).getElement();
        const inputSurname = new Input({
            type: 'text',
            label: 'Surname',
            required: true,
        }).getElement();
        const button = new Button({ label: 'Login' }).getElement();
        [inputName, inputSurname, button].forEach((elem) => {
            this.viewHtmlElementCreator.addInnerElement(elem);
        });
    }

    render(): void {
        throw new Error('Method not implemented.');
    }

    destroy(): void {
        throw new Error('Method not implemented.');
    }
}
