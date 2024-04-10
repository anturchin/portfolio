import { View } from '../../View';
import { BtnInfo } from './btnInfo/BtnInfo';
import { BtnLogout } from './btnLogout/BtnLogout';
import { User } from './user/User';
import { WrapperTitle } from './wrapperTitle/WrapperTitle';
import { Title } from './title/Title';
import { WrapperBtn } from './wrapperBtn/WrapperBtn';

import './Header.scss';

export class Header extends View {
    constructor() {
        super({ tag: 'div', classNames: ['chat__header'] });
        this.setupHeader();
    }

    private createBtnBlock(): HTMLElement {
        const btnInfo = new BtnInfo('about').getElement();
        const btnLogout = new BtnLogout('logout').getElement();
        const wrapper = new WrapperBtn().getElement();
        wrapper.append(...[btnInfo, btnLogout]);
        return wrapper;
    }

    private createUserAndTitleBlock(): HTMLElement {
        const user = new User().getElement();
        const title = new Title('fun-chat').getElement();
        const wrapper = new WrapperTitle().getElement();
        wrapper.append(...[user, title]);
        return wrapper;
    }

    private setupHeader(): void {
        const userAndTitle = this.createUserAndTitleBlock();
        const buttons = this.createBtnBlock();
        this.getElement().append(...[userAndTitle, buttons]);
    }
}
