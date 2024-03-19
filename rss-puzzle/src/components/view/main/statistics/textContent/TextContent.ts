import { View } from '../../../View';

import './TextContent.scss';

export class TextContent extends View {
    constructor(nameWord: string) {
        super({
            tag: 'p',
            callback: null,
            textContent: nameWord,
        });
    }
}
