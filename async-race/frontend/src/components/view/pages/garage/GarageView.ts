import { GarageController } from '../../../controller/garageController/GarageMainController';
import { View } from '../../View';
import { ControlPanel } from './controlPanel/ControlPanel';
import { FormAdd } from './formAdd/FormAdd';
import { FormUpdate } from './formUpdate/FormUpdate';
import { SubTitle } from './subTitle/SubTitle';
import { Title } from './title/Title';
import { CarItem } from './carItem/CarItem';
import { CarList } from './carList/CarList';
import { Pagination } from './pagination/Pagination';

import './GarageView.scss';

export class GarageView extends View {
    private controller: GarageController;

    private formAdd: FormAdd | null = null;

    private formUpdate: FormUpdate | null = null;

    private controlPanel: ControlPanel | null = null;

    private carList: CarList;

    private pagination: Pagination | null = null;

    private title: Title | null = null;

    constructor(controller: GarageController) {
        super({ tag: 'section', classNames: ['garage'] });
        this.controller = controller;
        this.carList = new CarList();
        this.render();
    }

    public render(): void {
        this.renderFormAdd();
        this.renderFormUpdate();
        this.renderControlPanel();
        this.renderTitle();
        this.renderSubTitle();
        this.renderCarList();
        this.renderCarItem();
        this.renderPagination();
    }

    public updateTitleAndCarList(): void {
        if (this.title) {
            const { totalCarsCount } = this.controller.getPageAndTotalCount();
            const count = this.title.getElement().querySelector('span');
            if (count) count.textContent = `(${totalCarsCount})`;
        }
        if (this.carList) {
            while (this.carList.getElement().firstChild) {
                const children = this.carList.getElement().firstChild;
                if (children) this.carList.getElement().removeChild(children);
            }
            this.renderCarItem();
        }
    }

    public renderFormAdd(): void {
        const callbackAdd = this.controller.addCar.bind(this.controller);
        const updateTitleAndCarList = this.updateTitleAndCarList.bind(this);
        this.formAdd = new FormAdd(callbackAdd, updateTitleAndCarList);
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
        const { totalCarsCount } = this.controller.getPageAndTotalCount();
        this.title = new Title(totalCarsCount);
        this.addInnerElement(this.title.getElement());
    }

    public renderSubTitle(): void {
        const { page } = this.controller.getPageAndTotalCount();
        const subTitle = new SubTitle(page).getElement();
        this.addInnerElement(subTitle);
    }

    public renderCarList(): void {
        this.addInnerElement(this.carList.getElement());
    }

    public renderCarItem(): void {
        const callbackRemove = this.controller.removeCar.bind(this.controller);
        const updateTitleAndCarList = this.updateTitleAndCarList.bind(this);
        const carItems: HTMLElement[] = [];
        this.controller.getCars().forEach((car) => {
            carItems.push(
                new CarItem(
                    car,
                    updateTitleAndCarList,
                    callbackRemove
                ).getElement()
            );
        });

        this.carList.getElement().append(...carItems);
    }

    public renderPagination(): void {
        this.pagination = new Pagination();
        this.addInnerElement(this.pagination.getElement());
    }
}
