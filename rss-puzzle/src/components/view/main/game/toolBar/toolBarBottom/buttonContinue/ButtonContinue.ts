import { View } from '../../../../../View';

import './ButtonContinue.scss';

export class ButtonContinue extends View {
    public onHandleClickContinue?: () => void;

    constructor(onHandleClickContinue: () => void) {
        super({
            tag: 'button',
            callback: null,
            classNames: ['toolbar-bottom__btn'],
            textContent: 'Continue',
        });
        this.onHandleClickContinue = onHandleClickContinue;
        this.setupButtonContinue();
        this.setupEventListener();
    }

    private setupEventListener(): void {
        this.viewHtmlElementCreator.getElement().addEventListener('click', () => {
            this.onHandleClickContinue?.();
        });
    }

    private setupButtonContinue(): void {
        const btn = this.viewHtmlElementCreator.getElement() as HTMLButtonElement;
        btn.disabled = true;
        btn.draggable = false;
    }
}
