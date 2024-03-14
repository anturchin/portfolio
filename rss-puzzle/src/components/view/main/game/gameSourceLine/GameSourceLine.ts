import { View } from '../../../View';

import './GameSourceLine.scss';

export class GameSourceLine extends View {
    constructor() {
        super({ tag: 'ul', callback: null, classNames: ['source__row'] });
    }
}
