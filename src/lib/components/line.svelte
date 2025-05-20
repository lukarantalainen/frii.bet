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
        width: 80%;
    }
    .line {
        background-image: linear-gradient(90deg, #37aee2 0%, white 60%);
        height: 1em;
        border-radius: 4px;
        width: 0%;
        
    }
</style>