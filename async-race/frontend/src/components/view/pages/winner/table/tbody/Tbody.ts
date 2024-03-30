import { WinnerController } from '../../../../../controller/winnerController/WinnerMainController';
import { Car } from '../../../../../models/car/Car';
import { Winner } from '../../../../../models/winner/Winner';
import { View } from '../../../../View';
import { Tr } from './tr/Tr';
import { Td } from './td/Td';
import { MergedType } from '../../../../../state/types';
import { SvgCarCreator } from '../../../../../utils/svgCreator/SvgCarCreator';

import './Tbody.scss';

export class Tbody extends View {
    private controller: WinnerController;

    constructor(controller: WinnerController) {
        super({ tag: 'tbody', classNames: ['table__tbody'] });
        this.controller = controller;
        this.setupTbody();
    }

    private getMergeArray(cars: Car[], winners: Winner[]): MergedType[] {
        return cars.map((car) => {
            const winner = winners.find((w) => w.id === car.id);
            if (winner) {
                return {
                    ...car,
                    wins: winner.wins,
                    time: winner.time,
                };
            }
            return {
                ...car,
            };
        });
    }

    private createTd(winner: MergedType, index: number): HTMLElement[] {
        const cells: HTMLElement[] = [];

        const { id, color, name, time, wins } = winner;

        const positionNumber = new Td(`${index + 1}`).getElement();
        cells.push(positionNumber);

        const idCell = new Td(`${id}`).getElement();
        cells.push(idCell);

        const carCell = new Td().getElement();
        const svg = SvgCarCreator.create(color, '60px', '60px');
        carCell.innerHTML = svg;
        cells.push(carCell);

        const nameCell = new Td(name).getElement();
        cells.push(nameCell);

        const winsCell = new Td(`${wins}`).getElement();
        cells.push(winsCell);

        const timeCell = new Td(`${time}`).getElement();
        cells.push(timeCell);

        return cells;
    }

    private setupTbody(): void {
        const cars = this.controller.getCars();
        const winners = this.controller.getWinners();

        const mergeArray = this.getMergeArray(cars, winners);

        mergeArray.forEach((winner, index) => {
            const tr = new Tr().getElement();
            tr.append(...this.createTd(winner, index));
            this.addInnerElement(tr);
        });
    }
}
