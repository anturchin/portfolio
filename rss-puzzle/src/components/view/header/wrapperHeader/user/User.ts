import { View } from '../../../View';
import { UserLogout } from './userLogout/UserLogout';
import { UserName } from './userName/UserName';

import './User.scss';

export class User extends View {
    constructor() {
        super({
            tag: 'div',
            classNames: ['user'],
            callback: null,
        });
        this.setupUserContent();
    }

    setupUserContent(): void {
        const userName = new UserName().getElement();
        const userLogout = new UserLogout().getElement();
        [userName, userLogout].forEach((elem) => this.viewHtmlElementCreator.addInnerElement(elem));
    }

    render(): void {
        throw new Error('Method not implemented.');
    }

    destroy(): void {
        throw new Error('Method not implemented.');
    }
}
