<script lang="ts">
    export let slide: any;
    export let currClause: number;
    export let last = false;
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
        <div class="fixed bottom-0 left-0 w-full p-4 text-2xl md:text-3xl lg:text-4xl text-primary !leading-tight [text-shadow:_0_0_3px_#6b672e]">
            {slide.clauses[currClause]}{#if !last}{/if}
        </div>
        <div class="font-sans fixed bottom-0 left-0 w-full p-4 text-2xl md:text-3xl lg:text-4xl !leading-tight text-secondary">
            {slide.clauses[currClause]}{#if !last}{/if}
        </div>
    {/if}
</div>