import { View } from '../../../../../View';

import './ButtonCheck.scss';

export class ButtonCheck extends View {
    public onHandleClickCheck?: () => void;

    constructor(onHandleClickCheck: () => void) {
        super({
            tag: 'button',
            callback: null,
            classNames: ['toolbar-bottom__btn-check'],
            textContent: 'Check',
        });
        this.onHandleClickCheck = onHandleClickCheck;
        this.setupButtonContinue();
        this.setupEventListener();
    }

    private setupEventListener(): void {
        this.viewHtmlElementCreator.getElement().addEventListener('click', () => {
            this.onHandleClickCheck?.();
        });
    }

    private setupButtonContinue(): void {
        const btn = this.viewHtmlElementCreator.getElement() as HTMLButtonElement;
        btn.disabled = true;
    }
}
