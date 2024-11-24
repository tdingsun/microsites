<script lang="ts">
  import { onMount } from "svelte";
  let { index } = $props();
    let rotation = $state(0);
    let count = 0;


    const rotate = () => {
        if(rotation === 0){
            rotation = Math.floor(Math.random() * 45) + 45
        } else {
                rotation = 0;
            }
    }
    const rotate1 = () => {
        if(index % count === 0) {
            rotate();
            // rotation = Math.floor(Math.random() * 90) + 90

        } else {
            // rotation = 0;
        }
        count++;
        if(count >= 20){
            count = 0;
        }
    }

    onMount(() => {
        setInterval(rotate1, 500);
        setInterval(rotate, index * 500 + 500);
    })
</script>

<div style="transform: rotate({rotation}deg)" onmouseenter={rotate} class="relative w-[10vw] h-[10vw] flex justify-center items-center transition-transform duration-500">
    <div class="absolute w-full h-[20%] bg-slate-600"></div>
    <div class="absolute h-full w-[20%] bg-slate-600"></div>
</div>
