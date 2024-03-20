import { View } from '../../../../../../View';

import imagePath from '../../../../../../../../assets/images/image-hint.svg';

import './ButtonHintImage.scss';

export class ButtonHintImage extends View {
    constructor() {
        super({ tag: 'div', callback: null, classNames: ['hint__image'] });
        this.onHintClick = this.onHintClick.bind(this);
        this.setupButtonHintImage();
        this.setupEventListener();
    }

    private setupEventListener(): void {
        this.viewHtmlElementCreator.getElement().addEventListener('click', () => {
            this.onHintClick();
        });
    }

    private toggleClass(element: HTMLElement): void {
        if (element.classList.contains('game__cell-bg')) {
            element.classList.remove('game__cell-bg');
        } else {
            element.classList.add('game__cell-bg');
        }
    }

    private onHintClick(): void {
        const gameCell = document.querySelectorAll<HTMLElement>('.game__cell');
        if (gameCell) {
            gameCell.forEach((cell) => {
                this.toggleClass(cell);
            });
        }
    }

    private setupButtonHintImage(): void {
        const img = document.createElement('img');
        img.src = imagePath;
        img.classList.add('icon');
        this.viewHtmlElementCreator.addInnerElement(img);
    }
}
