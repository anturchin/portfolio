import { View } from '../../../../../View';

import './Th.scss';

export class Th extends View {
    constructor(name: string) {
        super({ tag: 'th', classNames: ['thead__th'], textContent: `${name}` });
    }
}
