import { View } from '../../../View';

import './GuessedList.scss';

export class GuessedList extends View {
    constructor() {
        super({ tag: 'ul', callback: null, classNames: ['statistics__list'] });
    }
}
