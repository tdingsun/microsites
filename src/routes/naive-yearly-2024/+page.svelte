<script lang="ts">
  import { onMount } from "svelte";
  import Slide from "./Slide.svelte";
  import landscape from "$lib/images/minecraft/landscape.jpg";
  import diagram1 from "$lib/images/minecraft/diagram-1.png";
  import diagram2 from "$lib/images/minecraft/diagram-2.png";

  let title = "In Defense of the Simulation of Nature";
  let author = "Tiger Dingsun";

  let slides: any = [
    {
      imageURL: landscape,
      caption: null,
      text: title,
    },
    {
      imageURL: diagram1,
      caption: null,
      text: "diagram",
    },
    {
      imageURL: diagram2,
      caption: null,
      text: "diagram",
    },
  ];

  $: currSlide = 0;

  const prevSlide = () => {
    currSlide = Math.max(currSlide - 1, 0);
  };

  const nextSlide = () => {
    currSlide = Math.min(currSlide + 1, slides.length);
  };

  onMount(() => {
    document.addEventListener("keydown", (e) => {
      switch (e.key) {
        case "ArrowLeft":
          prevSlide();
          break;
        case "ArrowRight":
          nextSlide();
          break;
      }
    });
  });
</script>

<div class="font-wyvern">
  {#if currSlide === 0}
    <!-- content here -->
    <div class="fixed top-0 left-0 m-4 text-secondary text-5xl blur-sm">
      {author}
    </div>
  {:else}
    <div class="fixed top-0 left-0 m-4 text-secondary text-5xl blur-sm">
      In<br />Defense<br />of the<br />Simulation<br />of<br />Nature
    </div>
  {/if}
  <Slide slide={slides[currSlide]} />
  <div class="fixed top-0 right-0 m-4 text-secondary text-5xl blur-sm">
    {currSlide + 1}
  </div>
  {#if currSlide > 0}
    <button
      on:click={prevSlide}
      class="fixed left-4 top-1/2 p-1.5 border-solid border border-secondary rounded-full hover:bg-tertiary hover:text-primary hover:border-tertiary hover:[box-shadow:_0_0_2px_#3f8a9a] hover:[text-shadow:_0_0_2px_#c9c9b6] [text-shadow:_0_0_2px_#6b672e] [box-shadow:_0_0_2px_#6b672e]"
    >
      <span class="relative -top-[1px]">
        {"<--"}
      </span>
    </button>
  {/if}
  {#if currSlide < slides.length}
    <button
      on:click={nextSlide}
      class="fixed right-4 top-1/2 p-1.5 border-solid border border-secondary rounded-full hover:bg-tertiary hover:text-primary hover:border-tertiary hover:[box-shadow:_0_0_2px_#3f8a9a] hover:[text-shadow:_0_0_2px_#c9c9b6] [text-shadow:_0_0_2px_#6b672e] [box-shadow:_0_0_2px_#6b672e]"
      ><span class="relative -top-[1px]">{"-->"}</span></button
    >
  {/if}
</div>
