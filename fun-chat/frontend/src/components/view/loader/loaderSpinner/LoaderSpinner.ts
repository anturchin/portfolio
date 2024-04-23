import { View } from '../../View';

import './LoaderSpinner.scss';

export class LoaderSpinner extends View {
    constructor() {
        super({ tag: 'div', classNames: ['loader__spinner'] });
    }
}
