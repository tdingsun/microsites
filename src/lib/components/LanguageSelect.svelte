<script lang="ts">
	import Paragraph from "./Paragraph.svelte";
    import { Languages, language, switchLanguage } from "$lib/stores";
    
    const changeLanguage = (lang: Languages) => {
        switchLanguage(lang);
    }
</script>

            <div class="inline-block break-normal text-2xl text-tertiary">
                <span><button on:click={(e) => {changeLanguage(Languages.ENG)}}
                    class="p-1 border-y-0 tracking-tighter
                        {$language === Languages.ENG ? "border-dashed border border-tertiary font-bold " : " "}
                        hover:bg-tertiary hover:text-primary
                        ">
                    English
                </button></span> /  
                <span>
                    <button on:click={(e) => {changeLanguage(Languages.KOR)}}
                        class="p-1 border-y-0 tracking-tighter
                        {$language === Languages.KOR ? "border-dashed border border-tertiary font-bold " : " "}
                        hover:bg-tertiary hover:text-primary
                        ">
                        한국어
                    </button>
                </span>
            </div>

