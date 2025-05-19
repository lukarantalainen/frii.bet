<script lang="ts">
import { balance } from "$lib/store";
  let betAmount = 0;
  let selectedNumber = 1;
  let diceRoll = 1;
  let message = "Pick a number and place your bet!";
  let rolling = false;

  function rollDice() {
    if (rolling || betAmount <= 0 || betAmount > $balance) {
      message = "Invalid bet.";
      return;
    }

    rolling = true;
    message = "Rolling...";

    setTimeout(() => {
      diceRoll = Math.floor(Math.random() * 6) + 1;

      if (diceRoll === selectedNumber) {
        const winnings = betAmount * 5;
        $balance = $balance + winnings;
        message = `🎉 You rolled a ${diceRoll} and won ${winnings}€!`;
      } else {
        $balance = $balance - betAmount;
        message = `❌ You rolled a ${diceRoll}. You lost ${betAmount}€.`;
      }

      rolling = false;
    }, 500);
  }
</script>

<style>
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 80px;
    font-family: sans-serif;
  }

  .dice {
    font-size: 8rem;
    margin: 20px;
  }

  button {
    padding: 1rem 2rem;
    font-size: 1.1rem;
    background: #1e96c8;
    color: white;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    margin-top: 20px;
  }

  button:disabled {
    background: #444;
    cursor: not-allowed;
  }

  input,
  select {
    padding: 0.5rem;
    font-size: 1rem;
    margin: 5px;
    border-radius: 6px;
    border: 1px solid #ccc;
    width: 100px;
  }

  .controls {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 10px;
  }

  p {
    font-size: 1.3rem;
    color: #333;
    margin-top: 20px;
  }
</style>

<div class="container">
  <h2>🎲 Dice Game</h2>
  <div class="controls">
    <div>
      <label for="bet">Bet (€)</label><br />
      <input
        id="bet"
        type="number"
        bind:value={betAmount}
        min="1"
        max={$balance}
      />
    </div>

    <div>
      <label for="number">Pick a number (1-6)</label><br />
      <select id="number" bind:value={selectedNumber}>
        {#each Array(6) as _, i}
          <option value={i + 1}>{i + 1}</option>
        {/each}
      </select>
    </div>
  </div>

  <button onclick={rollDice} disabled={rolling}>Place Bet</button>

  <p>{message}</p><br><br>
</div>