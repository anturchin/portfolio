import { View } from '../../View';

import './LeftPanel.scss';
import { Search } from './search/Search';

export class LeftPanel extends View {
    constructor() {
        super({ tag: 'div', classNames: ['chat__left-panel'] });
        this.setupLeftPanel();
    }

    private setupLeftPanel(): void {
        const search = new Search().getElement();
        this.addInnerElement(search);
    }
}
