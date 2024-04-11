import { View } from '../../../../../../View';

import './DateTime.scss';

export class DateTime extends View {
    constructor(leftOrRight: string = 'right', dateTime: string = new Date().toISOString()) {
        super({ tag: 'p', classNames: ['date__time', leftOrRight], textContent: dateTime });
    }
}
