import { Router } from '../../../router/router/Router';
import { View } from '../../View';

export class Statistics extends View {
    private router: Router;

    constructor(router: Router) {
        super({ tag: 'section', callback: null });
        this.router = router;
    }
}
