import { View } from '../../../View';
import { LevelAndRoundBlock } from './toolBarTop/LevelAndRoundBlock';
import { HintBlock } from './toolBarTop/hintSwitch/HintBlock';

import './ToolBarTopMain.scss';

export class ToolBarTopMain extends View {
    public levelAndRoundBlock: LevelAndRoundBlock | null;

    constructor(countLevel: number, countRound: number, savedLevel: number, savedRound: number) {
        super({ tag: 'div', callback: null, classNames: ['tool-bar__top'] });
        this.levelAndRoundBlock = null;
        this.setupTollBarTopMain(countLevel, countRound, savedLevel, savedRound);
    }

    private setupTollBarTopMain(
        countLevel: number,
        countRound: number,
        savedLevel: number,
        savedRound: number
    ): void {
        this.levelAndRoundBlock = new LevelAndRoundBlock(
            countLevel,
            countRound,
            savedLevel,
            savedRound
        );
        const hintBlock = new HintBlock().getElement();
        this.viewHtmlElementCreator
            .getElement()
            .append(...[this.levelAndRoundBlock.getElement(), hintBlock]);
    }
}
