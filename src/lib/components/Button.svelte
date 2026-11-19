<script lang="ts">
	import type { Snippet } from 'svelte';
	import { magnetic } from '#lib/actions/magnetic.ts';
	import Icon, { type IconName } from './Icon.svelte';

	interface Props {
		href: string;
		variant?: 'primary' | 'secondary' | 'light' | 'ghost';
		size?: 'md' | 'lg';
		icon?: IconName;
		/** Trailing arrow that slides on hover */
		arrow?: boolean;
		external?: boolean;
		/** Analytics hook, e.g. "whatsapp-hero" */
		track?: string;
		class?: string;
		children: Snippet;
	}

	let {
		href,
		variant = 'primary',
		size = 'md',
		icon,
		arrow = false,
		external = href.startsWith('http'),
		track,
		class: className = '',
		children
	}: Props = $props();

	const variants = {
		primary:
			'bg-plum-600 text-white shadow-[0_10px_30px_-12px_rgb(95_40_118/0.7)] hover:bg-plum-700 hover:shadow-[0_16px_36px_-12px_rgb(95_40_118/0.75)]',
		secondary:
			'bg-white/70 text-plum-700 ring-1 ring-plum-200 backdrop-blur hover:bg-white hover:ring-plum-300',
		light: 'bg-white text-plum-700 hover:bg-champagne-100',
		ghost: 'text-white ring-1 ring-white/30 hover:bg-white/10 hover:ring-white/60'
	};
	const sizes = { md: 'h-11 px-5 text-sm', lg: 'h-13 px-7 text-[0.95rem]' };
</script>

<a
	{href}
	use:magnetic
	data-track={track}
	target={external ? '_blank' : undefined}
	rel={external ? 'noopener' : undefined}
	class="group relative isolate inline-flex items-center justify-center gap-2.5 overflow-hidden rounded-full font-medium tracking-tight whitespace-nowrap transition-[background-color,box-shadow,color] duration-300 select-none active:scale-[0.98] {variants[
		variant
	]} {sizes[size]} {className}"
>
	<!-- soft sheen that sweeps across on hover -->
	<span
		aria-hidden="true"
		class="pointer-events-none absolute inset-y-0 -left-1/2 -z-10 w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-white/25 to-transparent opacity-0 transition-all duration-700 ease-out group-hover:left-full group-hover:opacity-100"
	></span>
	{#if icon}<Icon name={icon} class="size-[1.15em] shrink-0" />{/if}
	<span>{@render children()}</span>
	{#if arrow}
		<Icon
			name="arrow"
			class="size-4 shrink-0 transition-transform duration-300 ease-out group-hover:translate-x-1"
		/>
	{/if}
</a>
