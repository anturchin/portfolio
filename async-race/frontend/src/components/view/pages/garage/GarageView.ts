import { GarageController } from '../../../controller/garageController/GarageController';
import { View } from '../../View';
import { ControlPanel } from './controlPanel/ControlPanel';
import { FormAdd } from './formAdd/FormAdd';
import { FormUpdate } from './formUpdate/FormUpdate';
import { SubTitle } from './subTitle/SubTitle';
import { Title } from './title/Title';

import './GarageView.scss';

export class GarageView extends View {
    private controller: GarageController;

    private formAdd: FormAdd | null = null;

    private formUpdate: FormUpdate | null = null;

    private controlPanel: ControlPanel | null = null;

    constructor(controller: GarageController) {
        super({ tag: 'section', classNames: [] });
        this.controller = controller;
        this.render();
    }

    public render(): void {
        this.renderFormAdd();
        this.renderFormUpdate();
        this.renderControlPanel();
        this.renderTitle();
        this.renderSubTitle();
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
}
