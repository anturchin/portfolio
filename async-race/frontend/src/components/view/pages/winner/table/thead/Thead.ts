import { View } from '../../../../View';
import { Th } from './th/Th';
import { Tr } from './tr/Tr';
import { WinnerController } from '../../../../../controller/winnerController/WinnerMainController';
import { WinnerView } from '../../WinnerView';

import './Thead.scss';
import { SortBy } from '../../../../../state/types';

const COLUMNS_NAME: string[] = [
    'Number',
    'Car',
    'Name',
    'Wins',
    'Best time (seconds)',
];

const SORT_BY = new Map<string, SortBy>();

SORT_BY.set('Number', SortBy.ID);
SORT_BY.set('Wins', SortBy.Wins);
SORT_BY.set('Best time (seconds)', SortBy.Time);

export class Thead extends View {
    private controller: WinnerController;

    private winnerView: WinnerView;

    constructor(controller: WinnerController, winnerView: WinnerView) {
        super({ tag: 'thead', classNames: ['table__thead'] });
        this.controller = controller;
        this.winnerView = winnerView;
        this.onClickSortBy = this.onClickSortBy.bind(this);
        this.setupThead();
        this.setupEventListener();
    }

    private setupEventListener(): void {
        this.getElement().addEventListener('click', this.onClickSortBy);
    }

    private async onClickSortBy(event: Event): Promise<void> {
        const target = event.target as HTMLElement;
        const isTh = target.classList.contains('thead__th');
        const dataName = target.getAttribute('data-name') || '';
        if (isTh && SORT_BY.has(dataName)) {
            const sortBy = SORT_BY.get(dataName);
            try {
                if (sortBy) await this.controller.handleSortBy(sortBy);
                this.winnerView.updateTitleAndTable();
            } catch (error) {
                if (error instanceof Error) {
                    console.error(error.message);
                }
            }
        }
    }

    private setupThead(): void {
        const tr = new Tr().getElement();
        const thList: HTMLElement[] = [];
        COLUMNS_NAME.forEach((colName) => {
            thList.push(new Th(colName).getElement());
        });
        tr.append(...thList);
        this.addInnerElement(tr);
    }
}
