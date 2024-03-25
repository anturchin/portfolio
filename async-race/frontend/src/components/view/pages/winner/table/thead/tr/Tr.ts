import { View } from '../../../../../View';

import './Tr.scss';

export class Tr extends View {
    constructor() {
        super({ tag: 'tr', classNames: ['thead__tr'] });
    }
}
