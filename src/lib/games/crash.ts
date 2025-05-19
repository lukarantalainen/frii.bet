interface StartCallback {
    (): void
}

interface ProgressCallback {
    (currentMultiplier: number): void
}

interface EndCallback {
    (maxMultiplier: number, nextGame: Date): void
}

function decideCrash() {
    let r = Math.random();
    
    if (r < 0.4) {
        return +(Math.random() * (1.24 - 1.00) + 1.00).toFixed(2);
    }
    if (r < 0.65) {
        return +(Math.random() * (1.7 - 1.24) + 1.15).toFixed(2);
    }
    if (r < 0.9) {
        return +(Math.random() * (3.2 - 1.7) + 1.4).toFixed(2);
    }
    if (r < 0.985) {
        return +(Math.random() * (12 - 3.2) + 1.9).toFixed(2);
    }
    if (r < 0.9995) {
        return +(Math.random() * (100 - 12) + 5).toFixed(2);
    }
    return +(Math.random() * (600 - 50) + 50).toFixed(2);
}

export class Crash {
    onStart: StartCallback;
    onProgress: ProgressCallback;
    onEnd: EndCallback;

    crashed: boolean = false;
    currentMultiplier: number = 1.0;
    willCrashAt: number = decideCrash();
    nextDate: Date = new Date();
    inProgress: boolean = false;
    betAmount: number = 0;
    stopped: boolean = false;

    intervalId: number = 0;

    constructor(onStart: StartCallback, onProgress: ProgressCallback, onEnd: EndCallback) {
        this.onStart = onStart;
        this.onProgress = onProgress;
        this.onEnd = onEnd;
    }

    stop() {
        this.crashed = true;
        this.stopped = true;
        clearInterval(this.intervalId);
    }

    start() {
        this.crashed = false;
        this.currentMultiplier = 1.0;
        this.willCrashAt = decideCrash();
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

    cashOut(): false | number {
        if(!this.inProgress) {
            return false;
        } else {
            let profit = this.betAmount * this.currentMultiplier;
            this.betAmount = 0;
            return profit
        }
    }

    private gameLoop() {
        if(this.stopped) {
            return
        }
        this.currentMultiplier = this.currentMultiplier * 1.01;
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