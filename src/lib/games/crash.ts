interface StartCallback {
    (): void
}

interface ProgressCallback {
    (currentMultiplier: number): void
}

interface EndCallback {
    (maxMultiplier: number, nextGame: Date): void
}

function sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export class Crash {
    onStart: StartCallback;
    onProgress: ProgressCallback;
    onEnd: EndCallback;

    crashed: boolean = false;
    currentMultiplier: number = 1.0;
    willCrashAt: number = Math.random() * 4
    nextDate: Date = new Date();

    intervalId: number = 0;

    constructor(onStart: StartCallback, onProgress: ProgressCallback, onEnd: EndCallback) {
        this.onStart = onStart;
        this.onProgress = onProgress;
        this.onEnd = onEnd;
    }

    stop() {
        this.crashed = true;
        clearInterval(this.intervalId);
    }

    start() {
        this.crashed = false;
        this.currentMultiplier = 1.0;
        this.willCrashAt = Math.random() * 4

        this.intervalId = setInterval(() => { this.gameLoop() }, 500)

        this.gameLoop()
    }

    private gameLoop() {
        this.currentMultiplier += 0.01;
        if (this.currentMultiplier > this.willCrashAt) {
            this.crashed = true;
            this.nextDate.setSeconds(new Date().getSeconds() + 8) // uusi peli alkaa 8s päästä
            this.onEnd(this.willCrashAt, this.nextDate);

            setTimeout(()=>{this.start()}, 8000);

            clearInterval(this.intervalId)
            return
        }

        this.onProgress(this.currentMultiplier);
    }
}
