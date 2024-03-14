import { View } from '../../../View';

import './GameCell.scss';

export class GameCell extends View {
    private offsetHeight: number;

    private offsetWidth: number;

    constructor(
        word: string,
        shuffledWords: string[],
        originWords: string[],
        index: number,
        sourceRowWidth: number,
        rowIndex: number,
        pathImage: string
    ) {
        super({
            tag: 'li',
            callback: null,
            classNames: ['game__cell'],
        });
        this.offsetHeight = 0;
        this.offsetWidth = 0;
        this.setupGameCell(word, shuffledWords, originWords, index, sourceRowWidth);
        this.createImages(rowIndex, pathImage);
        this.setEventListener();
    }

    private setEventListener(): void {
        const onCellClick = (evt: Event): void => {
            const clickedElement = evt.target as HTMLElement;
            const sourceRow = document.querySelector<HTMLElement>('.source__row');
            const gameRow = document.querySelector<HTMLElement>('.game__row');
            if (sourceRow && gameRow) {
                if (sourceRow.contains(clickedElement)) {
                    gameRow.appendChild(clickedElement);
                } else if (gameRow.contains(clickedElement)) {
                    sourceRow.appendChild(clickedElement);
                }
            }
        };
        this.viewHtmlElementCreator.getElement().addEventListener('click', onCellClick);
    }

    private createImages(rowIndex: number, pathImage: string): void {
        const puzzleImage = document.querySelector<HTMLElement>('.game__puzzle');
        const sourceRow = document.querySelector<HTMLElement>('.source__row');
        if (sourceRow) {
            this.offsetHeight = sourceRow.offsetHeight;
        }
        if (!puzzleImage) {
            console.error('Image not found in PuzzleImagesCreator.createImages');
            return;
        }

        const imageWidth = puzzleImage ? puzzleImage.offsetWidth : null;
        const imageHeight = puzzleImage ? puzzleImage.offsetHeight : null;
        const cell = this.viewHtmlElementCreator.getElement();
        const cellHeight = this.offsetHeight;
        const cellWidth = this.offsetWidth;
        const dataWordOriginId = cell.getAttribute('data-word-origin-id');
        const wordIndex = dataWordOriginId ? parseInt(dataWordOriginId, 10) : -1;

        const image = new Image();
        image.src = pathImage;
        image.alt = 'puzzle piece';
        image.draggable = false;
        image.classList.add('puzzle-image');

        let leftPosition = wordIndex * cellWidth;
        if (imageWidth !== null && leftPosition < -imageWidth) {
            leftPosition = -imageWidth;
        } else if (leftPosition > cellWidth) {
            leftPosition = cellWidth;
        }
        const topPosition = rowIndex * cellHeight;

        image.style.width = `${imageWidth}px`;
        image.style.height = `${imageHeight}px`;
        image.style.top = `${topPosition}px`;
        image.style.left = `-${leftPosition}px`;

        cell.appendChild(image);
    }

    private setupGameCell(
        word: string,
        shuffledWords: string[],
        originWords: string[],
        index: number,
        sourceRowWidth: number
    ): void {
        const totalCharacters = shuffledWords.reduce((total, _word) => total + _word.length, 0);
        const wordElement = this.viewHtmlElementCreator.getElement();
        wordElement.id = `${index + 1}`;
        wordElement.draggable = true;

        const wordLength = word.length;
        this.offsetWidth = (wordLength / totalCharacters) * sourceRowWidth;

        wordElement.style.width = `${this.offsetWidth}px`;
        wordElement.setAttribute('data-width', `${this.offsetWidth}`);
        wordElement.setAttribute('data-word', word);
        wordElement.setAttribute('data-word-origin', originWords[index]);
        wordElement.setAttribute('data-word-origin-id', `${originWords.indexOf(word)}`);

        wordElement.textContent = word;
    }
}
