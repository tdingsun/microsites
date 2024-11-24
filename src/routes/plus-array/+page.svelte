<script lang="ts">
  import Plus from './Plus.svelte';

    let numPluses = new Array(100);
</script>

<div class="w-dvw h-dvh flex flex-wrap content-center justify-center items-center">
    {#each numPluses as plus, idx}
            <Plus index={idx}></Plus>       
    {/each}
</div>