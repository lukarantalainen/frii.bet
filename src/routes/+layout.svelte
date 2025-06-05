<script lang="ts">
  import { page } from "$app/stores";
  import Icon from "@iconify/svelte";
  import { balance } from "$lib/store";

  let unconfirmedBal = $state(0);

  $effect(() => {
    unconfirmedBal = Math.round($balance*100)/100;
  })

  let showDropdown = $state(false);

  function toggleDropdown() {
    showDropdown = !showDropdown;
  }


</script> 

<nav id="nav-left">
  <div>
    <a href="/Crash" class:selected={$page.url.pathname === "/Crash"}>
      <Icon icon="proicons:graph" style="width: 70px; height:70px;" />
      <span class="nav-label">Crash</span>
    </a>
  </div>

    <div >
    <a href="/Dice" class:selected={$page.url.pathname === '/Dice'}>
      <Icon icon="material-symbols:casino" style="width: 70px; height:70px;" />
      <span class="nav-label">Dice</span>
    </a>
  </div>
</nav>

<nav id="nav-top">
  <div class="logo">
    <a href="/" class:selected={$page.url.pathname === "/"}>
      <h1>bet.frii.site</h1>
    </a>
  </div>
    <div id="mobile-nav">
  <div id="dropdown-menu">
  <button class="dropdown-button" type="button" onclick={toggleDropdown}>
    <Icon icon="cuida:dropdown-outline" style="width: 25px; height: 25px;" />
  </button>
  

  {#if showDropdown}
  <div id="dropdown-items">
    <a href="/Crash"><Icon icon="proicons:graph" /><span class="nav-label">&nbsp;Crash</span></a>
    <a href="/Dice"><Icon icon="material-symbols:casino"/><span class="nav-label">&nbsp;Dice</span></a>
    <a href="/About"><Icon icon="mdi:biography"/><span class="nav-label">&nbsp;About</span></a>
  </div>
  {/if}

  </div>
</div>
  
  <div class="selector">
    <p>Balance: €<input type=number bind:value={unconfirmedBal} /></p>
    <button onclick={_ => $balance = unconfirmedBal}>Set</button>
  </div>

</nav>



<slot />

<style>

  #nav-left {
    position: fixed;
    top: 0;
    left: 0;
    width: 60px;
    height: 100%;
    background-color: #42baff;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 1rem;
    margin-top: 80px;
  }

  #nav-top {
    position: fixed;
    top: 0;
    width: 100vw;
    height: 60px;
    display: flex;
    justify-content: left;
    gap: 2rem;
    background-color: #42baff;
    text-align: center;
    align-items: center;
    padding: 1rem;
    z-index: 3;
  }

  nav a {
    text-decoration: none;
    color: white;
  }

  nav a:hover {
    color: #ff4081;
    transition: color 0.2s ease;
  }

  a.selected {
    color: #ff4081;
    font-weight: bold;
  }

  .logo {
    margin: 1em 0em;
    font-size: large;
  }

  :global(body) {
    font-family: "Montserrat";
    color: #fffbfc;
    background-color: #36c6ff;
    position: relative;
    margin: 0;
    margin-top: 100px;
    box-sizing: border-box;
  }

    #mobile-nav {
    display: none;
  }

  #dropdown-menu {
    position: relative;
  }

  #dropdown-items {
    position: absolute;
    margin-top: 1rem;
    margin-left: -1.7rem;
    display: flex;
    flex-direction: column;
    background-color: #5AC3FF;
    padding: 1rem 1rem 1rem 2rem;
    border-radius: 1rem;
  }

  #dropdown-items a {
    display: flex;
    align-items: center;
    text-decoration: none;
    padding-top: 0.3rem;
    margin-left: -1rem;
  }

  .dropdown-button {
    border-radius: 0.5rem;
    width: 4rem;
    color: #ffffffde;
    border-color: transparent;
    background-color: rgba(107, 201, 255, 0.575);
  }

  .dropdown-button:active {
    color: white;
  }

  .selector {
    display: flex;
    align-items: center;
  }

  .selector input {
    width: 25%;
    padding: 0.5rem 0.5rem;
    margin-left: 0.5rem;
    border: 2px solid transparent;
    font-size: 14px;
    line-height: 1;
    border-radius: 0.5rem;
    outline: none;
    background-color: #f8fafc;
    color: #0d0c22;
    transition: 0.5s ease;
  }


  .selector button {
    width: 25%;
    padding: 0.6rem 0.5rem;
    border: 2px solid transparent;
    border-radius: 0.5rem;
    font-size: 14px;
    line-height: 1;
    margin-left: -1.5rem;
    color: #111827;
    outline: none;
    background-color: #f8fafc;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
    cursor: pointer;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    transition: 0.1s ease;
  }

  .selector button:hover {
    background-color: rgb(233, 233, 233);
  }

  .selector button:active {
    background-color: #bdbdbd;
  }


  @media screen and (max-width: 600px) {
    #nav-left {
      display: none;
    }
    #mobile-nav {
      display: block;
    }
  }
</style>
