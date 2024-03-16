import { View } from '../../../../View';

import './ToolBarBottom.scss';

export class ToolBarBottom extends View {
    constructor() {
        super({ tag: 'div', callback: null, classNames: ['toolbar-bottom'] });
    }
}
