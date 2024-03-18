import { View } from '../../../../../../View';

import imagePath from '../../../../../../../../assets/images/text-hint.svg';

import './ButtonHintText.scss';

export class ButtonHintText extends View {
    constructor() {
        super({ tag: 'div', callback: null, classNames: ['hint__text'] });
        this.onHintClick = this.onHintClick.bind(this);
        this.setupEventListener();
        this.setupButtonHintText();
    }

    private setupEventListener(): void {
        this.viewHtmlElementCreator.getElement().addEventListener('click', this.onHintClick);
    }

    private toggleClass(element: HTMLElement): void {
        if (element.classList.contains('show__text')) {
            element.classList.remove('show__text');
            element.classList.add('hide__text');
        } else {
            element.classList.add('show__text');
            element.classList.remove('hide__text');
        }
    }

    private onHintClick(): void {
        const hintText = document.querySelector<HTMLElement>('.game-hint__text');
        if (hintText) {
            this.toggleClass(hintText);
        }
    }

    private setupButtonHintText(): void {
        const img = document.createElement('img');
        img.src = imagePath;
        img.classList.add('icon');
        this.viewHtmlElementCreator.addInnerElement(img);
    }
}
