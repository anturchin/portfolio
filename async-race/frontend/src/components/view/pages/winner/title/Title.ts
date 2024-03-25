import { WinnerController } from '../../../../controller/winnerController/WinnerMainController';
import { View } from '../../../View';

import './Title.scss';

export class Title extends View {
    constructor(controller: WinnerController) {
        super({ tag: 'h1', classNames: ['winner__title'] });
        this.setupTitle(controller);
    }

    private setupTitle(controller: WinnerController): void {
        this.getElement().textContent = 'winners ';
        const { totalWinnersCount } = controller.getPageAndTotalCount();
        const count = document.createElement('span');
        count.classList.add('title__count');
        count.textContent = `(${totalWinnersCount})`;
        this.addInnerElement(count);
    }
}
