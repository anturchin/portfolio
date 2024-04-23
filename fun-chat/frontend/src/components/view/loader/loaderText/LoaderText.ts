import { View } from '../../View';

import './LoaderText.scss';

const textContent = 'Please wait, connecting to the server...';

export class LoaderText extends View {
    constructor() {
        super({ tag: 'p', classNames: ['loader__text'], textContent });
    }
}
