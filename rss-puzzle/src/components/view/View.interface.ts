import { HTMLElementCreator } from '../utils/HtmlElementCreator';
import { IElementParams } from '../utils/types';

export interface IView {
    createElement: (params: IElementParams) => HTMLElementCreator;
    getElement: () => HTMLElement;
    render: () => void;
    destroy: () => void;
}
