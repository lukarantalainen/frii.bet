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
      <img src="/friibet.png" alt=FRII.BET style="width: 70px" />
    </a>
  </div>

  <div >
    <a href="/p2" class:selected={$page.url.pathname === '/p2'}>
      <Icon icon="proicons:graph" style="width: 70px; height:70px;" />
      <span class="nav-label">Crash</span>
    </a>
    
  </div>

  <div >
    <a href="/p3" class:selected={$page.url.pathname === '/p3'}>
      <Icon icon="ic:twotone-casino" style="width: 70px; height:70px;" />
      <span class="nav-label">Dice</span>
    </a>


  </div>

</nav>

<style>
  nav {
    position: fixed;
    top: 0;
    left: 0;
    width: 60px;
    height: 100vh;
    background-color: #1fbfff;
    display: flex;
    flex-direction: column;
    text-align: center;
    padding: 1em;
    box-shadow: #EC058E 0px 0px 0px 4px;
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
  color: #FFFBFC;
  background-color: #36c6ff;
  position: relative;
  padding-left: 3em;
  margin-left: 60px;
 }

</style>

<slot/>