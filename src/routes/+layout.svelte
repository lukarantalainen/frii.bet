<script lang="ts">
import { page } from '$app/stores';
import Icon from '@iconify/svelte';
</script>

<!-- svelte-ignore css_unused_selector -->
<title>
  frii.bet
</title>

<nav>
  <div class="logo">
    <a href="/" class:selected={$page.url.pathname === '/'}>
      <img src="/friibet.png" alt=FRII.BET style="margin-right: 0.5rem; width: 4vw" />
    </a>
  </div>

  <div >
    <a href="/p2" class:selected={$page.url.pathname === '/p2'}>
      <Icon icon="proicons:graph" style="margin-right: 0.5rem;width: 50px; height:50px;" />
      <span class="nav-label">Crash</span>
    </a>
    
  </div>

  <div >
    <a href="/p3" class:selected={$page.url.pathname === '/p3'}>
      <Icon icon="ic:twotone-casino" style="margin-right: 0.5rem;width: 50px; height:50px;" />
      <span class="nav-label">Dice</span>
    </a>


  </div>

</nav>

<style>
  nav {
    position: fixed;
    top: 0;
    left: 0;
    width: 4vw;
    height: 100vh;
    background-color: rgb(0, 162, 255);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1em;
    box-shadow: 5px 2px 2px #00aeff2a;
  }


  nav a {
    text-decoration: none;
    color: white;
  }

  nav a:hover{
    color: #ff4081;
    transition: color 0.2s ease;
  }

  a.selected {
    color: #ff4081;
    font-weight: bold;
  }
  
  .logo {
    color: white;
    margin-bottom: 1em;
    margin-top: 1em;
  }

 :global(body) {
  font-family: 'Montserrat';
  color: black;
  position: relative;
  padding-left: 2em;
  margin-left: 6vw;
 }

 
</style>

<slot/>