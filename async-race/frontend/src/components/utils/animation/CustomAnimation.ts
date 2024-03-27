export class CustomAnimation {
    private parentElement: HTMLElement | null = null;

    private carImage: HTMLElement | null = null;

    private animationFrameId: number | null = null;

    private distance: number = 0;

    private velocity: number = 0;

    private currentPosition: number = 0;

    private readonly initialPosition: number = 0;

    public setCustomAnimation(
        parentElement: HTMLElement,
        carImage: HTMLElement,
        distance: number,
        velocity: number
    ): CustomAnimation {
        this.parentElement = parentElement;
        this.carImage = carImage;
        this.distance = distance;
        this.velocity = velocity;
        return this;
    }

    public start(): void {
        if (!this.parentElement && !this.carImage) return;
        if (!this.distance && !this.velocity) return;
        const duration = (this.distance / this.velocity) * 500;
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
