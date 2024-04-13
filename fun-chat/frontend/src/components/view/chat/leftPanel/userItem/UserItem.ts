import { View } from '../../../View';

import './UserItem.scss';

export class UserItem extends View {
    constructor(userName: string, isLogined: boolean) {
        const styles = isLogined ? ['user__item', 'active'] : ['user__item'];
        super({ tag: 'li', classNames: styles, textContent: `${userName}` });
    }
}
