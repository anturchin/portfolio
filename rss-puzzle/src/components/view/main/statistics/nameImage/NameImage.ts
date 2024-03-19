import { View } from '../../../View';

import './NameImage.scss';

export class NameImage extends View {
    constructor(author: string) {
        super({
            tag: 'h3',
            callback: null,
            classNames: ['statistics__name'],
            textContent: author,
        });
    }
}
