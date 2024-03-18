import { View } from '../../../../../../View';

import imagePath from '../../../../../../../../assets/images/image-hint.svg';

import './ButtonHintImage.scss';

export class ButtonHintImage extends View {
    constructor() {
        super({ tag: 'div', callback: null, classNames: ['hint__image'] });
        this.setupButtonHintImage();
    }

    private setupEventListener(): void {
        this.viewHtmlElementCreator.getElement().addEventListener('click', this.onHintClick);
    }

    // private toggleClass(element: HTMLElement): void {
    //     if (element.classList.contains('show__button')) {
    //         element.classList.remove('show__button');
    //         element.classList.add('hide__button');
    //     } else {
    //         element.classList.add('show__button');
    //         element.classList.remove('hide__button');
    //     }
    // }

    private onHintClick(): void {
        // const hintSound = document.querySelector<HTMLElement>('.game-hint__button');
        // if (hintSound) {
        //     this.toggleClass(hintSound);
        // }
    }

    private setupButtonHintImage(): void {
        const img = document.createElement('img');
        img.src = imagePath;
        img.classList.add('icon');
        this.viewHtmlElementCreator.addInnerElement(img);
    }
}
