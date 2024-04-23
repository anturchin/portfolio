import { View } from '../../../../View';

import './Divider.scss';

export class Divider extends View {
    constructor() {
        super({ tag: 'div', classNames: ['divider'], textContent: 'New message' });
    }
}
