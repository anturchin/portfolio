import { GarageController } from '../../../controller/garageController/GarageController';
import { View } from '../../View';
import { FormAdd } from './formAdd/FormAdd';
import { FormUpdate } from './formUpdate/FormUpdate';

import './GarageView.scss';

export class GarageView extends View {
    private controller: GarageController;

    private formAdd: FormAdd | null = null;

    private formUpdate: FormUpdate | null = null;

    constructor(controller: GarageController) {
        super({ tag: 'section', classNames: [] });
        this.controller = controller;
        this.render();
    }

    public render(): void {
        this.renderFormAdd();
        this.renderFormUpdate();
    }

    public renderFormAdd(): void {
        this.formAdd = new FormAdd();
        this.addInnerElement(this.formAdd.getElement());
    }

    public renderFormUpdate(): void {
        this.formUpdate = new FormUpdate();
        this.addInnerElement(this.formUpdate.getElement());
    }
}
