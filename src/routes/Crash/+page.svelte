<script lang="ts">
        import Icon from '@iconify/svelte';

        import { Crash } from '$lib/games/crash';
        import { onDestroy, onMount } from 'svelte';


        // muuttujat, jotka päivittävät HTML aina kun niitä muutetaan 
        // https://svelte.dev/docs/svelte/$state
        let currentValue: number = $state(1);
        let crashedAt: number = $state(1);

        let isCrashed: boolean = $state(false)
        let nextGameStartTime: Date = $state(new Date());


        // suorittaa kun peli alkaa
        function crashStartHandler() { 
            console.log("Game started!")

            isCrashed = false;
        }

        // suorittaa itsensä joka 0.5s kun peli on käynnissä
        function crashProgressHandler(currentMultiplier: number) {
            console.log("Tämänhetkinen numero: " + currentMultiplier)
            

            // Pyöristetään lähimpään 2, koska 'floating point calculations' on aika outoja
            // esim 1.13 = 1.130000000001
            currentValue = Math.round(currentMultiplier * 100) / 100;
        }

        // Suorittaa kun peli loppuu (aka crashaa)
        // Uusi peli alkaa joka 8s.
        function crashEndHandler(maxMultiplier: number, nextGame: Date) { 
            console.log("Päättönumero: " + maxMultiplier)
            console.log("Seuraava peli: " + nextGame)

            crashedAt = Math.round(maxMultiplier*100)/100;
            currentValue = 1;
            isCrashed = true;
            nextGameStartTime = nextGame

        }


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
        
</script>


<div class="game">    
    {#if isCrashed} 
        <h1>oops! crashed at {crashedAt}x</h1>
        <p>Next game will start: {nextGameStartTime}</p>
    {:else}
        <h1 id=value>{currentValue}x</h1>
    {/if}
   
</div>

<style>

.game {
    display: flex; 
    flex-direction: column;
    height: 80vh;
    background-color: black;
    display: flex;
    justify-content: center;
    align-items: center;
}

.game {
    margin-bottom: 10px;
}

</style>