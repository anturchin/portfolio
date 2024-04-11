import { View } from '../../../../View';

import './CompanionStatus.scss';

export class CompanionStatus extends View {
    constructor(isActive: boolean = false) {
        const statusText = isActive ? 'в сети' : 'не в сети';
        const statusClass = isActive ? ['companion__status', 'active'] : ['companion__status'];
        super({ tag: 'p', classNames: statusClass, textContent: statusText });
    }
}
