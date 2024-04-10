import { View } from '../../../View';

import './School.scss';

export class School extends View {
    constructor() {
        super({ tag: 'a', classNames: ['footer__school'], textContent: 'RSSchool' });
        this.setupSchool();
    }

    private setupSchool(): void {
        (this.getElement() as HTMLLinkElement).href = 'https://rs.school/';
        (this.getElement() as HTMLLinkElement).target = '_blanc';
    }
}
