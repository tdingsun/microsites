<script lang="ts">
    let { size, flowerIdx, rotationState = $bindable(), onMouseOver } = $props();
    let rotation = $derived(rotationState);
</script>
<div onmouseenter={e => (onMouseOver(flowerIdx))} style="width: {size}px; height: {size}px; transform: rotate({rotation}deg);" class=" transition-transform duration-500 flex-grow-0 relative origin-center">
    <div class="absolute w-full h-full flex justify-center items-center">
        <div class="w-full h-4 bg-tertiary absolute"></div>
        <div class="h-full w-4 bg-tertiary absolute"></div>

    </div>

</div>