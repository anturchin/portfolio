export class PuzzleImageCreator {
    public static createImages(
        rowIndex: number,
        dataIsSourceBlock: string,
        classNameImg: string,
        pathImage: string
    ): void {
        const puzzleCells = document.querySelectorAll<HTMLElement>(`${dataIsSourceBlock}`);
        const puzzleImage = document.querySelector<HTMLElement>(`.${classNameImg}`);
        const imageWidth = puzzleImage?.offsetWidth;
        const imageHeight = puzzleImage?.offsetHeight;

        puzzleCells.forEach((cell) => {
            const cellHeight = cell.offsetHeight;
            const cellWidth = cell.offsetWidth;
            const wordOriginal = cell.getAttribute('data-word-origin-id');
            const wordIndex = parseInt(wordOriginal || '', 10);

            const image = new Image();
            image.src = pathImage;
            image.alt = 'puzzle piece';
            image.draggable = false;
            image.classList.add('puzzle-image');

            let leftPosition = wordIndex * cellWidth;
            if (imageWidth && imageWidth !== null && leftPosition < -imageWidth) {
                leftPosition = -imageWidth;
            } else if (leftPosition > cellWidth) {
                leftPosition = cellWidth;
            }
            const topPosition = rowIndex * cellHeight;

            image.style.width = `${imageWidth}px`;
            image.style.height = `${imageHeight}px`;
            image.style.position = 'absolute';
            image.style.top = `${topPosition}px`;
            image.style.left = `-${leftPosition}px`;

            cell.append(image);
        });
    }
}
