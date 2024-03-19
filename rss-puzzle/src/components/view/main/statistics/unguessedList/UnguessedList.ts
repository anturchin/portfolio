import { View } from '../../../View';

import './UnguessedList.scss';

export class UnguessedList extends View {
    constructor() {
        super({ tag: 'ul', callback: null, classNames: ['statistics__list'] });
    }
}
