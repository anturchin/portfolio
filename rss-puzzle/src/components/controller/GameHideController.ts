import { IView } from '../view/View.interface';
import { Game } from '../view/main/game/Game';

export class GameHideController {
    private game: Game;

    constructor(game: Game) {
        this.game = game;
    }

    public disabledButtonContinue(): void {
        (this.game.buttonContinue?.getElement() as HTMLButtonElement).disabled = true;
    }

    public activeButtonContinue(): void {
        (this.game.buttonContinue?.getElement() as HTMLButtonElement).disabled = false;
    }

    public disabledButtonAutoComplete(): void {
        (this.game.buttonAutoComplete?.getElement() as HTMLButtonElement).disabled = true;
    }

    public activeButtonAutoComplete(): void {
        (this.game.buttonAutoComplete?.getElement() as HTMLButtonElement).disabled = false;
    }

    public disabledButtonCheck(): void {
        (this.game.buttonCheck?.getElement() as HTMLButtonElement).classList.remove(
            'button-animation'
        );
        (this.game.buttonCheck?.getElement() as HTMLButtonElement).disabled = true;
    }

    public activeButtonCheck(): void {
        (this.game.buttonCheck?.getElement() as HTMLButtonElement).classList.add(
            'button-animation'
        );
        (this.game.buttonCheck?.getElement() as HTMLButtonElement).disabled = false;
    }

    public hideButtonCheck(): void {
        const button = this.game.buttonCheck;
        if (button) this.hideButton(button);
    }

    public hideButtonContinue(): void {
        const button = this.game.buttonContinue;
        if (button) this.hideButton(button);
    }

    public showButtonCheck(): void {
        const button = this.game.buttonCheck;
        if (button) this.showButton(button);
    }

    public showButtonContinue(): void {
        const button = this.game.buttonContinue;
        if (button) this.showButton(button);
    }

    public hideButton(element: IView): void {
        const button = element.getElement();
        if (button) {
            button.classList.remove('show');
            button.classList.add('hide');
        }
    }

    public showButton(element: IView): void {
        const button = element.getElement();
        if (button) {
            button.classList.add('show');
            button.classList.remove('hide');
        }
    }

    public hideHintBlock(): void {
        const hintBlock = document.querySelector<HTMLElement>('.hint');
        if (hintBlock) {
            hintBlock.style.display = 'none';
        }
    }

    public showHintBlock(): void {
        const hintBlock = document.querySelector<HTMLElement>('.hint');
        if (hintBlock) {
            hintBlock.style.display = 'flex';
        }
    }
}
