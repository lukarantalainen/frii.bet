<script lang="ts">
    import Line from "$lib/components/line.svelte";
    import NumberFlow from "@number-flow/svelte";
    import { Crash } from "$lib/games/crash";
    import { onDestroy, onMount } from "svelte";
    import { balance } from "$lib/store";
    import { blur, fly, slide } from "svelte/transition";
    import { flip } from "svelte/animate";
    import { history } from "$lib/store";
    import Icon from "@iconify/svelte";

    let hasBet: boolean = $state(false);
    let gameOngoing: boolean = $state(false);
    // muuttujat, jotka päivittävät HTML aina kun niitä muutetaan
    // https://svelte.dev/docs/svelte/$state
    let currentValue: number = $state(1);
    let crashedAt: number = $state(1);
    let msUntilNextGame: number = $state(0);
    let hasCashout: boolean = $state(false);

    let isCrashed: boolean = $state(false);
    let nextGameStartTime: Date = $state(new Date());

    let amount: number = $state(0);

    function startInterval() {
        let interval = setInterval(() => {
            msUntilNextGame =
                nextGameStartTime.getTime() - new Date().getTime();
            if (msUntilNextGame < 0) {
                clearInterval(interval);
            }
        });
    }

    // suorittaa kun peli alkaa
    function crashStartHandler() {
        console.log("Game started!");
        gameOngoing = true;
        isCrashed = false;
    }

    // suorittaa itsensä joka 0.5s kun peli on käynnissä
    function crashProgressHandler(currentMultiplier: number) {
        console.log("Tämänhetkinen numero: " + currentMultiplier);

        // Pyöristetään lähimpään 2, koska 'floating point calculations' on aika outoja
        // esim 1.13 = 1.130000000001
        currentValue = Math.round(currentMultiplier * 100) / 100;
    }

    // Suorittaa kun peli loppuu (aka crashaa)
    // Uusi peli alkaa joka 8s.
    function crashEndHandler(maxMultiplier: number, nextGame: Date) {
        console.log("Päättönumero: " + maxMultiplier);
        console.log("Seuraava peli: " + nextGame);

        crashedAt = Math.round(maxMultiplier * 100) / 100;
        currentValue = 1;
        isCrashed = true;
        nextGameStartTime = nextGame;
        hasBet = false;
        hasCashout = false;
        $history = [crashedAt, ...$history.slice(0, 3)];
        gameOngoing = false;
        startInterval();
    }

    let crash: Crash = new Crash(
        crashStartHandler,
        crashProgressHandler,
        crashEndHandler,
    );

    // Jos haluat muuttaa crashaamiskohdan manuaalisesti, voit tehdä esim.
    // crash.willCrashAt = 4.5
    // Jos haluat sen crashaavan 4.5x multiplierissä.

    // Sveltekit käyttää "Prerenderöintiä" (eli renderöi sivun serverillä),
    // mutta emme halua toista peliä itse serverillä.
    // onMount() - callback suorittaa itsensä vain silloin, kun sivu ladataan.
    // https://svelte.dev/docs/svelte/lifecycle-hooks#onMount
    onMount(() => {
        crash.start();
    });

    // Poistaa loputtoman loopin kun nettisivu ei ole enää ladattu
    // https://svelte.dev/docs/svelte/lifecycle-hooks#onDestroy
    onDestroy(() => {
        crash.stop();
    });
</script>

