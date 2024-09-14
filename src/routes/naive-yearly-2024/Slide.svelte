<script lang="ts">
    export let slide: any;
</script>

<div>
    {#if slide.imageURL}
        <div class="w-full p-16 pb-56 h-screen">
            <img src={slide.imageURL} alt="slide image" class="w-full h-full object-contain mix-blend-darken"/>
        </div>
    {/if}
    {#if slide.caption}
        <div class="fixed top-4 w-full text-center text-secondary text-lg">
            {slide.caption}

        </div>
    {/if}
    {#if slide.text}
    <div class="fixed bottom-0 left-0 w-full p-4 text-6xl text-primary tracking-tight leading-[1.05] [text-shadow:_0_0_5px_#c9c9b6]">
        {slide.text}
    </div>
        <div class="fixed bottom-0 left-0 w-full p-4 text-6xl text-primary tracking-tight leading-[1.05] [text-shadow:_0_0_5px_#6b672e]">
            {slide.text}
        </div>
        
        <div class="fixed bottom-0 left-0 w-full p-4 text-6xl text-secondary tracking-tight leading-[1.05]">
            {slide.text}
        </div>
    {/if}
</div>

<style>
    div {
        font-feature-settings: "ss01";
    }
</style>