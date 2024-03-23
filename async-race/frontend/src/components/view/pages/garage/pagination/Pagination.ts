import { View } from '../../../View';
import { NextButton } from './nextButton/NextButton';
import { PrevButton } from './prevButton/PrevButton';

import './Pagination.scss';

export class Pagination extends View {
    public prevButton: PrevButton | null = null;

    public nextButton: NextButton | null = null;

    private prevCallback?: () => void;

    private nextCallback?: () => void;

    constructor(prevCallback?: () => void, nextCallback?: () => void) {
        super({ tag: 'section', classNames: ['pagination'] });
        this.prevCallback = prevCallback;
        this.nextCallback = nextCallback;
        this.setupPagination();
    }

    private setupPagination(): void {
        this.prevButton = new PrevButton();
        this.nextButton = new NextButton();
        this.getElement().append(
            ...[this.prevButton.getElement(), this.nextButton.getElement()]
        );
    }
}
