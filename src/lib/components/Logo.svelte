<script lang="ts">
	import horizontal from '#lib/assets/brand/logo-horizontal.svg';
	import horizontalWhite from '#lib/assets/brand/logo-horizontal-white.svg';
	import stacked from '#lib/assets/brand/logo-stacked.svg';
	import stackedWhite from '#lib/assets/brand/logo-stacked-white.svg';

	interface Props {
		variant?: 'horizontal' | 'stacked';
		tone?: 'color' | 'white';
		class?: string;
	}
	let { variant = 'horizontal', tone = 'color', class: className = '' }: Props = $props();

	const src = $derived(
		variant === 'horizontal'
			? tone === 'white'
				? horizontalWhite
				: horizontal
			: tone === 'white'
				? stackedWhite
				: stacked
	);
	// Intrinsic ratios from the traced artwork
	const size = $derived(variant === 'horizontal' ? { w: 240, h: 103 } : { w: 154, h: 135 });
</script>

<img {src} alt="Kamy's Delights" width={size.w} height={size.h} class={className} decoding="async" />
