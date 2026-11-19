<script lang="ts">
	import { site } from '#lib/content/site.ts';
	import Icon from './Icon.svelte';
</script>

<div class="grid gap-5 md:grid-cols-2">
	{#each site.locations as loc, i (loc.id)}
		<article
			data-reveal="rise" data-reveal-delay={i * 100}
			class="group relative overflow-hidden rounded-[var(--radius-card)] bg-white p-8 ring-1 ring-champagne-300/70 transition-shadow duration-500 hover:shadow-[0_30px_60px_-30px_rgb(95_40_118/0.35)] lg:p-10"
		>
			<span class="grid size-11 place-items-center rounded-full bg-lilac-100 text-plum-600">
				<Icon name="map" />
			</span>
			<h3 class="mt-6 text-2xl text-ink">{loc.name}</h3>
			<p class="mt-1 text-sm text-mauve-600">{loc.handles}</p>
			<address class="mt-5 leading-relaxed text-ink/80 not-italic">
				{loc.street}<br />
				{#if loc.landmark}{loc.landmark}<br />{/if}
				{loc.locality}
			</address>
			<p class="mt-4 flex items-center gap-2 text-sm text-ink/70">
				<Icon name="clock" class="size-4 text-champagne-500" />
				{site.hours.display}
			</p>
			<a
				href={loc.mapsUrl}
				target="_blank"
				rel="noopener"
				class="mt-7 inline-flex items-center gap-2 text-sm font-medium text-plum-700"
			>
				Get directions
				<Icon
					name="arrow-up-right"
					class="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
				/>
			</a>
		</article>
	{/each}
</div>
