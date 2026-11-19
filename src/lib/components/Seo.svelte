<script lang="ts">
	import { page } from '$app/state';
	import { site } from '#lib/content/site.ts';

	interface Props {
		title: string;
		description: string;
		/** Absolute path or URL to a 1200×630 image; defaults to the brand OG image */
		image?: string;
		jsonld?: Record<string, unknown>[];
		noindex?: boolean;
		/** Set true for the home page so the brand name isn't appended twice */
		bare?: boolean;
	}

	let { title, description, image = '/og.png', jsonld = [], noindex = false, bare = false }: Props = $props();

	const fullTitle = $derived(bare ? title : `${title} | ${site.name}`);
	const canonical = $derived(
		`${site.url}${page.url.pathname === '/' ? '' : page.url.pathname.replace(/\/$/, '')}`
	);
	const imageUrl = $derived(image.startsWith('http') ? image : `${site.url}${image}`);

	// Escape "<" so JSON can never close the script tag early
	const serialize = (data: unknown) => JSON.stringify(data).replace(/</g, '\\u003c');
</script>

<svelte:head>
	<title>{fullTitle}</title>
	<meta name="description" content={description} />
	<link rel="canonical" href={canonical} />
	{#if noindex}<meta name="robots" content="noindex, follow" />{/if}

	<meta property="og:type" content="website" />
	<meta property="og:site_name" content={site.name} />
	<meta property="og:locale" content={site.locale} />
	<meta property="og:title" content={fullTitle} />
	<meta property="og:description" content={description} />
	<meta property="og:url" content={canonical} />
	<meta property="og:image" content={imageUrl} />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta property="og:image:alt" content="{site.name}, {site.tagline}" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={fullTitle} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={imageUrl} />

	{#each jsonld as data, i (i)}
		{@html `<script type="application/ld+json">${serialize(data)}</script>`}
	{/each}
</svelte:head>
