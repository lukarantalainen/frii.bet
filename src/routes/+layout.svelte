<script lang="ts">
import { page } from '$app/stores';
import Icon from '@iconify/svelte';
</script>



<nav>
  <div>
    <a href="/" class:selected={$page.url.pathname === '/'}>
      <Icon icon="mdi:gambling" style="margin-right: 0.5rem;width: 50px; height:50px;" />
      FRII.BET
    </a>
  </div>

  <div class="links">
    <a href="/p2" class:selected={$page.url.pathname === '/p2'}>
      <Icon icon="proicons:graph" style="margin-right: 0.5rem;width: 50px; height:50px;" />
      Crash
    </a>
    
  </div>

</nav>


<style>
  nav {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem 1rem;
    background-color: #111;
    color: white;
    box-shadow: 2px 0 10px rgba(0, 0, 0, 0.2);
    gap: 1rem;
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
    border-bottom: 2px solid #ff4081;
  }

  @font-face {
    font-family: 'Montserrat';
    src: url('/fonts/Montserrat-Regular.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
  }

 :global(body) {
  font-family: 'Montserrat';
  background-color: #363636;
  margin-left: 200px;
  padding: 2rem;
 }


</style>

<slot/>