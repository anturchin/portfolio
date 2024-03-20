import { View } from '../../../View';
import { LevelAndRoundBlock } from './toolBarTop/LevelAndRoundBlock';
import { HintBlock } from './toolBarTop/hintSwitch/HintBlock';
import { Subject } from '../../../../observer/Subject';

import './ToolBarTopMain.scss';

export class ToolBarTopMain extends View {
    public levelAndRoundBlock: LevelAndRoundBlock | null;

    constructor(
        countLevel: number,
        countRound: number,
        savedLevel: number,
        savedRound: number,
        subject: Subject
    ) {
        super({ tag: 'div', callback: null, classNames: ['tool-bar__top'] });
        this.levelAndRoundBlock = null;
        this.setupTollBarTopMain(countLevel, countRound, savedLevel, savedRound, subject);
    }

    private setupTollBarTopMain(
        countLevel: number,
        countRound: number,
        savedLevel: number,
        savedRound: number,
        subject: Subject
    ): void {
        this.levelAndRoundBlock = new LevelAndRoundBlock(
            countLevel,
            countRound,
            savedLevel,
            savedRound,
            subject
        );
        const hintBlock = new HintBlock().getElement();
        this.viewHtmlElementCreator
            .getElement()
            .append(...[this.levelAndRoundBlock.getElement(), hintBlock]);
    }
}
