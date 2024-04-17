import { View } from '../../../../View';

import './InputSend.scss';

export class InputSend extends View {
    constructor() {
        super({ tag: 'textarea', classNames: ['textarea__send'] });
        this.setupInputSend();
    }

    private setupInputSend(): void {
        (this.getElement() as HTMLInputElement).placeholder = 'Your message';
        (this.getElement() as HTMLInputElement).disabled = true;
    }
}
