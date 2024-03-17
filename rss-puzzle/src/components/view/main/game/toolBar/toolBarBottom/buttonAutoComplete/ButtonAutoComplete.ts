import { View } from '../../../../../View';

import './ButtonAutoComplete.scss';

export class ButtonAutoComplete extends View {
    public onHandleClickAutoComplete?: () => void;

    constructor(onHandleClickAutoComplete: () => void) {
        super({
            tag: 'button',
            callback: null,
            classNames: ['toolbar-bottom__btn-auto', 'button-animation'],
            textContent: "I don't know",
        });
        this.onHandleClickAutoComplete = onHandleClickAutoComplete;
        this.setupButtonContinue();
        this.setupEventListener();
    }

    private setupEventListener(): void {
        this.viewHtmlElementCreator.getElement().addEventListener('click', () => {
            this.onHandleClickAutoComplete?.();
        });
    }

    private setupButtonContinue(): void {}
}
