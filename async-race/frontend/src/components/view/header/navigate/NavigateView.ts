import { Router } from '../../../router/router/Router';
import { View } from '../../View';

import './NavigateView.scss';
import { LinkView } from './link/LinkView';

export class NavigateView extends View {
    private router: Router;

    constructor(router: Router) {
        super({ tag: 'ul', classNames: ['nav__list'] });
        this.router = router;
        this.onHandleClick = this.onHandleClick.bind(this);
        this.setupNavigateView();
        this.setupEventListener();
    }

    private onHandleClick(event: Event): void {
        const element = event.target as HTMLElement;
        if (element.id === 'garage') {
            this.router.navigate('./garage');
        }

        if (element.id === 'winners') {
            this.router.navigate('./winners');
        }
    }

    private setupEventListener(): void {
        this.getElement().addEventListener('click', this.onHandleClick);
    }

    private setupNavigateView(): void {
        const garageLink = new LinkView('garage', 'garage').getElement();
        const winnerLink = new LinkView('winners', 'winners').getElement();
        this.getElement().append(...[garageLink, winnerLink]);
    }
}
