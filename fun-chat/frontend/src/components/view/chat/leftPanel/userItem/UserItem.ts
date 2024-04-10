import { View } from '../../../View';

import './UserItem.scss';

export class UserItem extends View {
    constructor(userName: string = 'lebowski') {
        super({ tag: 'li', classNames: ['user__item'], textContent: `${userName}` });
    }
}
