<script lang="ts">
  import Petal from "./Petal.svelte";

    let { size, flowerIdx, rotationState = $bindable(), onMouseOver, colorState = $bindable() } = $props();
    let numPetalOptions = [3, 5, 6, 7, 8];
    let numPetals = new Array(numPetalOptions[Math.floor(Math.random() * numPetalOptions.length)]);
    let rotation = $derived(rotationState);
    let color = $derived(colorState);
</script>
<div onmouseenter={e => (onMouseOver(flowerIdx))} style="width: {size}px; height: {size}px; transform: rotate({rotation + 45}deg);" class=" transition-transform duration-500 flex-grow-0 relative origin-center">
    <div class="absolute w-full h-full">
        {#each numPetals as _, idx}
            <Petal numPetals={numPetals.length}  {size} {idx} {flowerIdx} {color} flowerRotation={rotation}></Petal>
        {/each}
        <div class="{rotationState === 0 ? 'bg-[cornsilk]': ''} rounded-full w-1/2 h-1/2 relative top-1/4 left-1/4 flex justify-center items-center">
            <div style="border-color: cornsilk;" class="w-[60%] h-[60%] relative {rotationState === 0 ? ' ' : 'bg-[cornsilk]'} rounded-full">
                <div>
                    <div style="background-color: {rotationState === 0 ? '' : color};" class="w-[15%] h-[15%]  absolute rounded-full top-1/4 left-[15%]">

                    </div>
                    <div style="background-color: {rotationState === 0 ? '' : color};"class="w-[15%] h-[15%]  absolute rounded-full top-1/4 right-[15%]">
        
                    </div>
                    <div style="border-color: {rotationState === 0 ? 'transparent' : color};" class="w-[70%] h-[35%] bottom-[15%] left-[15%] rounded-bl-full rounded-br-full absolute border-b-2 border-l-2 border-r-2 ">
        
                    </div>
                </div>
              
            </div>
          
        </div>
    </div>

</div>