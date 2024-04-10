import { View } from '../../../View';
import { UserItem } from '../userItem/UserItem';

import './UserList.scss';

export class UserList extends View {
    constructor() {
        super({ tag: 'ul', classNames: ['user__list'] });
        this.setupUserList();
    }

    private setupUserList(): void {
        for (let i = 0; i < 150; i += 1) {
            const user = new UserItem(`user ${i + 1}`).getElement();
            this.addInnerElement(user);
        }
    }
}
