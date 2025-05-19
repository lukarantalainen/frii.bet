interface StartCallback {
    (): void
}

interface ProgressCallback {
    (currentMultiplier: number): void
}

interface EndCallback {
    (maxMultiplier: number, nextGame: Date): void
}

export class Crash {
    onStart: StartCallback;
    onProgress: ProgressCallback;
    onEnd: EndCallback;

    crashed: boolean = false;
    currentMultiplier: number = 1.0;
    willCrashAt: number = Math.random() * 4
    nextDate: Date = new Date();
    inProgress: boolean = false;
    betAmount: number = 0;

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
        this.onStart();
        this.inProgress = true;

        this.intervalId = setInterval(() => { this.gameLoop() }, 300)

        this.gameLoop()
    }

    bet(amount: number): boolean {
        if(!this.inProgress) {
            this.betAmount = amount
        }
        return !this.inProgress  
    }

    cashOut(): boolean | number {
        if(!this.inProgress) {
            return false;
        } else {
            return this.betAmount * this.currentMultiplier;
        }
    }

    private gameLoop() {
        this.currentMultiplier += Math.random() / 20;
        if (this.currentMultiplier > this.willCrashAt) {
            this.crashed = true;
            this.inProgress = false;
            this.nextDate.setSeconds(new Date().getSeconds() + 8) // uusi peli alkaa 8s päästä
            this.onEnd(this.willCrashAt, this.nextDate);
            this.betAmount = 0;
            
            setTimeout(()=>{this.start()}, 8000);

            clearInterval(this.intervalId)
            return
        }

        if (this.currentMultiplier > 1.5) {
            this.currentMultiplier += Math.random() / 10;
        }

        this.onProgress(this.currentMultiplier);
    }
}