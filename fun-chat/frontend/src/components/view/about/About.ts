import { View } from '../View';
import { AboutAuthor } from './aboutAuthor/AboutAuthor';
import { AboutText } from './aboutText/AboutText';
import { AboutTitle } from './aboutTitle/AboutTitle';
import { BtnGoBack } from './btnGoBack/BtnGoBack';
import { Router } from '../../router/router/Router';

import './About.scss';

export class About extends View {
    constructor(router: Router) {
        super({ tag: 'section', classNames: ['about'] });
        this.setupAbout(router);
    }

    private setupAbout(router: Router): void {
        const title = new AboutTitle().getElement();
        const text = new AboutText().getElement();
        const author = new AboutAuthor().getElement();
        const btnGoBack = new BtnGoBack(router).getElement();

        this.getElement().append(...[title, text, author, btnGoBack]);
    }
}
