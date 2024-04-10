import { View } from '../../View';

import './ChatWrapper.scss';

export class ChatWrapper extends View {
    constructor() {
        super({ tag: 'div', classNames: ['chat__wrapper'] });
    }
}
