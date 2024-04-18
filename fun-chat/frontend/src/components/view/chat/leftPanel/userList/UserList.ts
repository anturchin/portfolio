import { User } from '../../../../services/chatService/types';
import { View } from '../../../View';
import { UserItem } from '../userItem/UserItem';

import './UserList.scss';

export class UserList extends View {
    private userItems: UserItem[] = [];

    constructor() {
        super({ tag: 'ul', classNames: ['user__list'] });
    }

    public moveToBottomInactiveUserItem(): void {
        this.userItems.forEach((item) => this.moveToBottomIfInactive(item.getElement()));
    }

    public updateUserList(user: User): void {
        const existingUserItem = this.findUserItem(user);
        if (existingUserItem) {
            existingUserItem.updateStatus(user.isLogined);
            return;
        }
        const newUserItem = new UserItem(user.login, user.isLogined);
        this.userItems.push(newUserItem);
        this.addNewItemToUserList(newUserItem.getElement());
    }

    public initialUserList(users: User[]): void {
        this.userItems = [];
        const parent = this.getElement();
        while (parent.firstChild) {
            parent.removeChild(parent.firstChild);
        }
        this.setUserItems(users);
    }

    public getUserItems(): UserItem[] {
        return this.userItems;
    }

    private setUserItems(users: User[]): void {
        this.userItems = users.map((user) => new UserItem(user.login, user.isLogined));
        this.userItems.forEach((item) => this.addInnerElement(item.getElement()));
    }

    private findUserItem(user: User): UserItem | undefined {
        const userItem = this.userItems.find((item) => {
            const dataName = item.getElement().getAttribute('data-name');
            return dataName === user.login;
        });
        return userItem;
    }

    private moveToBottomIfInactive(element: HTMLElement): void {
        const list = this.getElement();
        const isActive = element.classList.contains('active');
        if (!isActive) {
            list.removeChild(element);
            list.insertAdjacentElement('beforeend', element);
        }
    }

    private addNewItemToUserList(element: HTMLElement): void {
        const list = this.getElement();
        const activeItems = list.querySelectorAll('.active');
        const lastActiveItem = activeItems[activeItems.length - 1];
        if (lastActiveItem) {
            lastActiveItem.insertAdjacentElement('afterend', element);
        } else {
            list.insertAdjacentElement('beforeend', element);
        }
    }
}
