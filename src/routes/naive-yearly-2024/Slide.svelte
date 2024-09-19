<script lang="ts">
    export let slide: any;
</script>

<div>
    {#if slide.imageURL}
        <div class="w-full p-16  h-screen {slide.title ? "" : "pb-56"}">
            <img src={slide.imageURL} alt="slide image" class="w-full h-full object-scale-down mix-blend-multiply"/>
        </div>
    {/if}
    {#if slide.caption}
        <div class="fixed top-4 w-full text-center text-secondary text-lg">
            {slide.caption}

        </div>
    {/if}
    {#if slide.text}
    
    <div class="{slide.title || !slide.imageURL ? "text-center text-5xl" : ""} fixed bottom-0 left-0 w-full  p-4 text-3xl text-primary tracking-tight leading-[1.3] [text-shadow:_0_0_3px_#c9c9b6]">
        {slide.text}
    </div>
        <div class="{slide.title || !slide.imageURL ? "text-center text-5xl" : ""} fixed bottom-0 left-0  w-full p-4 text-3xl text-primary tracking-tight leading-[1.3] [text-shadow:_0_0_3px_#6b672e]">
            {slide.text}
        </div>
        
        <div class="{slide.title || !slide.imageURL ? "text-center text-5xl" : ""} fixed bottom-0 left-0 w-full p-4 text-3xl text-secondary tracking-tight leading-[1.3]">
            {slide.text}
        </div>
    {/if}
</div>

<style>

</style>