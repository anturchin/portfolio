import { View } from '../../../../View';

import './ButtonRemove.scss';

export class ButtonRemove extends View {
    private updateTitleAndCarList: () => void;

    private removeCallback: (id: number) => void;

    private id: number;

    constructor(
        updateTitleAndCarList: () => void,
        removeCallback: (id: number) => void,
        id: number
    ) {
        super({ tag: 'button', classNames: ['button__remove'] });
        this.updateTitleAndCarList = updateTitleAndCarList;
        this.removeCallback = removeCallback;
        this.onClickDelete = this.onClickDelete.bind(this);
        this.id = id;
        this.setupButton();
        this.setupEventListener();
    }

    private async onClickDelete(): Promise<void> {
        await this.removeCallback(this.id);
        this.updateTitleAndCarList();
    }

    private setupEventListener(): void {
        this.getElement().addEventListener('click', this.onClickDelete);
    }

    private setupButton(): void {
        this.getElement().textContent = 'remove';
    }
}
