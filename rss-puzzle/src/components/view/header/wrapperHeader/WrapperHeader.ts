import { View } from '../../View';
import { Logo } from './logo/Logo';
import { User } from './user/User';
import { LocalStorageManager } from '../../../utils/localStorageManager/LocalStorageManager';
import { Router } from '../../../router/router/Router';

import './WrapperHeader.scss';
import { Header } from '../Header';

export class WrapperHeader extends View {
    private router: Router;

    constructor(router: Router, header: Header) {
        super({ tag: 'div', classNames: ['header__wrapper'], callback: null });
        this.router = router;
        this.setupWrapperContent(header);
    }

    private setupWrapperContent(header: Header): void {
        const logo = new Logo().getElement();
        this.viewHtmlElementCreator.addInnerElement(logo);
        this.renderUserComponent(header);
    }

    private createUserComponent(header: Header): User | null {
        const userData = LocalStorageManager.getUserData();
        if (userData) {
            const userComponent = new User(
                userData.firstName,
                userData.lastName,
                this.router,
                header
            );
            return userComponent;
        }
        return null;
    }

    private renderUserComponent(header: Header): void {
        if (this.isUserLoggedIn()) {
            const userComponent = this.createUserComponent(header);
            if (userComponent) {
                this.viewHtmlElementCreator.addInnerElement(userComponent.getElement());
            }
        }
    }

    private isUserLoggedIn(): boolean {
        const userDate = LocalStorageManager.getUserData();
        return !!userDate;
    }
}
