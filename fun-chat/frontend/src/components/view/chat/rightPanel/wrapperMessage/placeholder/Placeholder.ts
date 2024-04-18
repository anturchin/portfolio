import { View } from '../../../../View';

import './Placeholder.scss';

export class Placeholder extends View {
    constructor() {
        super({
            tag: 'span',
            classNames: ['message__placeholder'],
            textContent: 'Select a user to send a message...',
        });
    }
}
