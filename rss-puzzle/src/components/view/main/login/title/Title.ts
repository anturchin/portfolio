import { View } from '../../../View';

import './Title.scss';

export class Title extends View {
    constructor() {
        super({
            tag: 'h1',
            classNames: ['login__title'],
            callback: null,
            textContent: 'Login',
        });
    }

    render(): void {
        throw new Error('Method not implemented.');
    }

    destroy(): void {
        throw new Error('Method not implemented.');
    }
}
