import { View } from '../../../View';
import { Input } from '../Input/Input';

import './FormUpdate.scss';

export class FormUpdate extends View {
    public inputText: Input | null = null;

    public inputColor: Input | null = null;

    private updateCarCallback?: (
        carId: number,
        name: string,
        color: string
    ) => void;

    constructor() {
        super({ tag: 'form' });
        this.setupForm();
    }

    private setupForm(): void {}
}
