import { View } from '../../../View';
import { UserLogout } from './userLogout/UserLogout';
import { UserName } from './userName/UserName';

import './User.scss';
import { Router } from '../../../../router/router/Router';
import { Header } from '../../Header';

export class User extends View {
    constructor(firstName: string, lastName: string, router: Router, header: Header) {
        super({
            tag: 'div',
            classNames: ['user'],
            callback: null,
        });
        this.setupUserContent(firstName, lastName, router, header);
    }

    private setupUserContent(
        firstName: string,
        lastName: string,
        router: Router,
        header: Header
    ): void {
        const userName = new UserName(firstName, lastName).getElement();
        const userLogout = new UserLogout(router, header).getElement();
        [userName, userLogout].forEach((elem) => this.viewHtmlElementCreator.addInnerElement(elem));
    }
}
