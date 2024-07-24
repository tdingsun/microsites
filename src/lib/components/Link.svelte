<script lang="ts">
    export let href: string
</script>
<a class="underline hover:no-underline text-tertiary" {href} target="_blank">
    <slot />
</a>