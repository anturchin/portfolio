export class Timer {
  constructor() {
    this.startTime = null;
    this.elapsedSeconds = null;
    this.intervalId = null;
  }
  start() {
    this.startTime = new Date().getTime();
    this.intervalId = setInterval(this.update.bind(this), 1000);
  }
  stop() {
    clearInterval(this.intervalId);
  }
  update() {
    const currentTime = new Date().getTime();
    this.elapsedSeconds = Math.floor((currentTime - this.startTime) / 1000);
    console.log(`время: ${this.formatTime(this.elapsedSeconds)}`);
  }
  formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainSeconds = seconds % 60;
    const formatMinutes = String(minutes).padStart(2, "0");
    const formatSeconds = String(remainSeconds).padStart(2, "0");
    return `${formatMinutes} : ${formatSeconds}`;
  }
}
