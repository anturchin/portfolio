export class Timer {
  constructor() {
    this.startTime = null;
    this.elapsedSeconds = null;
    this.intervalId = null;
    this.displayTime = null;
  }

  start(className) {
    this.reset();
    this.startTime = new Date().getTime();
    this.intervalId = setInterval(this.update.bind(this, className), 1000);
  }
  reset() {
    this.stop();
  }
  stop() {
    this.startTime = null;
    this.elapsedSeconds = null;
    this.displayTime = null;
    clearInterval(this.intervalId);
  }
  update(className) {
    const currentTime = new Date().getTime();
    this.elapsedSeconds = Math.floor((currentTime - this.startTime) / 1000);
    this.updateDisplayTime(className);
  }
  formatTime() {
    const minutes = Math.floor(this.elapsedSeconds / 60);
    const remainSeconds = this.elapsedSeconds % 60;
    const formatMinutes = String(minutes).padStart(2, "0");
    const formatSeconds = String(remainSeconds).padStart(2, "0");
    return { formatMinutes, formatSeconds };
  }
  updateDisplayTime(className) {
    this.displayTime = document.querySelector(`.${className}`);
    if (this.displayTime) {
      const { formatMinutes, formatSeconds } = this.formatTime();
      this.displayTime.textContent = "";
      this.displayTime.textContent = `${formatMinutes} : ${formatSeconds}`;
    }
  }
  saveState() {
    return {
      startTime: this.startTime,
      elapsedSeconds: this.elapsedSeconds,
    };
  }
  restoreState(state) {}
}
