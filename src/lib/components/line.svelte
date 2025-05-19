<script lang="ts">
    let { value } = $props();
    let innerDiv: HTMLDivElement;

    $effect(() => {
        innerDiv.style.width = `${(value / 8000) * 100}%`
    });

</script>

<div class="outer">
    <div class="line" bind:this={innerDiv}>

    </div>
</div>

<style>
    .outer {
        width: 20vw;
        margin: 10%;
    }
    .line {
        background-color: white;
        height: 1em;
        border-radius: 4px;
        width: 0%;
        
    }
</style>