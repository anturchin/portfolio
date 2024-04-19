import { View } from '../../../../../../View';

import './UserInfo.scss';

export class UserInfo extends View {
    constructor(leftOrRight: string, userName: string) {
        const nameUser = leftOrRight === 'left' ? `( ${userName} )` : '( You )';
        super({ tag: 'p', classNames: ['user__info', leftOrRight], textContent: nameUser });
    }
}
