import { View } from '../../../View';

import './GameSource.scss';

export class GameSource extends View {
    constructor() {
        super({ tag: 'div', callback: null, classNames: ['game__source'] });
    }
}
