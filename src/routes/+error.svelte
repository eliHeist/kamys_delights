<script lang="ts">
	import { page } from '$app/state';
	import Button from '#lib/components/Button.svelte';
	import Star from '#lib/components/Star.svelte';
	import { whatsappLink } from '#lib/content/site.ts';
</script>

<svelte:head>
	<title>{page.status === 404 ? 'Page not found' : 'Something went wrong'} | Kamy's Delights</title>
	<meta name="robots" content="noindex" />
</svelte:head>

<section class="relative isolate grid min-h-[80vh] place-items-center overflow-hidden px-6 pt-24 text-center">
	<Star class="animate-spin-slow absolute top-1/2 left-1/2 -z-10 w-[36rem] -translate-x-1/2 -translate-y-1/2 text-plum-600/[0.05]" />
	<div>
		<p class="font-display text-8xl text-crimson-500">{page.status}</p>
		<h1 class="mt-4 text-4xl text-ink sm:text-5xl">
			{page.status === 404 ? 'This page has moved on' : 'Something went wrong'}
		</h1>
		<p class="mx-auto mt-4 max-w-md text-ink/65">
			The page you're looking for isn't here. Head back home or send us a message and we'll help.
		</p>
		<div class="mt-9 flex flex-wrap justify-center gap-3">
			<Button href="/" arrow>Back to home</Button>
			<Button href={whatsappLink()} variant="secondary" icon="whatsapp">WhatsApp us</Button>
		</div>
	</div>
</section>
