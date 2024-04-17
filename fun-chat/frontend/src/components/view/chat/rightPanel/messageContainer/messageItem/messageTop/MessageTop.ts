import { View } from '../../../../../View';
import { DateTime } from './dateTime/DateTime';
import { UserInfo } from './userInfo/UserInfo';

import './MessageTop.scss';

export class MessageTop extends View {
    constructor(leftOrRight: string, from: string, dateTimeInfo: number) {
        super({ tag: 'div', classNames: ['message__top', leftOrRight] });
        this.setupMessageTop(leftOrRight, from, dateTimeInfo);
    }

    private setupMessageTop(leftOrRight: string, from: string, dateTimeInfo: number): void {
        const userInfo = new UserInfo(leftOrRight, from).getElement();
        const dateTime = new DateTime(leftOrRight, dateTimeInfo).getElement();
        this.getElement().append(...[userInfo, dateTime]);
    }
}
