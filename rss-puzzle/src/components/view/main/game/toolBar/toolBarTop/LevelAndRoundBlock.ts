import { View } from '../../../../View';
import { LevelSwitch } from './levelSwitch/LevelSwitch';
import { RoundSwitch } from './roundSwitch/RoundSwitch';

import './LevelAndRoundBlock.scss';

export class LevelAndRoundBlock extends View {
    constructor(countLevel: number, countRound: number) {
        super({ tag: 'div', callback: null, classNames: ['level-and-round'] });
        this.setupLevelAndRoundBlock(countLevel, countRound);
    }

    private setupLevelAndRoundBlock(countLevel: number, countRound: number): void {
        const level = new LevelSwitch(countLevel).getElement();
        const round = new RoundSwitch(countRound).getElement();
        this.viewHtmlElementCreator.getElement().append(...[level, round]);
    }
}
