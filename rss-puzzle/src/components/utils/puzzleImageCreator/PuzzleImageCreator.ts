import { GameController } from '../../controller/GameController';

export class PuzzleImageCreator {
    public static createImages(
        rowIndex: number,
        dataIsSourceBlock: string,
        classNameImg: string,
        pathImage: string,
        controller: GameController
    ): void {
        const puzzleCells = document.querySelectorAll<HTMLElement>(`${dataIsSourceBlock}`);
        const puzzleImage = document.querySelector<HTMLElement>(`.${classNameImg}`);
        const imageWidth = puzzleImage?.offsetWidth;
        const imageHeight = puzzleImage?.offsetHeight;

        const originalWords = controller.getTextExample()?.split(' ');
        const shuffledWords = [...puzzleCells].map((cell) => cell);
        const sortedCells: HTMLElement[] = [];
        const remainingItems = shuffledWords.slice();

        if (originalWords) {
            originalWords.forEach((item) => {
                const tmpWords: string[] = [];
                remainingItems.forEach((sell) => tmpWords.push(sell.textContent || ''));
                const index = tmpWords.indexOf(item);
                if (index !== -1) {
                    sortedCells.push(remainingItems[index] || '');
                    remainingItems.splice(index, 1);
                }
            });
        }

        let previousCellWidth = 0;

        sortedCells.forEach((cell) => {
            const image = new Image();
            image.src = pathImage;
            image.alt = 'puzzle piece';
            image.draggable = false;
            image.classList.add('puzzle-image');

            const topPosition = rowIndex * cell.offsetHeight;

            image.style.width = `${imageWidth}px`;
            image.style.height = `${imageHeight}px`;
            image.style.position = 'absolute';
            image.style.top = `${topPosition}px`;
            image.style.left = `-${previousCellWidth}px`;

            cell.append(image);

            previousCellWidth += cell.offsetWidth;
        });
    }
}
