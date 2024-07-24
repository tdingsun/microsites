<script lang="ts">
    import { fade } from 'svelte/transition';

	import phylo from '$lib/images/title-img.png';
	import diagram1 from '$lib/images/diagram1.png';
	import diagram2 from '$lib/images/diagram2.png';
	import adnan from '$lib/images/adnan.gif';
	import chimera from '$lib/images/chimera.jpg';
	import composite from '$lib/images/composite.jpg';
	import fungus from '$lib/images/fungi.jpg';
	import quartz from '$lib/images/quartz.jpg';
	import digimon from '$lib/images/digimon.png';
	import maritain from '$lib/images/maritain.jpg';
	import hxh from '$lib/images/nen.jpeg';
	import thought from '$lib/images/thought.png';
    import vw from '$lib/images/vampire_weekend.jpg';
	import sakura from '$lib/images/sakura.jpg';
	import { currentImgIndices } from '$lib/stores';
	const images = [phylo, fungus, quartz, adnan, maritain, thought, chimera, vw, hxh, digimon, sakura, diagram1, diagram2, composite];
</script>

<div class="grow flex flex-col overflow-auto px-4 scroll-m-0">
	{#each $currentImgIndices.sort((a, b) => a - b) as currentImg}
        <div 
        
        class="border-tertiary border border-dashed p-4 mb-4 flex justify-center items-center
        
    ">
    {#key currentImg}
        <div 
        in:fade={{ delay: 0, duration: 250}}
        class="relative mix-blend-darken">
            <div class="w-full h-full absolute bg-secondary" />
            <img class="mix-blend-lighten relative max-h-[calc(100vh-350px)]" src={images[currentImg]} alt="" />
        </div>
    {/key}
        
    </div>
        
	{/each}
</div>
