<script lang="ts">
import { page } from '$app/stores';
import Icon from '@iconify/svelte';
import { balance } from '$lib/store';
  import { browser } from '$app/environment';

</script>

<div id="margin"></div>
<nav id=nav-left>
  <div >
    <a href="/Crash" class:selected={$page.url.pathname === '/Crash'}>
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

<nav id=nav-top>
  <div class="logo">
    <a href="/" class:selected={$page.url.pathname === '/'}>
      <h1>bet.frii.site</h1>
    </a>
  </div>
  

  
</nav>

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

  nav a:hover{
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
  font-family: 'Montserrat';
  color: #FFFBFC;
  background-color: #36c6ff;
  position: relative;
  margin: 0;
 }

</style>

<slot/>