import { View } from '../../../View';

import './ItemList.scss';

export class ItemList extends View {
    constructor() {
        super({ tag: 'li', callback: null, classNames: ['list__item'] });
    }
}
