<script lang="ts">
    import LanguageSelect from './LanguageSelect.svelte';
  
      import Paragraph from "./Paragraph.svelte";
      import { Languages, language, switchLanguage } from "$lib/stores";
      
      const changeLanguage = (lang: Languages) => {
          switchLanguage(lang);
      }
  </script>
  
  <div class="p-4">
      
      <div class="relative border-b border-dashed border-tertiary">
          <h1 class="pointer-events-none text-secondary/80 blur-sm italic break-all leading-[0.85] text-6xl absolute -z-1 pr-20">
              <span class="font-bold">
                공상적 세계화: 
              </span>
              <span class="">그래픽 디자인, 시학, 세계 구축</span>
          </h1>
          <h1 class="text-tertiary break-all leading-[0.85] text-6xl relative -z-1">
              <b>공상적 세계화: </b> 그래픽 디자인, 시학, 세계 구축
              <span class="text-2xl break-normal underline hover:no-underline">
                <a href="https://tiger.exposed">타이거&nbsp;딩선</a>
            </span>
          </h1>
          
      </div>
      <div class="flex items-baseline justify-between text-tertiary border-b border-dashed border-tertiary">
        <span class="tracking-tighter text-2xl break-normal underline hover:no-underline"><a href="https://swonnie.cargo.site/">
            번역: 서지원
        </a></span>

          <LanguageSelect></LanguageSelect>
  
      </div>
  </div>
  