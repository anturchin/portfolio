import { ICar } from './Car.interface';

export class Car implements ICar {
    public id: number;

    public name: string;

    public color: string;

    constructor(id: number, name: string, color: string) {
        this.id = id;
        this.name = name;
        this.color = color;
    }
}
