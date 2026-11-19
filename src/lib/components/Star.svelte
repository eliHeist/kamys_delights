<script lang="ts">
	/** The Kamy's Delights shooting star, traced from the brand guide. Inherits `currentColor`. */
	import type { SVGAttributes } from 'svelte/elements';

	interface Props extends SVGAttributes<SVGSVGElement> {
		class?: string;
		title?: string;
	}
	let { class: className = '', title, ...rest }: Props = $props();
</script>

<svg
	viewBox="118.06 291.72 41.43 53.89"
	class={className}
	fill="currentColor"
	role={title ? 'img' : undefined}
	aria-hidden={title ? undefined : 'true'}
	aria-label={title}
	{...rest}
>
	<path
		d="M146.89 313.02 146.29 321.48 139.77 315.48 129.87 327.86 126.29 332.34 128.47 327.05 135.46 310.07 131.14 302.86 139.32 303.71 144.63 297.23 146.38 305.52 153.99 308.73ZM148.11 304.03 145.72 292.72 138.48 301.55 127.32 300.4 133.22 310.25 126.79 325.87 123.25 334.45 119.06 344.61 126.04 335.88 131.76 328.72 139.98 318.44 147.97 325.79 148.8 314.24 158.48 308.41Z"
	/>
</svg>
