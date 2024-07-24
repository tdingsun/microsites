<script lang="ts">
	import IntersectionObserver from 'svelte-intersection-observer';
    import { selectImg, deselectImg } from '$lib/stores';
    export let imgIndex: number;
	let element: HTMLElement | undefined;
	let intersecting: boolean;
</script>


<IntersectionObserver {element} bind:intersecting on:observe={(e) => {
    $: if(intersecting) {
        selectImg(imgIndex);
    } else {
        deselectImg(imgIndex);
    }
}}>
<div bind:this={element} class="text-sm mb-4 pr-4 ml-auto text-tertiary max-w-xs float-left">
    <span><b>← </b> </span>
	<slot />
</div>
</IntersectionObserver>
