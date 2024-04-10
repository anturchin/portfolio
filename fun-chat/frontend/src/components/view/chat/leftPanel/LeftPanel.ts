import { View } from '../../View';
import { Search } from './search/Search';
import { UserList } from './userList/UserList';

import './LeftPanel.scss';

export class LeftPanel extends View {
    constructor() {
        super({ tag: 'div', classNames: ['chat__left-panel'] });
        this.setupLeftPanel();
    }

    private setupLeftPanel(): void {
        const search = new Search().getElement();
        const userList = new UserList().getElement();
        this.getElement().append(...[search, userList]);
    }
}
