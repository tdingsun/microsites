<script lang="ts">
  import { onMount } from "svelte";
  let { index } = $props();
    let rotation = $state(0);
    let count = 0;


    const rotate = () => {
        if(rotation === 0){
            rotation = 90;
            // rotation = Math.floor(Math.random() * 45) + 45
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
        if(count >= 10){
            count = 0;
        }
    }

    onMount(() => {
        setInterval(rotate1, 1000);
        setInterval(rotate, index * 250 + 250);
    })
</script>

<div style="transform: rotate({rotation}deg)" onmouseenter={rotate} class=" relative w-[3.33%] aspect-square flex justify-center items-center transition-transform duration-500">
    <div class="absolute h-[100%] w-[1px]  bg-slate-600"></div>
</div>
