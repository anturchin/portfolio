export class SoundManager {
  constructor() {
    this.blackCellSound = new Audio();
    this.xCellSound = new Audio();
    this.emptyCellSound = new Audio();
    this.victorySound = new Audio();
  }

  playBlackCellSound() {
    this.blackCellSound.play();
  }

  playXCellSound() {
    this.xCellSound.play();
  }

  playEmptyCellSound() {
    this.emptyCellSound.play();
  }

  playVictorySound() {
    this.victorySound.play();
  }

  pauseAllSounds() {
    this.blackCellSound.pause();
    this.xCellSound.pause();
    this.emptyCellSound.pause();
    this.victorySound.pause();
  }
}
