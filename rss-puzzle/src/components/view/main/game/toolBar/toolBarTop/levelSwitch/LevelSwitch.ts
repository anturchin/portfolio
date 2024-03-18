import { View } from '../../../../../View';

import './LevelSwitch.scss';

export class LevelSwitch extends View {
    public count: number;

    public levelValue: number;

    constructor(count: number, savedLevel: number) {
        super({
            tag: 'select',
            callback: null,
            classNames: ['level__select'],
        });
        this.levelValue = savedLevel;
        this.count = count;
        this.setupLevelSwitch();
    }

    public getCurrentLevel(): number {
        return this.levelValue;
    }

    public setLevelChangeHandler(callback: (level: number) => void): void {
        this.viewHtmlElementCreator.getElement().addEventListener('change', (event: Event) => {
            const selectedLevel = (event.target as HTMLSelectElement).value;
            this.levelValue = parseInt(selectedLevel, 10);
            callback(parseInt(selectedLevel, 10));
        });
    }

    private setupLevelSwitch(): void {
        const options: HTMLOptionElement[] = [];
        for (let i = 0; i < this.count; i += 1) {
            const option = document.createElement('option');
            option.value = `${i + 1}`;
            option.textContent = `level-${i + 1}`;
            if (i + 1 === this.levelValue) {
                option.selected = true;
            }
            options.push(option);
        }
        this.viewHtmlElementCreator.getElement().append(...options);
    }
}
