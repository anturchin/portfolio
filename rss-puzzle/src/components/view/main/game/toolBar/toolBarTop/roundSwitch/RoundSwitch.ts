import { Subject } from '../../../../../../utils/observer/Subject';
import { IObserver } from '../../../../../../utils/observer/types';
import { LocalStorageManager } from '../../../../../../utils/localStorageManager/LocalStorageManager';
import { View } from '../../../../../View';

import './RoundSwitch.scss';

export class RoundSwitch extends View implements IObserver {
    public count: number;

    public savedRound: number;

    private subject: Subject;

    constructor(count: number, savedRound: number, subject: Subject) {
        super({
            tag: 'select',
            callback: null,
            classNames: ['round__select'],
        });
        this.count = count;

        const gameIndexes = LocalStorageManager.getGameIndexes();
        if (gameIndexes !== null) {
            const { currentRoundIndex } = gameIndexes;
            this.savedRound = currentRoundIndex;
        } else {
            this.savedRound = savedRound;
        }

        this.subject = subject;
        this.setupRoundSwitch();
    }

    public update(roundIndex: number): void {
        this.savedRound = roundIndex;
        const select = this.viewHtmlElementCreator.getElement();
        [...select.children].forEach((option) => {
            const currentValue = parseInt(option.getAttribute('value') || '', 10);
            if (currentValue === this.savedRound) {
                option.setAttribute('selected', 'true');
            }
        });
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
        this.subject.addObserver(this);
    }
}
