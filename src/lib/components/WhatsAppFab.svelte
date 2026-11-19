<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/state';
	import { whatsappLink } from '#lib/content/site.ts';
	import Icon from './Icon.svelte';

	let visible = $state(false);
	let nudge = $state(false);

	// Context-aware opening message per section of the site
	const message = $derived.by(() => {
		const p = page.url.pathname;
		if (p.startsWith('/cleaning')) return "Hello Kamy's Delights, I'd like a quote for cleaning.";
		if (p.startsWith('/laundry')) return "Hello Kamy's Delights, I'd like to book a laundry pick-up.";
		if (p.startsWith('/catering')) return "Hello Kamy's Delights, I'd like to ask about catering / a cake order.";
		return "Hello Kamy's Delights, I'd like to make an enquiry.";
	});

	onMount(() => {
		const show = setTimeout(() => (visible = true), 1200);
		const pulse = setTimeout(() => (nudge = true), 6000);
		return () => {
			clearTimeout(show);
			clearTimeout(pulse);
		};
	});
</script>

<a
	href={whatsappLink(message)}
	target="_blank"
	rel="noopener"
	data-track="whatsapp-fab"
	aria-label="Chat with us on WhatsApp"
	class="group fixed right-4 bottom-4 z-40 flex items-center gap-0 rounded-full bg-[#1fa855] p-3.5 text-white shadow-[0_14px_30px_-10px_rgb(20_120_60/0.6)] transition-all duration-500 ease-[var(--ease-spring)] hover:gap-2 hover:pr-5 sm:right-6 sm:bottom-6 {visible
		? 'translate-y-0 scale-100 opacity-100'
		: 'pointer-events-none translate-y-6 scale-75 opacity-0'}"
>
	{#if nudge}
		<span aria-hidden="true" class="absolute inset-0 -z-10 animate-ping rounded-full bg-[#1fa855]/40 [animation-iteration-count:3]"></span>
	{/if}
	<Icon name="whatsapp" class="size-7" />
	<span
		class="max-w-0 overflow-hidden text-sm font-medium whitespace-nowrap transition-[max-width] duration-500 ease-[var(--ease-out-soft)] group-hover:max-w-40"
		>Chat with us</span
	>
</a>
