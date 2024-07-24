<script lang="ts">
	export let src: string;
</script>

<div
	class="border-tertiary border border-dashed p-4 mb-4 flex justify-center items-center
    "
>
	<div class="relative mix-blend-darken">
		<div class="w-full h-full absolute bg-secondary" />
		<img class="mix-blend-lighten relative max-h-[calc(100vh-350px)]" {src} alt="" />
	</div>
</div>
