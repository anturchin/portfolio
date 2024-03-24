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
import { FormUpdate } from '../formUpdate/FormUpdate';

export class CarItem extends View {
    public carInstance: Car;

    public buttonSelect: ButtonSelect | null = null;

    public buttonRemove: ButtonRemove | null = null;

    public buttonStart: ButtonStart | null = null;

    public buttonStop: ButtonStop | null = null;

    public carImage: CarImage | null = null;

    public formUpdate: FormUpdate;

    private updateTitleAndCarList: () => void;

    private removeCallback: (id: number) => void;

    private selectCallback: (id: number) => Promise<{ data: Car }>;

    // private startCallback?: () => void;

    // private stopCallback?: () => void;

    constructor(
        carInstance: Car,
        formUpdate: FormUpdate,
        updateTitleAndCarList: () => void,
        removeCallback: (id: number) => void,
        selectCallback: (id: number) => Promise<{ data: Car }>
    ) {
        super({ tag: 'div', classNames: ['car__item'] });
        this.carInstance = carInstance;
        this.formUpdate = formUpdate;
        this.updateTitleAndCarList = updateTitleAndCarList;
        this.removeCallback = removeCallback;
        this.selectCallback = selectCallback;
        // this.startCallback = startCallback;
        // this.stopCallback = stopCallback;
        this.setupCarItem();
    }

    public renderCarImageAndButtonStartStop(): void {
        this.buttonStart = new ButtonStart();
        this.buttonStop = new ButtonStop();
        const { color } = this.carInstance;
        this.carImage = new CarImage(color);

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
        const { id } = this.carInstance;
        this.buttonSelect = new ButtonSelect(
            this.selectCallback,
            this.formUpdate,
            id
        );
        this.buttonRemove = new ButtonRemove(
            this.updateTitleAndCarList,
            this.removeCallback,
            id
        );
        const { name: carName } = this.carInstance;
        const title = new TitleCar(carName).getElement();

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
        const { id } = this.carInstance;
        this.getElement().id = `${id}`;
        this.renderControlPanel();
        this.renderCarImageAndButtonStartStop();
    }
}
