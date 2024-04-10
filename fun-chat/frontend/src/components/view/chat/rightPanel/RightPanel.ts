import { View } from '../../View';

import './RightPanel.scss';

export class RightPanel extends View {
    constructor() {
        super({ tag: 'div', classNames: ['chat__right-panel'] });
    }
}
