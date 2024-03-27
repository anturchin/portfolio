export class CustomAnimation {
    private parentElement: HTMLElement | null;

    private carImage: HTMLElement | null;

    private animationFrameId: number | null;

    private distance: number;

    private velocity: number;

    private currentPosition: number;

    private readonly initialPosition: number = 0;

    constructor() {
        this.parentElement = null;
        this.carImage = null;
        this.animationFrameId = null;
        this.distance = 0;
        this.velocity = 0;
        this.currentPosition = 0;
    }

    public setCustomAnimation(
        parentElement: HTMLElement | null,
        carImage: HTMLElement | null,
        distance: number,
        velocity: number
    ): CustomAnimation {
        this.parentElement = parentElement;
        this.carImage = carImage;
        this.distance = distance;
        this.velocity = velocity;
        return this;
    }

    public start(): CustomAnimation | null {
        if (!this.parentElement && !this.carImage) return null;
        if (!this.distance && !this.velocity) return null;
        const duration = (this.distance / this.velocity) * 1000;
        const startTime = performance.now();
        const parentWidth = this.parentElement ? this.parentElement.offsetWidth : 0;
        const imageCarWidth = this.carImage?.getAttribute('width');

        const imageWidth = parseInt(imageCarWidth || '', 10);

        const distanceDrive = parentWidth - imageWidth;

        const animate = (timestamp: number) => {
            const elapsed = timestamp - startTime;
            const progress = Math.min(elapsed / duration, 1);

            this.currentPosition = progress * this.distance;

            if (this.currentPosition > distanceDrive) {
                this.currentPosition = distanceDrive;
                this.stop();
            }

            if (this.carImage) this.carImage.style.left = `${this.currentPosition}px`;

            if (progress < 1) {
                this.animationFrameId = requestAnimationFrame(animate);
            }
        };

        this.animationFrameId = requestAnimationFrame(animate);

        return this;
    }

    public stop(): void {
        if (this.animationFrameId !== null) {
            cancelAnimationFrame(this.animationFrameId);
            this.animationFrameId = null;
        }
    }

    public reset(): void {
        this.stop();
        if (this.carImage) this.carImage.style.left = `${this.initialPosition}px`;
    }
}
