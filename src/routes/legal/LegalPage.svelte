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
	.legal :global(h3) {
		margin-top: 1.75rem;
		font-family: var(--font-sans);
		font-size: 1rem;
		font-weight: 600;
		color: var(--color-ink);
	}
	.legal :global(ul) {
		list-style: disc;
		padding-left: 1.25rem;
	}
	.legal :global(li + li) {
		margin-top: 0.4rem;
	}
	.legal :global(li::marker) {
		color: var(--color-crimson-500);
	}
	.legal :global(code) {
		border-radius: 0.375rem;
		background: var(--color-lilac-100);
		padding: 0.1rem 0.35rem;
		font-size: 0.875em;
	}
	.legal :global(.legal-button) {
		color: var(--color-plum-700);
		text-decoration: underline;
		text-underline-offset: 3px;
		cursor: pointer;
	}
	.legal :global(a) {
		color: var(--color-plum-700);
		text-decoration: underline;
		text-underline-offset: 3px;
	}
</style>
