import { View } from '../../../View';
import { LevelAndRoundBlock } from './toolBarTop/LevelAndRoundBlock';
import { HintBlock } from './toolBarTop/hintSwitch/HintBlock';

import './ToolBarTopMain.scss';

export class ToolBarTopMain extends View {
    constructor(countLevel: number, countRound: number) {
        super({ tag: 'div', callback: null, classNames: ['tool-bar__top'] });
        this.setupTollBarTopMain(countLevel, countRound);
    }

    private setupTollBarTopMain(countLevel: number, countRound: number): void {
        const levelAndRoundBlock = new LevelAndRoundBlock(countLevel, countRound).getElement();
        const hintBlock = new HintBlock().getElement();
        this.viewHtmlElementCreator.getElement().append(...[levelAndRoundBlock, hintBlock]);
    }
}
