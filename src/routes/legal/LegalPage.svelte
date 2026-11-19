<script lang="ts">
	import type { Snippet } from 'svelte';
	let { title, updated, children }: { title: string; updated: string; children: Snippet } = $props();
</script>

<article class="container-site max-w-3xl pt-32 pb-24 lg:pt-40">
	<p class="eyebrow">Legal</p>
	<h1 class="mt-4 text-5xl text-ink">{title}</h1>
	<p class="mt-3 text-sm text-mauve-600">Last updated {updated}</p>
	<div class="legal mt-12 space-y-5 leading-relaxed text-ink/75">
		{@render children()}
	</div>
</article>

<style>
	.legal :global(h2) {
		margin-top: 2.5rem;
		font-size: 1.5rem;
		color: var(--color-ink);
	}
	.legal :global(a) {
		color: var(--color-plum-700);
		text-decoration: underline;
		text-underline-offset: 3px;
	}
</style>
