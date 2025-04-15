<script lang="ts">
import { page } from '$app/stores';

</script>



<nav>
  <div>
    <a href="/" class:selected={$page.url.pathname === '/'}>FRII.BET</a>
  </div>

  <div class="links">
    <a href="/p2" class:selected={$page.url.pathname === '/p2'}>p2</a>
  </div>

</nav>




<style>
  nav {
    display: flex;
    justify-content: left;
    align-items: center;
    padding: 1rem 2rem;
    background-color: #111;
    color: white;
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2);
    border-radius: 100px;
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
  font-family: 'Montserrat'
 }



</style>

<slot></slot>