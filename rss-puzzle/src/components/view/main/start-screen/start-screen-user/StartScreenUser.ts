import { LocalStorageManager } from '../../../../utils/localStorageManager/LocalStorageManager';
import { View } from '../../../View';

import './StartScreenUser.scss';

export class StartScreenUser extends View {
    constructor() {
        super({
            tag: 'h2',
            classNames: ['start-screen__user'],
            callback: null,
        });

        this.setupStartScreenUser();
    }

    private setupStartScreenUser(): void {
        const startScreenUser = this.viewHtmlElementCreator.getElement();
        const userData = LocalStorageManager.getUserData();
        if (userData) {
            startScreenUser.innerHTML = `
                Welcome, <span>${userData.firstName}</span> <span>${userData.lastName}</span>,
                to the captivating world of <span>"RSS Puzzle"</span>!
            `;
        }
    }
}
