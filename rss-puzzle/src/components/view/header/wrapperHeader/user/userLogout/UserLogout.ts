import { View } from '../../../../View';
import './UserLogout.scss';

export class UserLogout extends View {
    constructor() {
        super({
            tag: 'button',
            classNames: ['user__logout'],
            callback: null,
            textContent: 'logout',
        });
    }

    render(): void {
        throw new Error('Method not implemented.');
    }

    destroy(): void {
        throw new Error('Method not implemented.');
    }
}
