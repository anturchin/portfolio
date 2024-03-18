import { View } from '../../../../../../View';

import imagePath from '../../../../../../../../assets/images/audio-hint.svg';

import './ButtonHintSound.scss';

export class ButtonHintSound extends View {
    constructor() {
        super({ tag: 'div', callback: null, classNames: ['hint__sound'] });
        this.onHintClick = this.onHintClick.bind(this);
        this.setupEventListener();
        this.setupButtonHintSound();
    }

    private setupEventListener(): void {
        this.viewHtmlElementCreator.getElement().addEventListener('click', this.onHintClick);
    }

    private toggleClass(element: HTMLElement): void {
        if (element.classList.contains('show__button')) {
            element.classList.remove('show__button', 'fade-out');
            element.classList.add('hide__button');
        } else {
            element.classList.add('show__button', 'fade-out');
            element.classList.remove('hide__button');
        }
    }

    private onHintClick(): void {
        const hintSound = document.querySelector<HTMLElement>('.game-hint__button');
        if (hintSound) {
            this.toggleClass(hintSound);
        }
    }

    private setupButtonHintSound(): void {
        const img = document.createElement('img');
        img.src = imagePath;
        img.classList.add('icon');
        this.viewHtmlElementCreator.addInnerElement(img);
    }
}
