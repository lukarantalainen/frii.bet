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

  <div class="links">
    <a href="/p2" class:selected={$page.url.pathname === '/p2'}>
      <Icon icon="proicons:graph" style="margin-right: 0.5rem;width: 50px; height:50px;" />
      Crash
    </a>
    
  </div>

  <div class="links">
    <a href="/p3" class:selected={$page.url.pathname === '/p3'}>
      <Icon icon="ic:twotone-casino" style="margin-right: 0.5rem;width: 50px; height:50px;" />
      Dice
    </a>


  </div>

</nav>

<style>
  nav {
    position: fixed;
    top: 0;
    left: 0;
    height: 99vh;
    width: 3vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem;
    background-color: #111;
    color: white;
    box-shadow: 2px 0 10px rgba(0, 0, 0, 0.2);
    gap: 1rem;
    border-radius: 0px 50px 50px 0px;
  }

  .logo {
    background-color: #ff4081;
  }

  nav a {
    color: white;
    text-decoration: none;
    margin-left: 1rem;
    transition: color 0.2s ease;
  }

  nav a:hover{
    color: rgb(0, 162, 255)
  }


  a.selected {
    color: #ff4081; /* Highlight color */
    font-weight: bold;
  }

  @media (max-width: 600px) {
  nav {
    flex-direction: column;
    align-items: flex-start;
  }
  }

 :global(body) {
  font-family: 'Montserrat';
  color: white;
  background-color: #363636;
  margin-left: 100px;
  padding-left: 3rem;
 }
 
</style>

<slot/>