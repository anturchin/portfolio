import { View } from '../../View';

import './LeftPanel.scss';

export class LeftPanel extends View {
    constructor() {
        super({ tag: 'div', classNames: ['chat__left-panel'] });
    }
}
