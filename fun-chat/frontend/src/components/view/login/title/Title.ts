import { View } from '../../View';

import './Title.scss';

export class Title extends View {
    constructor() {
        super({
            tag: 'h3',
            classNames: ['login__title'],
            textContent: 'Authorization',
        });
    }
}
