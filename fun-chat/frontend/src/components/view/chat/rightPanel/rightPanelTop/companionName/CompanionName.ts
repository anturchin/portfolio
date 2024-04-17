import { View } from '../../../../View';

import './CompanionName.scss';

export class CompanionName extends View {
    constructor() {
        super({ tag: 'p', classNames: ['companion__name'] });
    }
}
