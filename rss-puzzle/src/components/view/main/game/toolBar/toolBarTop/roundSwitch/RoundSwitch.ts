import { View } from '../../../../../View';

import './RoundSwitch.scss';

export class RoundSwitch extends View {
    public count: number;

    constructor(count: number) {
        super({
            tag: 'select',
            callback: null,
            classNames: ['round__select'],
        });
        this.count = count;
        this.setupRoundSwitch();
    }

    private setupRoundSwitch(): void {
        const options: HTMLOptionElement[] = [];
        for (let i = 0; i < this.count; i += 1) {
            const option = document.createElement('option');
            option.value = `${i + 1}`;
            option.textContent = `round-${i + 1}`;
            options.push(option);
        }
        this.viewHtmlElementCreator.getElement().append(...options);
    }
}
