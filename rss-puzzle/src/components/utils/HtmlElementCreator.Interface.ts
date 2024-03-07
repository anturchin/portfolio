import { HTMLElementCreator } from './HtmlElementCreator';

export interface IHtmlElementCreator {
    getElement(): HTMLElement;
    addInnerElement(innerElement: HTMLElement | HTMLElementCreator): void;
}
