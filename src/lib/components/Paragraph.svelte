<script lang='ts'>
	import TextCol from "./TextCol.svelte";
        let className: string = "";
  export { className as class };
</script>
<TextCol>
<p class="mb-4 {className}">

        <slot />

</p>
</TextCol>