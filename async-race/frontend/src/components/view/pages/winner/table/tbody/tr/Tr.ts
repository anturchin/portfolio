import { View } from '../../../../../View';

import './Tr.scss';

export class Tr extends View {
    constructor() {
        super({ tag: 'tr', classNames: ['tbody__tr'] });
    }
}
