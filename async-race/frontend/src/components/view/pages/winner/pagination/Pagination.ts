import { View } from '../../../View';
import { NextButton } from './nextButton/NextButton';
import { PrevButton } from './prevButton/PrevButton';
import { WinnerController } from '../../../../controller/winnerController/WinnerMainController';
import { WinnerView } from '../WinnerView';

import './Pagination.scss';

export class Pagination extends View {
    constructor(controller: WinnerController, winnerView: WinnerView) {
        super({ tag: 'section', classNames: ['pagination-winner'] });
        this.setupPagination(controller, winnerView);
    }

    private setupPagination(
        controller: WinnerController,
        winnerView: WinnerView
    ): void {
        const prevButton = new PrevButton(controller, winnerView);
        const nextButton = new NextButton(controller, winnerView);
        this.getElement().append(
            ...[prevButton.getElement(), nextButton.getElement()]
        );
    }
}
