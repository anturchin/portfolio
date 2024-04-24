import { View } from '../../View';
import { Search } from './search/Search';
import { UserList } from './userList/UserList';
import { UserItem } from './userItem/UserItem';

import './LeftPanel.scss';

export class LeftPanel extends View {
    public searchInput: Search;

    public userList: UserList;

    constructor() {
        super({ tag: 'div', classNames: ['chat__left-panel'] });
        this.searchInput = new Search();
        this.userList = new UserList();
        this.setupLeftPanel();
    }

    public increaseCounterInUserItem(user: string): void {
        const items = this.getUserItems();
        const currentItem = items.find((item) => {
            const userName = item.getElement().getAttribute('data-name');
            return userName === user;
        });
        if (currentItem) {
            currentItem.increaseCounter();
        }
    }

    public getUserItem(user: string): UserItem | undefined {
        const items = this.userList.getUserItems();
        return items.find((item) => item.getElement().dataset.name === user);
    }

    public getUserList(): UserList {
        return this.userList;
    }

    public getUserItems(): UserItem[] {
        return this.userList.getUserItems();
    }

    public getSearchInput(): Search {
        return this.searchInput;
    }

    private setupLeftPanel(): void {
        this.getElement().append(...[this.searchInput.getElement(), this.userList.getElement()]);
    }
}
