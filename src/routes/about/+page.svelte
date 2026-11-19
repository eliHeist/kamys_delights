<script lang="ts">
	import Seo from '#lib/components/Seo.svelte';
	import PageHero from '#lib/components/PageHero.svelte';
	import Button from '#lib/components/Button.svelte';
	import SectionIntro from '#lib/components/SectionIntro.svelte';
	import CtaBand from '#lib/components/CtaBand.svelte';
	import Star from '#lib/components/Star.svelte';
	import { site, whatsappLink } from '#lib/content/site.ts';
	import { divisions, values } from '#lib/content/services.ts';
	import { breadcrumbs, organization } from '#lib/seo/jsonld.ts';
</script>

<Seo
	title="About Us | A Kampala Hospitality Company"
	description="Kamy's Delights Ltd is a young Kampala hospitality company providing cleaning & facility management, laundry & dry cleaning, and catering & bakery services, with excellence at the centre."
	jsonld={[organization(), breadcrumbs([{ name: 'About', path: '/about' }])]}
/>

<PageHero
	eyebrow="About Kamy's Delights"
	lead="Kamy's Delights Ltd is a young, growing hospitality company in Kampala. We care about two things: clean, inviting spaces and unforgettable dining experiences."
	crumbs={[{ name: 'About', href: '/about' }]}
	photo={{ slot: 'about-team', alt: "Collage of Kamy's Delights services: house and office cleaning, laundry and dry cleaning, event catering and cakes", tone: 'plum' }}
>
	{#snippet title()}<em>Excellence</em> at the centre.{/snippet}
	{#snippet actions()}
		<Button href={whatsappLink()} icon="whatsapp" size="lg" track="whatsapp-about">Talk to us</Button>
		<Button href="/contact" variant="secondary" size="lg" arrow>Visit our offices</Button>
	{/snippet}
</PageHero>

<section class="container-site grid gap-16 pb-24 lg:grid-cols-12 lg:pb-32">
	<div class="lg:col-span-5">
		<SectionIntro eyebrow="Our story">
			{#snippet title()}Built on <em>care</em> and high standards{/snippet}
		</SectionIntro>
	</div>
	<div class="space-y-6 text-lg leading-relaxed text-ink/75 lg:col-span-7">
		<p data-reveal="rise">
			Kamy's Delights started with a simple belief: the places we live and work in, and the food we
			share in them, deserve real attention. Today we bring that belief to homes, offices,
			factories and events across Kampala.
		</p>
		<p data-reveal="rise" data-reveal-delay={80}>
			Our cleaning and facility team works from Ntinda, while our laundry, catering and bakery
			operate from North Park Plaza in Bweyogerere. Different crews and one standard, captured in
			our tagline: <span class="font-display text-plum-700 italic">{site.tagline.toLowerCase()}</span>.
		</p>
		<p data-reveal="rise" data-reveal-delay={160}>
			We are still young and growing, and we earn every client by doing the job right the first
			time.
		</p>
	</div>
</section>

<section class="relative isolate overflow-hidden bg-plum-950 py-24 text-white lg:py-32 on-dark">
	<Star class="animate-spin-slow absolute -right-40 -bottom-40 -z-10 w-[40rem] text-white/[0.04]" />
	<div class="container-site">
		<p data-reveal="rise" class="eyebrow !text-champagne-300">What we stand for</p>
		<h2 data-split class="mt-4 max-w-2xl text-4xl leading-tight sm:text-5xl">Our <em>values</em></h2>
		<div class="mt-16 grid gap-px overflow-hidden rounded-[var(--radius-card)] bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
			{#each values as v, i (v.title)}
				<div data-reveal="rise" data-reveal-delay={i * 100} class="bg-plum-950 p-8 transition-colors duration-500 hover:bg-plum-900">
					<Star class="size-7 text-crimson-400" />
					<h3 class="mt-6 text-2xl">{v.title}</h3>
					<p class="mt-2 text-white/65">{v.body}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<section class="container-site py-24 lg:py-32">
	<SectionIntro eyebrow="What we do" align="center">
		{#snippet title()}Three services, <em>one</em> standard{/snippet}
	</SectionIntro>
	<ul class="mt-14 grid gap-4 md:grid-cols-3">
		{#each divisions as d, i (d.id)}
			<li data-reveal="rise" data-reveal-delay={i * 100}>
				<a href={d.href} class="group block h-full rounded-[var(--radius-card)] bg-white p-8 ring-1 ring-champagne-300/70 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_30px_60px_-30px_rgb(95_40_118/0.4)]">
					<p class="eyebrow">{d.kicker}</p>
					<h3 class="mt-3 text-2xl text-ink group-hover:text-plum-700">{d.title}</h3>
					<p class="mt-3 text-ink/65">{d.summary}</p>
				</a>
			</li>
		{/each}
	</ul>
</section>

<CtaBand />
