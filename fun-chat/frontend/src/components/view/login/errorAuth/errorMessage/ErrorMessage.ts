import { View } from '../../../View';

import './ErrorMessage.scss';

export class ErrorMessage extends View {
    constructor() {
        super({
            tag: 'p',
            classNames: ['error__text'],
            textContent: 'A user with this login is already authorized',
        });
    }
}
