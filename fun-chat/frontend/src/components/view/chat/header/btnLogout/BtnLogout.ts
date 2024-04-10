import { View } from '../../../View';

import './BtnLogout.scss';

export class BtnLogout extends View {
    constructor(btnName: string) {
        super({ tag: 'button', classNames: ['btn__logout'] });
        this.setupBtnLogout(btnName);
    }

    private setupBtnLogout(btnName: string): void {
        this.getElement().textContent = btnName;
    }
}
