import { View } from '../../../../../View';

import './ButtonResults.scss';

export class ButtonResults extends View {
    public onHandleClickResults?: () => void;

    constructor(onHandleClickResults: () => void) {
        super({
            tag: 'button',
            callback: null,
            classNames: ['result__btn', 'button-animation'],
            textContent: 'Results',
        });
        this.onHandleClickResults = onHandleClickResults;
        this.setupButtonResults();
        this.setupEventListener();
    }

    private setupEventListener(): void {
        this.viewHtmlElementCreator.getElement().addEventListener('click', () => {
            this.onHandleClickResults?.();
        });
    }

    private setupButtonResults(): void {
        const btn = this.viewHtmlElementCreator.getElement() as HTMLButtonElement;
        btn.classList.add('hide');
    }
}
