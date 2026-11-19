<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { PhotoTone } from '#lib/photos.ts';
	import Photo from './Photo.svelte';
	import Star from './Star.svelte';

	interface Props {
		eyebrow: string;
		title: Snippet;
		lead: string;
		crumbs?: { name: string; href: string }[];
		photo: { slot: string; alt: string; tone?: PhotoTone };
		actions?: Snippet;
		aside?: Snippet;
	}
	let { eyebrow, title, lead, crumbs = [], photo, actions, aside }: Props = $props();
</script>

<section class="relative isolate overflow-hidden pt-28 pb-16 lg:pt-36 lg:pb-24">
	<div class="absolute inset-x-0 top-0 -z-10 h-[85%] bg-gradient-to-b from-lilac-100 to-cream"></div>
	<Star data-speed="0.8" class="animate-spin-slow absolute -top-24 -left-32 -z-10 w-[28rem] text-plum-600/[0.04]" />

	<div class="container-site grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
		<div class="lg:col-span-6">
			{#if crumbs.length}
				<nav aria-label="Breadcrumb" data-reveal="fade">
					<ol class="flex flex-wrap items-center gap-2 text-sm text-mauve-600">
						<li><a href="/" class="transition-colors hover:text-plum-700">Home</a></li>
						{#each crumbs as c, i (c.href)}
							<li aria-hidden="true" class="text-champagne-500">/</li>
							<li>
								{#if i === crumbs.length - 1}
									<span aria-current="page" class="text-ink/80">{c.name}</span>
								{:else}
									<a href={c.href} class="transition-colors hover:text-plum-700">{c.name}</a>
								{/if}
							</li>
						{/each}
					</ol>
				</nav>
			{/if}
			<p data-reveal="rise" data-reveal-delay={60} class="eyebrow mt-8 flex items-center gap-3">
				<span class="h-px w-8 bg-crimson-500"></span>{eyebrow}
			</p>
			<h1 data-split data-split-delay="120" class="mt-5 text-5xl leading-[1.02] text-ink sm:text-6xl lg:text-[4.25rem]">
				{@render title()}
			</h1>
			<p data-reveal="rise" data-reveal-delay={200} class="mt-6 max-w-xl text-lg leading-relaxed text-ink/70">{lead}</p>
			{#if actions}
				<div data-reveal="rise" data-reveal-delay={280} class="mt-9 flex flex-wrap gap-3">{@render actions()}</div>
			{/if}
		</div>

		<div class="relative lg:col-span-6" data-reveal="scale" data-reveal-delay={150}>
			<Photo
				slot={photo.slot}
				alt={photo.alt}
				tone={photo.tone}
				priority
				class="aspect-[4/3] rounded-[2rem] shadow-[0_40px_80px_-40px_rgb(95_40_118/0.45)] lg:aspect-[5/4]"
			/>
			{#if aside}{@render aside()}{/if}
		</div>
	</div>
</section>
