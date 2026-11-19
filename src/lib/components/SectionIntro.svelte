<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		eyebrow?: string;
		/** Heading; use <em> inside the snippet for the italic serif accent */
		title: Snippet;
		lead?: string;
		align?: 'left' | 'center';
		id?: string;
		class?: string;
	}
	let { eyebrow, title, lead, align = 'left', id, class: className = '' }: Props = $props();
</script>

<div class="{align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'} {className}">
	{#if eyebrow}
		<p data-reveal="rise" class="eyebrow flex items-center gap-3 {align === 'center' ? 'justify-center' : ''}">
			<span class="h-px w-8 bg-champagne-500"></span>{eyebrow}
		</p>
	{/if}
	<h2 {id} data-split class="mt-4 text-4xl leading-[1.05] font-normal text-ink sm:text-5xl">
		{@render title()}
	</h2>
	{#if lead}
		<p data-reveal="rise" data-reveal-delay={160} class="mt-5 text-lg leading-relaxed text-ink/70">{lead}</p>
	{/if}
</div>
