import { View } from '../../View';
import { BtnInfo } from './btnInfo/BtnInfo';
import { BtnLogout } from './btnLogout/BtnLogout';
import { User } from './user/User';
import { WrapperTitle } from './wrapperTitle/WrapperTitle';
import { Title } from './title/Title';
import { WrapperBtn } from './wrapperBtn/WrapperBtn';
import { Router } from '../../../router/router/Router';

import './Header.scss';

export class Header extends View {
    private userName: User;

    private btnInfo: BtnInfo;

    private btnLogout: BtnLogout;

    constructor(router: Router) {
        super({ tag: 'div', classNames: ['chat__header'] });
        this.userName = new User();
        this.btnInfo = new BtnInfo('about', router);
        this.btnLogout = new BtnLogout('logout');
        this.setupHeader();
    }

    public getUserName(): User {
        return this.userName;
    }

    public getBtnInfo(): BtnInfo {
        return this.btnInfo;
    }

    public getBtnLogout(): BtnLogout {
        return this.btnLogout;
    }

    private createBtnBlock(): HTMLElement {
        const wrapper = new WrapperBtn().getElement();
        wrapper.append(...[this.btnInfo.getElement(), this.btnLogout.getElement()]);
        return wrapper;
    }

    private createUserAndTitleBlock(): HTMLElement {
        const title = new Title('fun-chat').getElement();
        const wrapper = new WrapperTitle().getElement();
        wrapper.append(...[this.userName.getElement(), title]);
        return wrapper;
    }

    private setupHeader(): void {
        const userAndTitle = this.createUserAndTitleBlock();
        const buttons = this.createBtnBlock();
        this.getElement().append(...[userAndTitle, buttons]);
    }
}
