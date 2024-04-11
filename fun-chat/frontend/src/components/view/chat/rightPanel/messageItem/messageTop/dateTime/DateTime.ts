import { View } from '../../../../../View';

import './DateTime.scss';

export class DateTime extends View {
    constructor() {
        super({ tag: 'p', classNames: ['date__time'] });
    }
}
