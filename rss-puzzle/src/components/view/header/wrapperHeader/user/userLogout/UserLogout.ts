import { Router } from '../../../../../router/router/Router';
import { LocalStorageManager } from '../../../../../utils/localStorageManager/LocalStorageManager';
import { View } from '../../../../View';
import { Header } from '../../../Header';

import './UserLogout.scss';

export class UserLogout extends View {
    router: Router;

    header: Header;

    constructor(router: Router, header: Header) {
        super({
            tag: 'button',
            classNames: ['user__logout'],
            callback: null,
            textContent: 'logout',
        });
        this.router = router;
        this.header = header;
        this.setAddEventListener();
    }

    private setAddEventListener(): void {
        const button = this.viewHtmlElementCreator.getElement();
        button.addEventListener('click', () => {
            this.clearDataUserInLocalStorage();
            this.header.updateWrapperHeader();
            this.router.navigate('/login');
        });
    }

    private clearDataUserInLocalStorage(): void {
        LocalStorageManager.removeUserData();
        LocalStorageManager.removeGameIndexes();
    }
}
