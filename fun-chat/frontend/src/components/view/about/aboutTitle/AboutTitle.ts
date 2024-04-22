import { View } from '../../View';

import './AboutTitle.scss';

export class AboutTitle extends View {
    constructor() {
        super({ tag: 'h1', classNames: ['about__title'], textContent: 'fun-chat' });
    }
}
