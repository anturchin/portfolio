import { View } from '../../../../View';
import './UserName.scss';

export class UserName extends View {
    constructor() {
        super({
            tag: 'p',
            classNames: ['user__name'],
            callback: null,
            textContent: 'Hello, Andrey',
        });
    }

    render(): void {
        throw new Error('Method not implemented.');
    }

    destroy(): void {
        throw new Error('Method not implemented.');
    }
}
