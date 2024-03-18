import { View } from '../../../../View';
import { LevelSwitch } from './levelSwitch/LevelSwitch';
import { RoundSwitch } from './roundSwitch/RoundSwitch';

import './LevelAndRoundBlock.scss';

export class LevelAndRoundBlock extends View {
    public level: LevelSwitch | null;

    public round: RoundSwitch | null;

    constructor(countLevel: number, countRound: number, savedLevel: number, savedRound: number) {
        super({ tag: 'div', callback: null, classNames: ['level-and-round'] });
        this.level = null;
        this.round = null;
        this.setupLevelAndRoundBlock(countLevel, countRound, savedLevel, savedRound);
    }

    private setupLevelAndRoundBlock(
        countLevel: number,
        countRound: number,
        savedLevel: number,
        savedRound: number
    ): void {
        this.level = new LevelSwitch(countLevel, savedLevel);
        this.round = new RoundSwitch(countRound, savedRound);
        this.viewHtmlElementCreator
            .getElement()
            .append(...[this.level.getElement(), this.round.getElement()]);
    }
}
