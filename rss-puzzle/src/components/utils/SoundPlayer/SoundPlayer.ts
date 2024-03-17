export class SoundPlayer {
    public audio: HTMLAudioElement;

    constructor() {
        this.audio = new Audio();
    }

    public playSound(url: string): void {
        this.audio.src = url;
        this.audio.play();
    }
}
