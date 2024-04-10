import { View } from '../../View';

import './Footer.scss';
import { Author } from './author/Author';
import { School } from './school/School';
import { Year } from './year/Year';

export class Footer extends View {
    constructor() {
        super({ tag: 'div', classNames: ['chat__footer'] });
        this.setupFooter();
    }

    private setupFooter(): void {
        const author = new Author().getElement();
        const school = new School().getElement();
        const year = new Year().getElement();
        this.getElement().append(...[school, author, year]);
    }
}
