<script lang="ts">
	import Seo from '#lib/components/Seo.svelte';
	import PageHero from '#lib/components/PageHero.svelte';
	import Button from '#lib/components/Button.svelte';
	import Photo from '#lib/components/Photo.svelte';
	import Icon from '#lib/components/Icon.svelte';
	import SectionIntro from '#lib/components/SectionIntro.svelte';
	import Steps from '#lib/components/Steps.svelte';
	import FaqList from '#lib/components/FaqList.svelte';
	import CtaBand from '#lib/components/CtaBand.svelte';
	import { telLink, whatsappLink } from '#lib/content/site.ts';
	import { cleaningGroups } from '#lib/content/services.ts';
	import { breadcrumbs, faqPage, service } from '#lib/seo/jsonld.ts';

	const msg = "Hello Kamy's Delights, I'd like a quote for cleaning services.";
	const faqs = cleaningGroups.flatMap((g) => g.faqs.slice(0, 1));
	const description =
		'Residential, commercial, industrial and specialised cleaning in Kampala: deep house cleaning, office and facility cleaning, factory cleaning, fumigation and water tank disinfection.';
</script>

<Seo
	title="Cleaning & Facility Management Services in Kampala"
	{description}
	jsonld={[
		service({
			name: 'Cleaning & Facility Management',
			serviceType: 'Cleaning services',
			description,
			path: '/cleaning',
			items: cleaningGroups.flatMap((g) => g.items)
		}),
		breadcrumbs([{ name: 'Cleaning', path: '/cleaning' }]),
		faqPage(faqs)
	]}
/>

<PageHero
	eyebrow="Cleaning & Facility Management"
	lead="From a one-off deep clean at home to daily care for offices, hotels and factories, our trained and supervised team cleans every space as if it were our own."
	crumbs={[{ name: 'Cleaning', href: '/cleaning' }]}
	photo={{ slot: 'cleaning-hero', alt: 'Kamy’s Delights team cleaning an office', tone: 'lilac' }}
>
	{#snippet title()}Spotless spaces, <em>every</em> time.{/snippet}
	{#snippet actions()}
		<Button href={whatsappLink(msg)} icon="whatsapp" size="lg" track="whatsapp-cleaning">Get a cleaning quote</Button>
		<Button href={telLink()} variant="secondary" icon="phone" size="lg" track="call-cleaning">Call us</Button>
	{/snippet}
</PageHero>

<section class="container-site pb-24 lg:pb-32" aria-labelledby="groups-title">
	<SectionIntro id="groups-title" eyebrow="Our cleaning services" lead="Homes, offices, buildings, factories and institutions across Kampala.">
		{#snippet title()}Choose the <em>clean</em> you need{/snippet}
	</SectionIntro>

	<div class="mt-14 grid gap-6 md:grid-cols-2">
		{#each cleaningGroups as g, i (g.slug)}
			<article data-reveal="rise" data-reveal-delay={(i % 2) * 120} class="group relative overflow-hidden rounded-[2rem] bg-white ring-1 ring-champagne-300/70 transition-shadow duration-500 hover:shadow-[0_40px_80px_-40px_rgb(95_40_118/0.4)]">
				<div class="overflow-hidden">
					<Photo slot={g.photo} alt={g.title} tone={g.tone} sizes="(min-width: 768px) 50vw, 100vw" class="aspect-[16/9] transition-transform duration-[1.2s] ease-[var(--ease-out-soft)] group-hover:scale-[1.04]" />
				</div>
				<div class="p-8 lg:p-10">
					<h3 class="text-3xl text-ink">
						<a href="/cleaning/{g.slug}" class="after:absolute after:inset-0">{g.title}</a>
					</h3>
					<p class="mt-2 text-ink/65">{g.short}</p>
					<ul class="mt-6 grid gap-2 text-[0.95rem] text-ink/80 sm:grid-cols-2">
						{#each g.items.slice(0, 4) as item (item.name)}
							<li class="flex gap-2.5"><Icon name="check" class="mt-0.5 size-4 shrink-0 text-crimson-500" />{item.name}</li>
						{/each}
					</ul>
					<span class="mt-8 inline-flex items-center gap-2 text-sm font-medium text-plum-700">
						See {g.title.toLowerCase()}
						<Icon name="arrow" class="size-4 transition-transform duration-300 group-hover:translate-x-1" />
					</span>
				</div>
			</article>
		{/each}
	</div>
</section>

<section class="bg-lilac-100 py-24 lg:py-32" aria-labelledby="process-title">
	<div class="container-site">
		<SectionIntro id="process-title" eyebrow="Our process" align="center">
			{#snippet title()}How a Kamy's clean <em>works</em>{/snippet}
		</SectionIntro>
		<div class="mt-16">
			<Steps
				steps={[
					{ title: 'Request', body: 'Send photos or a short description on WhatsApp.' },
					{ title: 'Assess & quote', body: 'We confirm the scope and price, with a site visit for larger spaces.' },
					{ title: 'Clean', body: 'A supervised team arrives on schedule with all equipment.' },
					{ title: 'Check', body: 'We walk through the result with you before we leave.' }
				]}
			/>
		</div>
	</div>
</section>

<section class="container-site grid gap-12 py-24 lg:grid-cols-12 lg:py-32" aria-labelledby="faq-title">
	<div class="lg:col-span-4">
		<SectionIntro id="faq-title" eyebrow="Cleaning FAQ">
			{#snippet title()}Questions, <em>answered</em>{/snippet}
		</SectionIntro>
	</div>
	<div class="lg:col-span-8"><FaqList {faqs} /></div>
</section>

<CtaBand title="Ready for a cleaner space?" message={msg} />
