import { WinnerController } from '../../../controller/winnerController/WinnerController';
import { View } from '../../View';

import './WinnerView.scss';

export class WinnerView extends View {
    private controller: WinnerController;

    constructor(controller: WinnerController) {
        super({ tag: 'section' });
        this.controller = controller;
    }
}
