<script lang="ts">
  import LanguageSelect from './LanguageSelect.svelte';

	import Paragraph from "./Paragraph.svelte";
    import { Languages, language } from "$lib/stores";
    
    const changeLanguage = (lang: Languages) => {
        language.set(lang);
    }
</script>

<div class="p-4">
    
    <div class="relative border-b border-dashed border-tertiary">
        <h1 class="pointer-events-none text-secondary/80 blur-sm tracking-tighter italic break-all leading-[0.85] text-6xl absolute -z-1 pr-20">
            <span class="font-bold">
                Chimeric Worlding:
            </span>

            <span class="">Graphic Design, Poetics, and Worldbuilding</span>
        </h1>
        <h1 class="text-tertiary tracking-tighter break-all leading-[0.85] text-6xl relative -z-1">
            <b>Chimeric Worlding:</b> Graphic Design, Poetics, and Worldbuilding
            <span class="tracking-tighter text-2xl break-normal underline hover:no-underline"><a href="https://tiger.exposed">Tiger&nbsp;Dingsun</a></span>
        </h1>
        
    </div>
    <div class="flex items-baseline justify-between text-tertiary border-b border-dashed border-tertiary">
        <span class="tracking-tighter text-2xl break-normal underline hover:no-underline"><a href="https://swonnie.cargo.site/">Translation: Jiwon Suh</a></span>
        <LanguageSelect></LanguageSelect>

    </div>
</div>
