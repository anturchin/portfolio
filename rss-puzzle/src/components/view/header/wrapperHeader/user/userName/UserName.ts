import { View } from '../../../../View';
import './UserName.scss';

export class UserName extends View {
    constructor(firstName: string, lastName: string) {
        super({
            tag: 'p',
            classNames: ['user__name'],
            callback: null,
            textContent: `Hello, ${firstName} ${lastName}`,
        });
    }
}
