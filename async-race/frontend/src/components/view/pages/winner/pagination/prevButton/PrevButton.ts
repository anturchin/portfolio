import { WinnerController } from '../../../../../controller/winnerController/WinnerMainController';
import { View } from '../../../../View';
import { WinnerView } from '../../WinnerView';

import './PrevButton.scss';

export class PrevButton extends View {
    private controller: WinnerController;

    private winnerView: WinnerView;

    constructor(controller: WinnerController, winnerView: WinnerView) {
        super({ tag: 'button', classNames: ['prev-winner__btn'] });
        this.controller = controller;
        this.winnerView = winnerView;
        this.onClickPrev = this.onClickPrev.bind(this);
        this.setupButton();
        this.setupEventListener();
    }

    private setupEventListener(): void {
        this.getElement().addEventListener('click', this.onClickPrev);
    }

    private async onClickPrev(): Promise<void> {
        await this.controller.prevPage();
        this.winnerView.updateTitleAndTable();
    }

    private setupButton(): void {
        this.getElement().textContent = 'prev';
    }
}
