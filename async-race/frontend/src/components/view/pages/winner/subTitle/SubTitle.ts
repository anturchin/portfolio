import { WinnerController } from '../../../../controller/winnerController/WinnerMainController';
import { View } from '../../../View';

import './SubTitle.scss';

export class SubTitle extends View {
    constructor(controller: WinnerController) {
        super({ tag: 'h2', classNames: ['winner__subtitle'] });
        this.setupSubTitle(controller);
    }

    private setupSubTitle(controller: WinnerController): void {
        this.getElement().textContent = 'page ';
        const { page } = controller.getPageAndTotalCount();
        const count = document.createElement('span');
        count.classList.add('subtitle__count');
        count.textContent = `# ${page}`;
        this.addInnerElement(count);
    }
}
