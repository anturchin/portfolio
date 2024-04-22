import { View } from '../../../View';

import './LinkInfo.scss';

export class LinkInfo extends View {
    constructor() {
        super({ tag: 'a', classNames: ['link__info'], textContent: 'About...' });
    }
}
