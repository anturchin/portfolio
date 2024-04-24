import { View } from '../../../View';

import logo from '../../../../../assets/image/rsschool.svg';

import './School.scss';

export class School extends View {
    constructor() {
        super({ tag: 'a', classNames: ['footer__school'] });
        this.setupSchool();
    }

    private setupSchool(): void {
        (this.getElement() as HTMLLinkElement).href = 'https://rs.school/';
        (this.getElement() as HTMLLinkElement).target = '_blanc';
        const img = document.createElement('img');
        img.src = logo;
        this.addInnerElement(img);
    }
}
