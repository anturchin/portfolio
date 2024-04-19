import { View } from '../../../../../../View';

import './DateTime.scss';

export class DateTime extends View {
    constructor(leftOrRight: string, dateTime: number) {
        super({ tag: 'p', classNames: ['date__time', leftOrRight] });
        this.setupDateTime(dateTime);
    }

    private padZero(num: number): string {
        return num.toString().padStart(2, '0');
    }

    private formattedDate(dateTime: number): string {
        const date = new Date(dateTime);
        const day = this.padZero(date.getDate());
        const month = this.padZero(date.getMonth() + 1);
        const year = this.padZero(date.getDate());
        const hours = this.padZero(date.getHours());
        const minutes = this.padZero(date.getMinutes());
        const seconds = this.padZero(date.getSeconds());

        return `( ${day}.${month}.${year}, ${hours}:${minutes}:${seconds} )`;
    }

    private setupDateTime(dateTime: number): void {
        this.getElement().textContent = this.formattedDate(dateTime);
    }
}
