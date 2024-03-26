import { WinnerController } from '../../../../../controller/winnerController/WinnerMainController';
import { View } from '../../../../View';
import { WinnerView } from '../../WinnerView';

import './NextButton.scss';

export class NextButton extends View {
    private controller: WinnerController;

    private winnerView: WinnerView;

    constructor(controller: WinnerController, winnerView: WinnerView) {
        super({ tag: 'button', classNames: ['next-winner__btn'] });
        this.controller = controller;
        this.winnerView = winnerView;
        this.onClickNext = this.onClickNext.bind(this);
        this.setupButton();
        this.setupEventListener();
    }

    private setupEventListener(): void {
        this.getElement().addEventListener('click', this.onClickNext);
    }

    private async onClickNext(): Promise<void> {
        await this.controller.nextPage();
        this.winnerView.updateTitleAndTable();
    }

    private setupButton(): void {
        this.getElement().textContent = 'next';
    }
}
