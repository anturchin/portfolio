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

    private formUpdate: FormUpdate;

    private carList: CarList;

    private title: Title | null = null;

    private subTitle: SubTitle | null = null;

    constructor(controller: GarageController) {
        super({ tag: 'section', classNames: ['garage'] });
        this.controller = controller;
        this.carList = new CarList();
        this.formUpdate = new FormUpdate(this.controller, this);
        this.render();
    }

    public async render(): Promise<void> {
        try {
            await this.controller.loadCars();
            this.renderFormAdd();
            this.renderFormUpdate();
            this.renderControlPanel();
            this.renderTitle();
            this.renderSubTitle();
            this.renderCarList();
            this.renderCarItem();
            this.renderPagination();
        } catch (error) {
            if (error instanceof Error) {
                console.error(error.message);
            }
        }
    }

    public updateTitleAndCarList(): void {
        if (this.title) {
            const { totalCarsCount } = this.controller.getPageAndTotalCount();
            const count = this.title.getElement().querySelector('span');
            if (count) count.textContent = `(${totalCarsCount})`;
        }
        if (this.subTitle) {
            const { page } = this.controller.getPageAndTotalCount();
            const count = this.subTitle.getElement().querySelector('span');
            if (count) count.textContent = `# ${page}`;
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
        const formAdd = new FormAdd(callbackAdd, updateTitleAndCarList);
        this.addInnerElement(formAdd.getElement());
    }

    public renderFormUpdate(): void {
        this.addInnerElement(this.formUpdate.getElement());
    }

    public renderControlPanel(): void {
        const controlPanel = new ControlPanel(this.controller, this);
        this.addInnerElement(controlPanel.getElement());
    }

    public renderTitle(): void {
        const { totalCarsCount } = this.controller.getPageAndTotalCount();
        this.title = new Title(totalCarsCount);
        this.addInnerElement(this.title.getElement());
    }

    public renderSubTitle(): void {
        const { page } = this.controller.getPageAndTotalCount();
        this.subTitle = new SubTitle(page);
        this.addInnerElement(this.subTitle.getElement());
    }

    public renderCarList(): void {
        this.addInnerElement(this.carList.getElement());
    }

    public renderCarItem(): void {
        const callbackRemove = this.controller.removeCar.bind(this.controller);
        const callbackSelect = this.controller.getCar.bind(this.controller);
        const updateTitleAndCarList = this.updateTitleAndCarList.bind(this);
        const carItems: HTMLElement[] = [];
        this.controller.getCars().forEach((car) => {
            carItems.push(
                new CarItem(
                    car,
                    this.formUpdate,
                    this.controller,
                    this,
                    updateTitleAndCarList,
                    callbackRemove,
                    callbackSelect
                ).getElement()
            );
        });

        this.carList.getElement().append(...carItems);
    }

    public renderPagination(): void {
        const pagination = new Pagination(this.controller, this);
        this.addInnerElement(pagination.getElement());
    }
}
