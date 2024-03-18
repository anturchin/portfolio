import { View } from '../../../../../View';

import './RoundSwitch.scss';

export class RoundSwitch extends View {
    public count: number;

    public savedRound: number;

    constructor(count: number, savedRound: number) {
        super({
            tag: 'select',
            callback: null,
            classNames: ['round__select'],
        });
        this.count = count;
        this.savedRound = savedRound;
        this.setupRoundSwitch();
    }

    public getCurrentRound(): number {
        return this.savedRound;
    }

    public setCurrentRound(round: number): void {
        this.savedRound = round;
    }

    public setRoundChangeHandler(callback: (level: number) => void): void {
        this.viewHtmlElementCreator.getElement().addEventListener('change', (event: Event) => {
            const selectedRound = (event.target as HTMLSelectElement).value;
            this.savedRound = parseInt(selectedRound, 10);
            callback(parseInt(selectedRound, 10));
        });
    }

    private setupRoundSwitch(): void {
        const options: HTMLOptionElement[] = [];
        for (let i = 0; i < this.count; i += 1) {
            const option = document.createElement('option');
            option.value = `${i}`;
            option.textContent = `round-${i + 1}`;
            if (i === this.savedRound) {
                option.selected = true;
            }
            options.push(option);
        }
        this.viewHtmlElementCreator.getElement().append(...options);
    }
}
