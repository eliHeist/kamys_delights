<script lang="ts">
	import { getPhoto, type PhotoTone } from '#lib/photos.ts';
	import Star from './Star.svelte';

	interface Props {
		/** Slot name, matches a file in src/lib/assets/photos (see PHOTOS.md) */
		slot: string;
		alt: string;
		tone?: PhotoTone;
		class?: string;
		/** Above-the-fold images load eagerly with high priority */
		priority?: boolean;
		sizes?: string;
	}

	let {
		slot,
		alt,
		tone = 'lilac',
		class: className = '',
		priority = false,
		sizes = '(min-width: 1024px) 50vw, 100vw'
	}: Props = $props();

	const picture = $derived(getPhoto(slot));

	const tones: Record<PhotoTone, string> = {
		plum: 'from-plum-600 via-plum-500 to-plum-800 text-white/15',
		lilac: 'from-lilac-200 via-plum-100 to-champagne-200 text-plum-600/10',
		champagne: 'from-champagne-200 via-champagne-100 to-lilac-200 text-crimson-500/10',
		crimson: 'from-crimson-400/80 via-plum-500 to-plum-700 text-white/15'
	};
</script>

<div class="relative overflow-hidden {className}">
	{#if picture}
		<enhanced:img
			src={picture}
			{alt}
			{sizes}
			loading={priority ? 'eager' : 'lazy'}
			fetchpriority={priority ? 'high' : 'auto'}
			class="size-full object-cover"
		/>
	{:else}
		<!-- Branded placeholder until real photography is added -->
		<div
			role="img"
			aria-label={alt}
			data-photo-slot={slot}
			class="absolute inset-0 bg-gradient-to-br {tones[tone]}"
		>
			<Star class="absolute -right-[12%] -bottom-[18%] w-[75%] rotate-12" />
			<div
				class="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgb(255_255_255/0.45),transparent_55%)]"
			></div>
		</div>
	{/if}
</div>
