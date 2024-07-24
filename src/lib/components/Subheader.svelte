<script lang="ts">
	import TextCol from './TextCol.svelte';
    let className: string = "";
  export { className as class };
  </script>

<TextCol>
	<h2 class="font-bold mb-4 {className}">
		<slot />
	</h2>
</TextCol>
