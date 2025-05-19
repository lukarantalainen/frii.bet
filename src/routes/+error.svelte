<script lang="ts">
	import { page } from '$app/state';
</script>


<div class="container">
<h1>Error {page.status}: {page.error.message}</h1>
</div>

<style>
.container {

    margin-left: 100px;
    margin-top: 100px;
}



</style>