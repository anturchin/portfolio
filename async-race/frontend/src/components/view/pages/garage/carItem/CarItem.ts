import { Car } from '../../../../models/car/Car';
import { View } from '../../../View';
import { ButtonRemove } from './buttonRemove/ButtonRemove';
import { ButtonSelect } from './buttonSelect/ButtonSelect';
import { ButtonStart } from './buttonStart/ButtonStart';
import { ButtonStop } from './buttonStop/ButtonStop';
import { TitleCar } from './title/TitleCar';
import { WrapperCar } from './wrapper/WrapperCar';
import { CarImage } from './carImage/CarImage';
import { FormUpdate } from '../formUpdate/FormUpdate';
import { GarageView } from '../GarageView';
import { GarageController } from '../../../../controller/garageController/GarageMainController';
import { CustomAnimation } from '../../../../utils/animation/CustomAnimation';

import './CarItem.scss';

export class CarItem extends View {
    private carInstance: Car;

    private buttonSelect: ButtonSelect | null = null;

    private buttonRemove: ButtonRemove | null = null;

    private buttonStart: ButtonStart | null = null;

    private buttonStop: ButtonStop | null = null;

    private carImage: CarImage | null = null;

    private formUpdate: FormUpdate;

    private garageController: GarageController;

    private garageView: GarageView;

    private animation: CustomAnimation;

    private updateTitleAndCarList: () => void;

    private removeCallback: (id: number) => void;

    private selectCallback: (id: number) => Promise<{ data: Car }>;

    constructor(
        carInstance: Car,
        formUpdate: FormUpdate,
        garageController: GarageController,
        garageView: GarageView,
        updateTitleAndCarList: () => void,
        removeCallback: (id: number) => void,
        selectCallback: (id: number) => Promise<{ data: Car }>
    ) {
        super({ tag: 'div', classNames: ['car__item'] });
        this.carInstance = carInstance;
        this.formUpdate = formUpdate;
        this.garageController = garageController;
        this.garageView = garageView;
        this.animation = new CustomAnimation();
        this.updateTitleAndCarList = updateTitleAndCarList;
        this.removeCallback = removeCallback;
        this.selectCallback = selectCallback;
        this.setupCarItem();
    }

    public renderCarImageAndButtonStartStop(): void {
        this.buttonStart = new ButtonStart(
            this.garageController,
            this.garageView,
            this.animation
        );
        this.buttonStart.getElement().dataset.id = `${this.carInstance.id}`;
        this.buttonStop = new ButtonStop(
            this.garageController,
            this.garageView,
            this.animation
        );
        this.buttonStop.getElement().dataset.id = `${this.carInstance.id}`;
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

        const { raceController } = this.garageController;
        raceController.addCustomAnimation(this, this.animation);

        this.renderControlPanel();
        this.renderCarImageAndButtonStartStop();
    }
}
