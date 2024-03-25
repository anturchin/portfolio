import { View } from '../../../../View';

import './Tbody.scss';

export class Tbody extends View {
    constructor() {
        super({ tag: 'tbody', classNames: ['table__tbody'] });
    }
}
