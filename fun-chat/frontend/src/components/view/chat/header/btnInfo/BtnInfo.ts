import { RoutePath } from '../../../../router/hashRouter/types';
import { Router } from '../../../../router/router/Router';
import { View } from '../../../View';

import './BtnInfo.scss';

export class BtnInfo extends View {
    private router: Router;

    constructor(btnName: string, router: Router) {
        super({ tag: 'button', classNames: ['btn__info'] });
        this.router = router;
        this.handleClick = this.handleClick.bind(this);
        this.setupBtnInfo(btnName);
        this.setupEventListener();
    }

    private handleClick(): void {
        this.router.navigate(RoutePath.ABOUT);
    }

    private setupEventListener(): void {
        this.getElement().addEventListener('click', this.handleClick);
    }

    private setupBtnInfo(btnName: string): void {
        this.getElement().textContent = btnName;
    }
}
