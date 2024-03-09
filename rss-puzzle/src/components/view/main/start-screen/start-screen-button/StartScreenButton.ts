import { Router } from '../../../../router/router/Router';
import { View } from '../../../View';

import './StartScreenButton.scss';

export class StartScreenButton extends View {
    private router: Router;

    constructor(router: Router) {
        super({
            tag: 'button',
            classNames: ['start-screen__button'],
            callback: null,
            textContent: 'start',
        });
        this.router = router;
        this.setupEventListener();
    }

    private setupEventListener(): void {
        this.viewHtmlElementCreator.getElement().addEventListener('click', () => {
            this.router.navigate('/game');
        });
    }
}
