import { Car } from '../../../../models/car/Car';
import { View } from '../../../View';
import { ButtonRemove } from './buttonRemove/ButtonRemove';
import { ButtonSelect } from './buttonSelect/ButtonSelect';
import { ButtonStart } from './buttonStart/ButtonStart';
import { ButtonStop } from './buttonStop/ButtonStop';
import { TitleCar } from './title/TitleCar';
import { WrapperCar } from './wrapper/WrapperCar';
import { CarImage } from './carImage/CarImage';

import './CarItem.scss';

export class CarItem extends View {
    public car?: Car;

    public buttonSelect: ButtonSelect | null = null;

    public buttonRemove: ButtonRemove | null = null;

    public buttonStart: ButtonStart | null = null;

    public buttonStop: ButtonStop | null = null;

    public carImage: CarImage | null = null;

    private removeCallback?: () => void;

    private selectCallback?: () => void;

    private startCallback?: () => void;

    private stopCallback?: () => void;

    constructor(
        car?: Car,
        removeCallback?: () => void,
        selectCallback?: () => void,
        startCallback?: () => void,
        stopCallback?: () => void
    ) {
        super({ tag: 'div', classNames: ['car__item'] });
        this.car = car;
        this.removeCallback = removeCallback;
        this.selectCallback = selectCallback;
        this.startCallback = startCallback;
        this.stopCallback = stopCallback;
        this.setupCarItem();
    }

    public renderCarImageAndButtonStartStop(): void {
        this.buttonStart = new ButtonStart();
        this.buttonStop = new ButtonStop();
        this.carImage = new CarImage();

        const wrapper = new WrapperCar().getElement();
        wrapper.append(
            ...[
                this.buttonStart.getElement(),
                this.buttonStop.getElement(),
                this.carImage.getElement(),
            ]
        );
        this.addInnerElement(wrapper);
    }

    public renderControlPanel(): void {
        this.buttonSelect = new ButtonSelect();
        this.buttonRemove = new ButtonRemove();
        const title = new TitleCar('cherry').getElement();

        const wrapper = new WrapperCar().getElement();
        wrapper.append(
            ...[
                this.buttonSelect.getElement(),
                this.buttonRemove.getElement(),
                title,
            ]
        );

        this.addInnerElement(wrapper);
    }

    private setupCarItem(): void {
        this.renderControlPanel();
        this.renderCarImageAndButtonStartStop();
    }
}
