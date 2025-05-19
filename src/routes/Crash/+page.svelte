<script lang="ts">
        import Icon from '@iconify/svelte';
        import { Crash } from '$lib/games/crash';
        import { onDestroy, onMount } from 'svelte';


        // muuttujat, jotka päivittävät HTML aina kun niitä muutetaan 
        // https://svelte.dev/docs/svelte/$state
        let currentValue: number = $state(1);
        let crashedAt: number = $state(1);
        let balance: number = $state(1000);
        let isCrashed: boolean = $state(false)
        let nextGameStartTime: Date = $state(new Date());
        let amount: number = $state(0);


        // suorittaa kun peli alkaa
        function crashStartHandler() { 
            console.log("Game started!")
            canBet = false;
            isCrashed = false;
            canProfit = true;
            profitTaken = false;
            betMessage = "";
           
        }

        // suorittaa itsensä joka 0.5s kun peli on käynnissä
        function crashProgressHandler(currentMultiplier: number) {
            console.log("Tämänhetkinen numero: " + currentMultiplier)
            
            if (!hasBet) {
                betMessage ="Wait for the next round."
            }
            // Pyöristetään lähimpään 2, koska 'floating point calculations' on aika outoja
            // esim 1.13 = 1.130000000001
            currentValue = Math.round(currentMultiplier * 100) / 100;
            currentProfit = Math.round(bet * currentValue * 100) / 100;
        }

        // Suorittaa kun peli loppuu (aka crashaa)
        // Uusi peli alkaa joka 8s.
        function crashEndHandler(maxMultiplier: number, nextGame: Date) { 
            console.log("Päättönumero: " + maxMultiplier)
            console.log("Seuraava peli: " + nextGame)

            crashedAt = Math.round(maxMultiplier*100)/100;
            currentValue = 1;
            isCrashed = true;
            betMessage = "Place your bets."
            nextGameStartTime = nextGame

                if (!profitTaken && bet > 0) {
                betMessage = "You lost your bet.";
            }

            profitTaken = false;
            canBet = true;
            canProfit = false;
            hasBet = false;



        }

        let bet: number = $state(0);
        let betString: string = $state("");

        let crash: Crash = new Crash(crashStartHandler,crashProgressHandler, crashEndHandler);

        // Jos haluat muuttaa crashaamiskohdan manuaalisesti, voit tehdä esim.
        // crash.willCrashAt = 4.5
        // Jos haluat sen crashaavan 4.5x multiplierissä.


        // Sveltekit käyttää "Prerenderöintiä" (eli renderöi sivun serverillä), 
        // mutta emme halua toista peliä itse serverillä. 
        // onMount() - callback suorittaa itsensä vain silloin, kun sivu ladataan.
        // https://svelte.dev/docs/svelte/lifecycle-hooks#onMount
        onMount(() => { 
            crash.start();
        })


        // Poistaa loputtoman loopin kun nettisivu ei ole enää ladattu
        // https://svelte.dev/docs/svelte/lifecycle-hooks#onDestroy
        onDestroy(() => {
            crash.stop();
        })

       let betMessage: string = $state("Wait for next round");

       let currentProfit: number = $state(0)

       function betSubmit() {
        if (!canBet || bet <= 0 || bet > balance){
            betMessage = "You can't bet more than you have.";
            return;
        }  
            balance -= bet;
            betMessage = "Your bet has been submitted.";
            hasBet = true;
            canProfit = false;
            profitTaken = false; 
        }

        let profitTaken: boolean = $state(false);


        function takeProfit() {
            if (!hasBet || profitTaken) return;

        const winnings = Math.round(bet * currentValue * 100) / 100;
        balance += winnings;
        betMessage = `You won ${winnings}€!`;
        profitTaken = true;
        canProfit = false;
        hasBet = true;
        canBet = false;
        

        if (!profitTaken) {
           betMessage = "You lost your bet.";
        }
        }

        let canBet: boolean = $state(true);

        let canProfit: boolean = $state(true);

        let hasBet: boolean = $state(false);

        function resetBalance() {
            balance = 1000;
        }


        
</script>

<div id="container">
    <div class="input-column">

        <div id="message-box">
            {#if betMessage}
                <p id="message">{betMessage}</p>
            {/if}
        </div>

        <p class="balance"><strong>💳Balance:</strong> {balance.toFixed(2)}€</p>

        <div class=group>
            <Icon icon="ic:baseline-euro" class="euro-icon" style="position: absolute; left: 1rem; width: 1.25rem; height: 1.25rem; color: #ff4081; pointer-events: none;"/>
            <input class="input" type="number" id="bet" name="bet" placeholder="Your bet" max={balance} bind:value={betString} oninput={() => {
                bet = parseFloat(betString);
                if (isNaN(bet)) bet = 0;
            }}
             disabled={!canBet}>
        </div>
        
        <button class="betting" onclick={betSubmit} disabled={!canBet || hasBet}>Submit bet</button>
        
        <button class="betting" onclick={takeProfit} disabled={!canProfit || !hasBet || profitTaken}>Take profit: {currentProfit}€ ({currentValue}x)</button>

        <button class="betting" onclick={resetBalance}> Reset balance</button>
        

    </div>
    
    <div id="game">    
        {#if isCrashed} 
            <h1 id="crash">oops! crashed at {crashedAt}x</h1>
            <p>Next game will start: {nextGameStartTime}</p>
        {:else}
            <h1 id=value>{currentValue}x</h1>
        {/if}
    
    </div>

</div>

<style>

.balance {
    color: black;
}

#container {
    display: grid;
    grid-template-columns: 300px 1fr;
    gap: 8px;
    margin: 100px 8px 0 100px;
    height: 90vh;
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
  border-radius: .5rem;
  outline: none;
  background-color: #f8fafc;
  color: #0d0c22;
  transition: .5s ease;
}

.input::placeholder {
  color: #94a3b8;
}

.input:focus, input:hover {
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
    background-image: linear-gradient(-180deg, #37aee2 0%, #1E96C8 100%);
    border-radius: .5rem;
    color: #FFFFFF;
    display: flex;
    font-size: 16px;
    justify-content: center;
    padding: 1rem 1.75rem;
    width: 80%;
    border: 0;
}

.betting:hover {
  background-image: linear-gradient(-180deg, #1D95C9 0%, #17759C 100%);
}

.betting:disabled {

    background-image: linear-gradient(-180deg, #414141 0%, #252525 100%);
}

#message-box {
    position: absolute;
    top: 0;
    margin-top: 1em;
    background-color: #37aee2;
    border-radius: .5rem;
    width: 250px;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
}

#message {
    font-size: 18px;
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

@media screen and (max-width: 990px) {
#container {
display: grid;
grid-template-columns: 1fr 1fr;
justify-content: space-between;
}
}


</style>