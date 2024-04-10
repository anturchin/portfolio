import { View } from '../../../View';

import './BtnInfo.scss';

export class BtnInfo extends View {
    constructor(btnName: string) {
        super({ tag: 'button', classNames: ['btn__info'] });
        this.setupBtnInfo(btnName);
    }

    private setupBtnInfo(btnName: string): void {
        this.getElement().textContent = btnName;
    }
}
