import { User } from '../../../../services/chatService/types';
import { View } from '../../../View';
import { UserItem } from '../userItem/UserItem';

import './UserList.scss';

export class UserList extends View {
    public userItems: UserItem[] = [];

    constructor() {
        super({ tag: 'ul', classNames: ['user__list'] });
    }

    public setUserItems(users: User[]): void {
        this.userItems = users.map((user) => new UserItem(user.login, user.isLogined));
        this.userItems.forEach((item) => this.addInnerElement(item.getElement()));
    }
}
