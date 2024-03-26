import { View } from '../../../View';
import { WinnerView } from '../WinnerView';
import { Thead } from './thead/Thead';
import { WinnerController } from '../../../../controller/winnerController/WinnerMainController';
import { Tbody } from './tbody/Tbody';

import './Table.scss';

export class Table extends View {
    private controller: WinnerController;

    private winnerView: WinnerView;

    constructor(controller: WinnerController, winnerView: WinnerView) {
        super({ tag: 'table', classNames: ['winners-table'] });
        this.controller = controller;
        this.winnerView = winnerView;
        this.setupTable();
    }

    public updateTable(): void {
        while (this.getElement().firstChild) {
            const children = this.getElement().firstChild;
            if (children) this.getElement().removeChild(children);
        }
        this.setupTable();
    }

    private setupTable(): void {
        const thead = new Thead(this.controller, this.winnerView).getElement();
        const tbody = new Tbody(this.controller).getElement();
        this.getElement().append(...[thead, tbody]);
    }
}
