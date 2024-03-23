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

    private carList: CarList | null = null;

    private pagination: Pagination | null = null;

    private title: Title | null = null;

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
        this.renderPagination();
    }

    public updateTitle(): void {
        if (this.title) {
            const { totalCarsCount } = this.controller.getPageAndTotalCount();
            const count = this.title.getElement().querySelector('span');
            if (count) count.textContent = `(${totalCarsCount})`;
        }
    }

    public renderFormAdd(): void {
        const callback = this.controller.addCar.bind(this.controller);
        const updateTitle = this.updateTitle.bind(this);
        this.formAdd = new FormAdd(callback, updateTitle);
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

    public renderCarItem(): void {
        this.carList = new CarList();
        const carItems: HTMLElement[] = [];
        this.controller.getCars().forEach((car) => {
            carItems.push(new CarItem(car).getElement());
        });

        this.carList.getElement().append(...carItems);
        this.addInnerElement(this.carList.getElement());
    }

    public renderPagination(): void {
        this.pagination = new Pagination();
        this.addInnerElement(this.pagination.getElement());
    }
}
