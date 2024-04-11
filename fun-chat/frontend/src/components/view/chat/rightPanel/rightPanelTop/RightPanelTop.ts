import { View } from '../../../View';
import { CompanionName } from './companionName/CompanionName';
import { CompanionStatus } from './companionStatus/CompanionStatus';

import './RightPanelTop.scss';

export class RightPanelTop extends View {
    constructor() {
        super({ tag: 'div', classNames: ['right-panel__top'] });
        this.setupRightPanelTop();
    }

    private setupRightPanelTop(): void {
        const companionName = new CompanionName().getElement();
        const companionStatus = new CompanionStatus().getElement();
        this.getElement().append(...[companionName, companionStatus]);
    }
}
