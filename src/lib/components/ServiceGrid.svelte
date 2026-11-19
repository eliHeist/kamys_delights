<script lang="ts">
	import type { ServiceItem } from '#lib/content/services.ts';

	let { items, columns = 3 }: { items: ServiceItem[]; columns?: 2 | 3 } = $props();
</script>

<ul class="grid gap-px overflow-hidden rounded-[var(--radius-card)] bg-champagne-300/60 ring-1 ring-champagne-300/60 sm:grid-cols-2 {columns === 3 ? 'lg:grid-cols-3' : ''}">
	{#each items as item, i (item.name)}
		<li data-reveal="rise" data-reveal-delay={(i % 3) * 70} class="group relative bg-cream p-7 transition-colors duration-500 hover:bg-white lg:p-8">
			<span class="font-display text-sm text-crimson-500 tabular-nums">{String(i + 1).padStart(2, '0')}</span>
			<h3 class="mt-4 text-xl leading-snug text-ink">{item.name}</h3>
			<p class="mt-2 text-[0.95rem] leading-relaxed text-ink/65">{item.description}</p>
			<span
				aria-hidden="true"
				class="absolute inset-x-7 bottom-0 h-0.5 origin-left scale-x-0 bg-gradient-to-r from-plum-600 to-crimson-500 transition-transform duration-700 ease-[var(--ease-out-soft)] group-hover:scale-x-100 lg:inset-x-8"
			></span>
		</li>
	{/each}
</ul>
