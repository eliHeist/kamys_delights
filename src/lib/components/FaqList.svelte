<script lang="ts">
	import type { Faq } from '#lib/content/services.ts';
	import Icon from './Icon.svelte';

	let { faqs }: { faqs: Faq[] } = $props();
</script>

<div class="divide-y divide-champagne-300/70 border-y border-champagne-300/70">
	{#each faqs as faq, i (faq.q)}
		<details data-reveal="rise" data-reveal-delay={i * 60} class="group" name="faq">
			<summary
				class="flex cursor-pointer list-none items-start justify-between gap-6 py-6 text-left text-lg font-medium text-ink transition-colors hover:text-plum-700 [&::-webkit-details-marker]:hidden"
			>
				{faq.q}
				<span
					class="mt-0.5 grid size-8 shrink-0 place-items-center rounded-full ring-1 ring-plum-200 transition-all duration-500 ease-[var(--ease-spring)] group-open:rotate-45 group-open:bg-plum-600 group-open:text-white group-open:ring-plum-600"
				>
					<Icon name="plus" class="size-4" />
				</span>
			</summary>
			<p class="max-w-2xl pb-6 leading-relaxed text-ink/70">{faq.a}</p>
		</details>
	{/each}
</div>
