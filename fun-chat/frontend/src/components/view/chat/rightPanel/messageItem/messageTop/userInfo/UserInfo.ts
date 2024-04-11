import { View } from '../../../../../View';

import './UserInfo.scss';

export class UserInfo extends View {
    constructor() {
        super({ tag: 'p', classNames: ['user__info'] });
    }
}
