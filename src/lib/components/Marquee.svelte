<script lang="ts">
	import Star from './Star.svelte';

	let { items }: { items: string[] } = $props();
</script>

<div
	class="group relative overflow-hidden border-y border-champagne-300/70 bg-white/60 py-5 [mask-image:linear-gradient(90deg,transparent,#000_10%,#000_90%,transparent)]"
>
	<div class="animate-marquee flex w-max group-hover:[animation-play-state:paused]">
		{#each [0, 1] as copy (copy)}
			<ul class="flex shrink-0 items-center" aria-hidden={copy === 1 ? 'true' : undefined}>
				{#each items as item (item)}
					<li class="flex items-center gap-8 pr-8 font-display text-2xl text-ink/80 italic sm:text-3xl">
						{item}
						<Star class="size-5 text-crimson-500" />
					</li>
				{/each}
			</ul>
		{/each}
	</div>
</div>
