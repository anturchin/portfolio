import { View } from '../../../../../View';

import './Td.scss';

export class Td extends View {
    constructor(text?: string) {
        super({ tag: 'td', classNames: ['tbody__td'], textContent: `${text}` });
    }
}
