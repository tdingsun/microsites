<script lang="ts">
    let {numPetals, size, idx, flowerIdx, color, flowerRotation} = $props();
    let petalW = $derived(size/numPetals);
</script>
<div style="width: {petalW * 1.75}px; height: {size/2}px; left: calc(50% - {petalW*0.875}px); transform: rotate({idx*360/numPetals}deg); border-color: {color}; background-color: {flowerRotation === 0 ? '' : color}; " class="{flowerRotation === 0 ? '  ' : ''} border-2 bg-[cornsilk] rounded-full absolute origin-bottom"></div>