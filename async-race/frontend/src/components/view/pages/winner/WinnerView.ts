import { WinnerController } from '../../../controller/winnerController/WinnerMainController';
import { View } from '../../View';
import { Pagination } from './pagination/Pagination';
import { SubTitle } from './subTitle/SubTitle';
import { Table } from './table/Table';
import { Title } from './title/Title';

import './WinnerView.scss';

export class WinnerView extends View {
    private controller: WinnerController;

    private title: Title;

    private subTitle: SubTitle;

    private table: Table;

    constructor(controller: WinnerController) {
        super({ tag: 'section' });
        this.controller = controller;
        this.title = new Title(this.controller);
        this.subTitle = new SubTitle(this.controller);
        this.table = new Table(this.controller, this);
        this.render();
    }

    public render(): void {
        this.renderTitle();
        this.renderSubTitle();
        this.renderTable();
        this.renderPagination();
    }

    public renderPagination(): void {
        const pagination = new Pagination().getElement();
        this.addInnerElement(pagination);
    }

    public renderTable(): void {
        this.addInnerElement(this.table.getElement());
    }

    public renderSubTitle(): void {
        this.addInnerElement(this.subTitle.getElement());
    }

    public renderTitle(): void {
        this.addInnerElement(this.title.getElement());
    }
}
