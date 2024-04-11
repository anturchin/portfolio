import { View } from '../../../../../../View';

import './UserInfo.scss';

export class UserInfo extends View {
    constructor(leftOrRight: string = 'right', userName: string = 'user') {
        super({ tag: 'p', classNames: ['user__info', leftOrRight], textContent: userName });
    }
}
