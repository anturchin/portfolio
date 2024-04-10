import { View } from '../../../View';

import './User.scss';

export class User extends View {
    constructor(userName: string = 'ann') {
        super({ tag: 'div', classNames: ['chat__user'] });
        this.setupUserName(userName);
    }

    private setupUserName(userName: string): void {
        this.getElement().textContent = `user: ${userName}`;
    }
}
