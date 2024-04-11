import { View } from '../../../../../View';
import { DateTime } from './dateTime/DateTime';
import { UserInfo } from './userInfo/UserInfo';

import './MessageTop.scss';

export class MessageTop extends View {
    constructor(leftOrRight: string = 'right') {
        super({ tag: 'div', classNames: ['message__top', leftOrRight] });
        this.setupMessageTop(leftOrRight);
    }

    private setupMessageTop(leftOrRight: string): void {
        const userInfo = new UserInfo(leftOrRight).getElement();
        const dateTime = new DateTime(leftOrRight).getElement();
        this.getElement().append(...[userInfo, dateTime]);
    }
}
