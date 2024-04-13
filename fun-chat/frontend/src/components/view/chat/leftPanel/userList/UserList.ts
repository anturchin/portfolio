import { View } from '../../../View';
import { UserItem } from '../userItem/UserItem';

import './UserList.scss';

export class UserList extends View {
    public userItems: UserItem[] = [];

    constructor() {
        super({ tag: 'ul', classNames: ['user__list'] });
    }

    private setUserItems(): void {}
}
