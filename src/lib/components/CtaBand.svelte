<script lang="ts">
	import { site, telLink, whatsappLink } from '#lib/content/site.ts';
	import Button from './Button.svelte';
	import Star from './Star.svelte';

	interface Props {
		title?: string;
		body?: string;
		message?: string;
	}
	let {
		title = 'Tell us what you need',
		body = 'Send a WhatsApp message with a few details and we will get back to you with a clear quote.',
		message = "Hello Kamy's Delights, I'd like to make an enquiry."
	}: Props = $props();
</script>

<section class="container-site py-20 lg:py-28">
	<div
		data-reveal="scale"
		class="on-dark relative isolate overflow-hidden rounded-[2rem] bg-plum-600 px-6 py-14 text-white sm:px-12 lg:px-16 lg:py-20"
	>
		<div
			class="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_85%_20%,rgb(198_66_82/0.55),transparent_45%),radial-gradient(circle_at_10%_100%,rgb(30_11_39/0.6),transparent_50%)]"
		></div>
		<Star class="animate-float absolute top-1/2 right-[6%] -z-10 hidden w-56 -translate-y-1/2 text-white/10 md:block" />
		<div class="max-w-2xl">
			<p class="eyebrow !text-champagne-300">{site.tagline}</p>
			<h2 data-split class="mt-4 text-4xl leading-tight sm:text-5xl">{title}</h2>
			<p class="mt-5 text-lg text-white/75">{body}</p>
			<div class="mt-9 flex flex-wrap gap-3">
				<Button href={whatsappLink(message)} variant="light" icon="whatsapp" size="lg" track="whatsapp-cta"
					>WhatsApp us</Button
				>
				<Button href={telLink()} variant="ghost" icon="phone" size="lg" track="call-cta"
					>{site.phones[0].display}</Button
				>
			</div>
		</div>
	</div>
</section>
