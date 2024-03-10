import { Router } from '../../../router/router/Router';
import { View } from '../../View';
import { BlockImage } from './blockImage/BlockImage';
import { StartScreenButton } from './startScreenButton/StartScreenButton';
import { StartScreenTitle } from './startScreenTitle/StartScreenTitle';
import { StartScreenUser } from './startScreenUser/StartScreenUser';

import './StartScreen.scss';

export class StartScreen extends View {
    private router: Router;

    constructor(router: Router) {
        super({ tag: 'section', callback: null, classNames: ['start-screen'] });
        this.router = router;
        this.setupStartScreen();
    }

    private setupStartScreen(): void {
        const greetings = new StartScreenUser().getElement();
        const title = new StartScreenTitle().getElement();
        const blockImage = new BlockImage().getElement();
        const button = new StartScreenButton(this.router).getElement();
        [greetings, title, blockImage, button].forEach((element) => {
            this.viewHtmlElementCreator.addInnerElement(element);
        });
    }
}
