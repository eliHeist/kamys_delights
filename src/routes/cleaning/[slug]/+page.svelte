<script lang="ts">
	import Seo from '#lib/components/Seo.svelte';
	import PageHero from '#lib/components/PageHero.svelte';
	import Button from '#lib/components/Button.svelte';
	import ServiceGrid from '#lib/components/ServiceGrid.svelte';
	import SectionIntro from '#lib/components/SectionIntro.svelte';
	import FaqList from '#lib/components/FaqList.svelte';
	import CtaBand from '#lib/components/CtaBand.svelte';
	import Icon from '#lib/components/Icon.svelte';
	import { telLink, whatsappLink } from '#lib/content/site.ts';
	import { breadcrumbs, faqPage, service } from '#lib/seo/jsonld.ts';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
	const g = $derived(data.group);
	const msg = $derived(`Hello Kamy's Delights, I'd like a quote for ${g.title.toLowerCase()}.`);
	const path = $derived(`/cleaning/${g.slug}`);
	const [first, ...rest] = $derived(g.title.split(' '));
</script>

<Seo
	title={g.seo.title}
	description={g.seo.description}
	jsonld={[
		service({ name: g.title, serviceType: g.title, description: g.seo.description, path, items: g.items }),
		breadcrumbs([
			{ name: 'Cleaning', path: '/cleaning' },
			{ name: g.title, path }
		]),
		faqPage(g.faqs)
	]}
/>

<PageHero
	eyebrow="Cleaning services in Kampala"
	lead={g.intro}
	crumbs={[
		{ name: 'Cleaning', href: '/cleaning' },
		{ name: g.title, href: path }
	]}
	photo={{ slot: g.photo, alt: g.title, tone: g.tone }}
>
	{#snippet title()}<em>{first}</em> {rest.join(' ')}{/snippet}
	{#snippet actions()}
		<Button href={whatsappLink(msg)} icon="whatsapp" size="lg" track="whatsapp-{g.slug}">Get a quote</Button>
		<Button href={telLink()} variant="secondary" icon="phone" size="lg" track="call-{g.slug}">Call us</Button>
	{/snippet}
	{#snippet aside()}
		<div class="absolute -bottom-6 left-6 rounded-2xl bg-white/90 px-5 py-4 shadow-[0_20px_50px_-20px_rgb(95_40_118/0.45)] ring-1 ring-champagne-300/70 backdrop-blur">
			<p class="eyebrow !text-[0.65rem]">Ideal for</p>
			<p class="mt-1 text-sm font-medium text-ink">{g.idealFor.join(' · ')}</p>
		</div>
	{/snippet}
</PageHero>

<section class="container-site pb-24 lg:pb-32" aria-labelledby="included-title">
	<SectionIntro id="included-title" eyebrow="What's included">
		{#snippet title()}{g.title}, <em>done properly</em>{/snippet}
	</SectionIntro>
	<div class="mt-14"><ServiceGrid items={g.items} /></div>
</section>

<section class="container-site grid gap-12 pb-24 lg:grid-cols-12 lg:pb-32" aria-labelledby="faq-title">
	<div class="lg:col-span-4">
		<SectionIntro id="faq-title" eyebrow="FAQ">
			{#snippet title()}Common <em>questions</em>{/snippet}
		</SectionIntro>
	</div>
	<div class="lg:col-span-8"><FaqList faqs={g.faqs} /></div>
</section>

<section class="border-t border-champagne-300/60 bg-white/50 py-20" aria-labelledby="more-title">
	<div class="container-site">
		<h2 id="more-title" data-reveal="rise" class="text-3xl text-ink">More cleaning services</h2>
		<ul class="mt-8 grid gap-4 md:grid-cols-3">
			{#each data.others as o, i (o.slug)}
				<li data-reveal="rise" data-reveal-delay={i * 80}>
					<a href="/cleaning/{o.slug}" class="group flex h-full items-center justify-between gap-4 rounded-2xl bg-cream p-6 ring-1 ring-champagne-300/70 transition-all duration-500 hover:-translate-y-1 hover:bg-white hover:shadow-[0_24px_48px_-28px_rgb(95_40_118/0.4)]">
						<span>
							<span class="block font-display text-xl text-ink">{o.title}</span>
							<span class="mt-1 block text-sm text-ink/60">{o.short}</span>
						</span>
						<Icon name="arrow" class="size-5 shrink-0 text-plum-600 transition-transform duration-300 group-hover:translate-x-1" />
					</a>
				</li>
			{/each}
		</ul>
	</div>
</section>

<CtaBand title="Let's get it clean" message={msg} />
