import { RoutePath } from '../../../router/hashRouter/types';
import { Router } from '../../../router/router/Router';
import { SessionStorageManager } from '../../../utils/sessionStorageManager/SessionStorageManager';
import { View } from '../../View';

import './BtnGoBack.scss';

export class BtnGoBack extends View {
    constructor(router: Router) {
        super({ tag: 'button', classNames: ['btn__back'], textContent: 'Go back' });
        this.setupEventListener(router);
    }

    private setupEventListener(router: Router): void {
        this.getElement().addEventListener('click', () => {
            const userData = SessionStorageManager.getUserData();
            if (userData) {
                router.navigate(RoutePath.CHAT);
            } else {
                router.navigate(RoutePath.LOGIN);
            }
        });
    }
}
