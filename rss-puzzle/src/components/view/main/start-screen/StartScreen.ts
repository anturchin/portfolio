import { Router } from '../../../router/router/Router';
import { View } from '../../View';

export class StartScreen extends View {
    private router: Router;

    constructor(router: Router) {
        super({ tag: 'section', callback: null });
        this.router = router;
    }
}
