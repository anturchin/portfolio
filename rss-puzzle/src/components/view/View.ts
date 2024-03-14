import { IElementParams } from '../utils/types';
import { HTMLElementCreator } from '../utils/HtmlElementCreator';
import { IView } from './View.interface';

export abstract class View implements IView {
    protected viewHtmlElementCreator: HTMLElementCreator;

    constructor(props: IElementParams) {
        this.viewHtmlElementCreator = this.createElement(props);
    }

    createElement(params: IElementParams): HTMLElementCreator {
        const viewHtmlElement = new HTMLElementCreator(params);
        return viewHtmlElement;
    }

    getElement(): HTMLElement {
        return this.viewHtmlElementCreator.getElement();
    }

    addInnerElement(innerElement: HTMLElement | HTMLElementCreator): void {
        this.viewHtmlElementCreator.addInnerElement(innerElement);
    }

    render(component?: IView): void {
        console.log(component);
    }
}
