import { GarageController } from '../../../controller/garageController/GarageMainController';
import { View } from '../../View';
import { ControlPanel } from './controlPanel/ControlPanel';
import { FormAdd } from './formAdd/FormAdd';
import { FormUpdate } from './formUpdate/FormUpdate';
import { SubTitle } from './subTitle/SubTitle';
import { Title } from './title/Title';

import './GarageView.scss';
import { CarItem } from './carItem/CarItem';
import { CarList } from './carList/CarList';

export class GarageView extends View {
    private controller: GarageController;

    private formAdd: FormAdd | null = null;

    private formUpdate: FormUpdate | null = null;

    private controlPanel: ControlPanel | null = null;

    private carItem: CarItem[] | null = null;

    constructor(controller: GarageController) {
        super({ tag: 'section', classNames: ['garage'] });
        this.controller = controller;
        this.render();
    }

    public render(): void {
        this.renderFormAdd();
        this.renderFormUpdate();
        this.renderControlPanel();
        this.renderTitle();
        this.renderSubTitle();
        this.renderCarItem();
    }

    public renderFormAdd(): void {
        this.formAdd = new FormAdd();
        this.addInnerElement(this.formAdd.getElement());
    }

    public renderFormUpdate(): void {
        this.formUpdate = new FormUpdate();
        this.addInnerElement(this.formUpdate.getElement());
    }

    public renderControlPanel(): void {
        this.controlPanel = new ControlPanel();
        this.addInnerElement(this.controlPanel.getElement());
    }

    public renderTitle(): void {
        const title = new Title().getElement();
        this.addInnerElement(title);
    }

    public renderSubTitle(): void {
        const subTitle = new SubTitle().getElement();
        this.addInnerElement(subTitle);
    }

    public renderCarItem(): void {
        const carItem = new CarItem().getElement();
        const carList = new CarList().getElement();
        carList.append(carItem);
        this.addInnerElement(carList);
    }
}