<div id="container">
    <div class="input-column">
        <div id="message-box">
            {#if gameOngoing} 
                <p>Please wait for this round to finish</p>
            {:else}
                <p>Place your bets now!</p>
            {/if}
            <Line value={msUntilNextGame} />
        </div>  
        <div class="lower">
            <div class="group">
                <Icon
                    icon="ic:baseline-euro"
                    class="euro-icon"
                    style="position: absolute; left: 1rem; width: 1.25rem; height: 1.25rem; color: #ff4081; pointer-events: none;"
                />
                <input
                    class="input"
                    type="number"
                    placeholder="Your bet"
                    max={$balance}
                    bind:value={amount}
                />

            </div>

            <button
                class="betting"
                onclick={(_) => {
                    if($balance < amount) {
                        return;
                    }
                    $balance = $balance - amount;
                    crash.bet(amount);
                    hasBet = true;
                    }}
                disabled={hasBet || gameOngoing}>Submit bet</button
            >
            <button
                class="betting"
                onclick={(_) => {
                    let result = crash.cashOut()
                    if(!result) {
                        console.error("Cashout precondition failed");
                        return
                    }
                    $balance = $balance + result;
                    hasCashout = true;
                    
                }}
                disabled={isCrashed || !hasBet || hasCashout}>Cashout</button
            >
        </div>

        <p style="color: black;">Crash history</p>
        <div class="latest">
            {#each $history as amount}
                <div class={`box ${amount > 2 ? "green" : amount > 1.5 ? "yellow" : "gray"}`}>
                    <p>{amount}x</p>
                </div>
            {/each}
        </div>

    </div>

    <div id="game">
        {#if isCrashed}
            <h1 id="crash">Crashed at {crashedAt}x</h1>
        {:else}
            <h1><NumberFlow value={currentValue}/>x</h1> 
        {/if}
    </div>
</div>

<style>
    #container {
        display: grid;
        grid-template-columns: 300px 1fr;
        gap: 8px;
        margin: 0 8px 0 100px;
        height: 80vh;
    }
    
    .game {
        display: flex;
        flex-direction: column;
        height: 80vh;
        width: 80vw;
        background-color: black;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
    }

    .balance {
        color: black;
    }

    .input-column {
        background-color: white;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        gap: 2rem;
        align-items: center;
        justify-content: center;
    }

    p {
        color: white;
    }

    #crash {
        color: red;
    }

    .group {
        display: flex;
        line-height: 30px;
        align-items: center;
        position: relative;
        max-width: 200px;
    }

    .input {
        width: 100%;
        height: 45px;
        line-height: 30px;
        padding: 0 5rem;
        padding-left: 3rem;
        border: 2px solid transparent;
        border-radius: 0.5rem;
        outline: none;
        background-color: #f8fafc;
        color: #0d0c22;
        transition: 0.5s ease;
    }

    .input::placeholder {
        color: #94a3b8;
    }
    .lower {
        margin-bottom: 4em;
    }

    .lower button {
        margin-top: 2em;
        width: 100%;
    }

    .input:focus,
    input:hover {
        outline: none;
        border-color: rgba(129, 140, 248);
        background-color: #ffffff;
        box-shadow: 0 0 0 5px rgb(129 140 248 / 30%);
    }

    .input:disabled {
        border-color: red;
    }

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    .betting {
        background-image: linear-gradient(-180deg, #37aee2 0%, #1e96c8 100%);
        border-radius: 0.5rem;
        color: #ffffff;
        display: flex;
        font-size: 16px;
        justify-content: center;
        padding: 1rem 1.75rem;
        width: 80%;
        border: 0;
    }

    .betting:hover {
        background-image: linear-gradient(-180deg, #1d95c9 0%, #17759c 100%);
    }

    .betting:disabled {
        background-image: linear-gradient(-180deg, #414141 0%, #252525 100%);
    }

    #message-box {
        margin-top: 1em;
        margin-bottom: auto;
        background-color: #37aee2;
        border-radius: 0.5rem;
        width: 80%;
        height: 100px;
        display: flex;
        flex-direction: column;
        padding: 0.5em;
        align-items: center;
        justify-content: center;
        text-align: center;
    }

    #game {
        display: flex;
        flex-direction: column;
        background-color: black;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 10px;
    }

    @media screen and (max-width: 600px) {
        #container {
            display: grid;
            grid-template-columns: 1fr 1fr;
            justify-content: space-between;
            margin-left: 8px;
        }

        .input-column {
            padding: 1rem;
        }

    }

    .game {
        margin-bottom: 10px;
    }

    .latest {
        display: flex;
        flex-direction: row;
        width: 100%;
        height: auto;
    }

    .box {
        display: flex;
        background-color: black;
        width: 10vw;
        aspect-ratio: 3/2;
        justify-content: center;
        margin: 2px;
        border-radius: 12px;
    }
    .box p {
        color: white;
        margin: auto;
    }
    .green {
        background-color: green;
    }
    .yellow {
        background-color: orange;
    }
    .gray {
        background-color: gray;
    }
</style>
