import { View } from '../../../../../View';

import './LevelSwitch.scss';

export class LevelSwitch extends View {
    public count: number;

    constructor(count: number) {
        super({
            tag: 'select',
            callback: null,
            classNames: ['level__select'],
        });
        this.count = count;
        this.setupLevelSwitch();
    }

    private setupLevelSwitch(): void {
        const options: HTMLOptionElement[] = [];
        for (let i = 0; i < this.count; i += 1) {
            const option = document.createElement('option');
            option.value = `${i + 1}`;
            option.textContent = `level-${i + 1}`;
            options.push(option);
        }
        this.viewHtmlElementCreator.getElement().append(...options);
    }
}
