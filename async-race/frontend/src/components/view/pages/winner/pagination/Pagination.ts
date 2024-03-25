import { View } from '../../../View';
import { NextButton } from './nextButton/NextButton';
import { PrevButton } from './prevButton/PrevButton';

import './Pagination.scss';

export class Pagination extends View {
    constructor() {
        super({ tag: 'section', classNames: ['pagination-winner'] });
        this.setupPagination();
    }

    private setupPagination(): void {
        const prevButton = new PrevButton();
        const nextButton = new NextButton();
        this.getElement().append(
            ...[prevButton.getElement(), nextButton.getElement()]
        );
    }
}
