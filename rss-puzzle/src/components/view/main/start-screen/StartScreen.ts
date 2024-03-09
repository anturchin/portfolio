import { Router } from '../../../router/router/Router';
import { View } from '../../View';
import { BlockImage } from './block-image/BlockImage';
import { StartScreenButton } from './start-screen-button/StartScreenButton';
import { StartScreenTitle } from './start-screen-title/StartScreenTitle';

import './StartScreen.scss';

export class StartScreen extends View {
    private router: Router;

    constructor(router: Router) {
        super({ tag: 'section', callback: null, classNames: ['start-screen'] });
        this.router = router;
        this.setupStartScreen();
    }

    private setupStartScreen(): void {
        const title = new StartScreenTitle().getElement();
        const blockImage = new BlockImage().getElement();
        const button = new StartScreenButton(this.router).getElement();
        [title, blockImage, button].forEach((element) => {
            this.viewHtmlElementCreator.addInnerElement(element);
        });
    }
}
