import { View } from '../../../View';

import './Year.scss';

export class Year extends View {
    constructor() {
        super({ tag: 'div', classNames: ['footer__year'], textContent: '2024' });
    }
}
