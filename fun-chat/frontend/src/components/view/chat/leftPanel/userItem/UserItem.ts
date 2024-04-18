import { View } from '../../../View';

import './UserItem.scss';

export class UserItem extends View {
    constructor(userName: string, isLogined: boolean) {
        const styles = isLogined ? ['user__item', 'active'] : ['user__item'];
        super({ tag: 'li', classNames: styles, textContent: `${userName}` });
        this.setupUserItem(userName, isLogined);
    }

    public updateStatus(isLogined: boolean): void {
        if (isLogined) {
            this.getElement().classList.add('active');
        } else {
            this.getElement().classList.remove('active');
        }
        this.getElement().setAttribute('data-active', `${isLogined ? 1 : 0}`);
    }

    private setupUserItem(userName: string, isLogined: boolean): void {
        this.getElement().setAttribute('data-name', userName);
        this.getElement().setAttribute('data-active', `${isLogined ? 1 : 0}`);
    }
}
