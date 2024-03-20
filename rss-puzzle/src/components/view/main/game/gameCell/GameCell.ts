import { TotalCharacters } from '../../../../helpers/TotalCharacters';
import { View } from '../../../View';

import './GameCell.scss';

export class GameCell extends View {
    public onCellsChecked?: () => void;

    constructor(word: string, index: number, originalText: string, onCellsChecked: () => void) {
        super({
            tag: 'li',
            callback: null,
            classNames: ['game__cell', 'word-animation'],
        });
        this.onCellsChecked = onCellsChecked;
        this.onCellClick = this.onCellClick.bind(this);
        this.onDragStartCell = this.onDragStartCell.bind(this);
        this.onDragEndCell = this.onDragEndCell.bind(this);
        this.setupGameCell(word, index, originalText);
        this.setupEventListener();
    }

    public removeAttributes(): void {
        const cell = this.viewHtmlElementCreator.getElement();
        cell.draggable = false;
        cell.removeAttribute('id');
        cell.removeAttribute('data-width');
        cell.removeAttribute('data-word');
        cell.removeAttribute('data-word-origin');
        cell.removeAttribute('data-word-origin-id');
        cell.removeAttribute('data-is-result-block');
    }

    public removeEventListener(): void {
        this.removeAttributes();
        this.viewHtmlElementCreator.getElement().removeEventListener('click', this.onCellClick);
        this.viewHtmlElementCreator
            .getElement()
            .removeEventListener('dragstart', this.onDragStartCell);
        this.viewHtmlElementCreator.getElement().removeEventListener('dragend', this.onDragEndCell);
    }

    private setupEventListener(): void {
        this.viewHtmlElementCreator.getElement().addEventListener('click', this.onCellClick);
        this.viewHtmlElementCreator
            .getElement()
            .addEventListener('dragstart', this.onDragStartCell);
        this.viewHtmlElementCreator.getElement().addEventListener('dragend', this.onDragEndCell);
    }

    private onCellClick(evt: Event): void {
        const clickedElement = evt.target as HTMLElement;
        const isInvalidOrValid = clickedElement.classList.contains('invalid');
        const isValid = clickedElement.classList.contains('valid');

        if (isInvalidOrValid || isValid) {
            return;
        }

        const sourceRow = document.querySelector<HTMLElement>('.source__row');
        const gameRow = document.querySelector<HTMLElement>('.game__row.active');
        if (sourceRow && gameRow) {
            if (sourceRow.contains(clickedElement)) {
                clickedElement.setAttribute('data-is-result-block', 'true');
                gameRow.appendChild(clickedElement);
            } else if (gameRow.contains(clickedElement)) {
                clickedElement.setAttribute('data-is-result-block', 'false');
                sourceRow.appendChild(clickedElement);
            }
            this.onCellsChecked?.();
        }
    }

    private onDragStartCell(event: DragEvent): void {
        const cell = this.viewHtmlElementCreator.getElement();
        const isInvalidOrValid = cell.classList.contains('invalid');
        const isValid = cell.classList.contains('valid');

        if (isInvalidOrValid || isValid) {
            event.preventDefault();
            return;
        }
        event.dataTransfer?.setData('id', this.viewHtmlElementCreator.getElement().id);
        cell.classList.add('over');
    }

    private onDragEndCell(event: DragEvent): void {
        const cell = this.viewHtmlElementCreator.getElement();
        const isInvalidOrValid = cell.classList.contains('invalid');
        const isValid = cell.classList.contains('valid');

        if (isInvalidOrValid || isValid) {
            event.preventDefault();
            return;
        }
        cell.classList.remove('over');
    }

    private setupGameCell(word: string, index: number, originalText: string): void {
        const sourceRow: HTMLElement | null = document.querySelector('.source__row');
        if (sourceRow) {
            const sourceRowWidth = sourceRow.offsetWidth;
            const totalCharacters = TotalCharacters.sum(originalText);
            const cell = this.viewHtmlElementCreator.getElement();
            cell.id = `${index + 1}`;
            cell.draggable = true;

            const wordLength = word.length;
            const proportionalWidth = (wordLength / totalCharacters) * sourceRowWidth;
            cell.style.width = `${proportionalWidth}px`;
            cell.setAttribute('data-width', `${proportionalWidth}`);
            cell.setAttribute('data-is-result-block', 'false');

            cell.innerHTML = `<span>${word}</span>`;
        }
    }
}
