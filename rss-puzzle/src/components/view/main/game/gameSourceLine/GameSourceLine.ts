import { View } from '../../../View';

import './GameSourceLine.scss';

export class GameSourceLine extends View {
    public onCellsChecked?: () => void;

    constructor(onCellsChecked: () => void) {
        super({ tag: 'ul', callback: null, classNames: ['source__row'] });
        this.onCellsChecked = onCellsChecked;
        this.onDragOverGame = this.onDragOverGame.bind(this);
        this.onDropGame = this.onDropGame.bind(this);
        this.setEventListener();
    }

    private setEventListener(): void {
        this.viewHtmlElementCreator.getElement().addEventListener('dragover', this.onDragOverGame);
        this.viewHtmlElementCreator.getElement().addEventListener('drop', this.onDropGame);
    }

    private onDragOverGame(event: DragEvent): void {
        event.preventDefault();
    }

    private onDropGame(event: DragEvent): void {
        event.preventDefault();
        const id = event.dataTransfer?.getData('id');
        const dragElement = document.getElementById(`${id}`);
        const target = event.target as HTMLElement;
        if (target && dragElement) {
            dragElement.setAttribute('data-is-result-block', 'false');
            const parent = this.viewHtmlElementCreator.getElement();
            const targetIndex = Array.from(parent.children).indexOf(target);
            const dragIndex = Array.from(parent.children).indexOf(dragElement);
            if (parent === dragElement?.parentNode && parent === target?.parentNode) {
                if (dragElement && target) {
                    if (parent.contains(dragElement)) {
                        parent.removeChild(dragElement);
                    }
                    if (parent.contains(target)) {
                        parent.removeChild(target);
                    }
                }
                if (dragIndex < targetIndex) {
                    parent.insertBefore(target, parent.children[dragIndex]);
                    parent.insertBefore(dragElement, parent.children[targetIndex]);
                } else {
                    parent.insertBefore(dragElement, parent.children[targetIndex]);
                    parent.insertBefore(target, parent.children[dragIndex]);
                }
            } else {
                parent.appendChild(dragElement);
            }
            this.onCellsChecked?.();
        }
    }
}
