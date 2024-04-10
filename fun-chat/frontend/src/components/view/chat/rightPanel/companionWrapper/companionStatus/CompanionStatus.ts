import { View } from '../../../../View';

import './CompanionStatus.scss';

export class CompanionStatus extends View {
    constructor() {
        super({ tag: 'p', classNames: ['companion__status'] });
    }
}
