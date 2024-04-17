import { View } from '../../../View';
import { CompanionName } from './companionName/CompanionName';
import { CompanionStatus } from './companionStatus/CompanionStatus';

import './RightPanelTop.scss';

export class RightPanelTop extends View {
    public companionName: CompanionName;

    public companionStatus: CompanionStatus;

    constructor() {
        super({ tag: 'div', classNames: ['right-panel__top'] });
        this.companionName = new CompanionName();
        this.companionStatus = new CompanionStatus();
        this.setupRightPanelTop();
    }

    private setupRightPanelTop(): void {
        this.getElement().append(
            ...[this.companionName.getElement(), this.companionStatus.getElement()]
        );
    }
}
