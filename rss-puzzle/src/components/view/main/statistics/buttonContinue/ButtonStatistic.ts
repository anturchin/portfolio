import { Router } from '../../../../router/router/Router';
import { View } from '../../../View';

import './ButtonStatistic.scss';

export class ButtonStatistic extends View {
    constructor(router: Router) {
        super({
            tag: 'button',
            callback: null,
            classNames: ['statistics__btn'],
            textContent: 'Continue',
        });
        this.setEventListener(router);
    }

    private setEventListener(router: Router): void {
        this.viewHtmlElementCreator.getElement().addEventListener('click', () => {
            router.navigate('/game');
        });
    }
}
