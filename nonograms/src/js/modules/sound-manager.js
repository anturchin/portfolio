import blackCellSound from "../../assets/audio/click.mp3";
import xCellSound from "../../assets/audio/click_two.mp3";
import victorySound from "../../assets/audio/finish.mp3";

export class SoundManager {
  constructor() {
    this.blackCellSound = new Audio(blackCellSound);
    this.xCellSound = new Audio(xCellSound);
    this.victorySound = new Audio(victorySound);
  }

  playBlackCellSound() {
    this.blackCellSound.play();
  }

  playXCellSound() {
    this.xCellSound.play();
  }

  playVictorySound() {
    this.victorySound.play();
  }

  pauseAllSounds() {
    this.blackCellSound.pause();
    this.xCellSound.pause();
    this.victorySound.pause();
  }
}
