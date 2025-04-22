<script>

    import { page } from '$app/stores';
  </script>

<div id=frame>

<h1>{$page.status}: {$page.error.message}</h1>
</div>

<style>

#frame {
    margin: 200 0 0 200;
    padding: 3rem;
}

</style>