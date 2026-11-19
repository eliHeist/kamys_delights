<script lang="ts">
	import Seo from '#lib/components/Seo.svelte';
	import PageHero from '#lib/components/PageHero.svelte';
	import Button from '#lib/components/Button.svelte';
	import Photo from '#lib/components/Photo.svelte';
	import Icon from '#lib/components/Icon.svelte';
	import Star from '#lib/components/Star.svelte';
	import ServiceGrid from '#lib/components/ServiceGrid.svelte';
	import SectionIntro from '#lib/components/SectionIntro.svelte';
	import Steps from '#lib/components/Steps.svelte';
	import FaqList from '#lib/components/FaqList.svelte';
	import CtaBand from '#lib/components/CtaBand.svelte';
	import { telLink, whatsappLink } from '#lib/content/site.ts';
	import { bakeryRange, cakeFlavours, cakeSizes, cateringEvents, cateringFaqs } from '#lib/content/services.ts';
	import { breadcrumbs, faqPage, service } from '#lib/seo/jsonld.ts';

	const cateringMsg = "Hello Kamy's Delights, I'd like to talk about catering for an event.";
	const cakeMsg = "Hello Kamy's Delights, I'd like to order a cake.";
	const description =
		'Wedding, party and corporate event catering in Kampala, plus made-to-order wedding cakes, celebration cakes, cupcakes and pastries from the Kamy’s Delights bakery.';
</script>

<Seo
	title="Catering Services & Custom Cakes in Kampala | Weddings, Parties, Corporate"
	{description}
	jsonld={[
		service({ name: 'Event Catering', serviceType: 'Catering', description, path: '/catering-bakery', items: cateringEvents }),
		service({ name: "Kamy's Bakery: Custom Cakes", serviceType: 'Bakery', description: 'Made-to-order cakes, pastries and treats.', path: '/catering-bakery', items: bakeryRange }),
		breadcrumbs([{ name: 'Catering & Bakery', path: '/catering-bakery' }]),
		faqPage(cateringFaqs)
	]}
/>

<PageHero
	eyebrow="Catering & Bakery"
	lead="Event catering planned around your guests, and cakes baked to order for the moments that matter. Where every bite is a delight."
	crumbs={[{ name: 'Catering & Bakery', href: '/catering-bakery' }]}
	photo={{ slot: 'catering-hero', alt: 'Elegant buffet set for a wedding reception', tone: 'plum' }}
>
	{#snippet title()}Food that makes the <em>occasion</em>.{/snippet}
	{#snippet actions()}
		<Button href={whatsappLink(cateringMsg)} icon="whatsapp" size="lg" track="whatsapp-catering">Plan my event</Button>
		<Button href="#bakery" variant="secondary" size="lg" arrow>Order a cake</Button>
	{/snippet}
</PageHero>

<!-- Catering -->
<section class="container-site pb-24 lg:pb-32" aria-labelledby="events-title">
	<SectionIntro
		id="events-title"
		eyebrow="Event catering"
		lead="There is no fixed menu. We plan each menu around your guests, your budget and the feel of your event, then serve it with care."
	>
		{#snippet title()}Weddings, parties &amp; <em>corporate</em> events{/snippet}
	</SectionIntro>
	<div class="mt-14 grid gap-6 lg:grid-cols-3">
		{#each cateringEvents as e, i (e.name)}
			<article data-reveal="rise" data-reveal-delay={i * 120} class="group">
				<div class="overflow-hidden rounded-[2rem]">
					<Photo
						slot="catering-{['weddings', 'parties', 'corporate'][i]}"
						alt={e.name}
						tone={(['plum', 'champagne', 'lilac'] as const)[i]}
						sizes="(min-width: 1024px) 33vw, 100vw"
						class="aspect-[4/3] transition-transform duration-[1.2s] ease-[var(--ease-out-soft)] group-hover:scale-[1.04]"
					/>
				</div>
				<h3 class="mt-6 text-2xl text-ink">{e.name}</h3>
				<p class="mt-2 leading-relaxed text-ink/65">{e.description}</p>
			</article>
		{/each}
	</div>
	<div data-reveal="rise" class="mt-14 flex flex-col items-start gap-6 rounded-[var(--radius-card)] bg-lilac-100 p-8 sm:flex-row sm:items-center sm:justify-between lg:p-10">
		<p class="max-w-xl text-lg text-ink/80">
			Tell us the date, the number of guests and the type of event, and we will put together a
			proposed menu and quote.
		</p>
		<Button href={whatsappLink(cateringMsg)} icon="whatsapp" track="whatsapp-catering-mid">Request a menu</Button>
	</div>
</section>

<!-- Bakery -->
<section id="bakery" class="relative isolate overflow-hidden bg-champagne-100 py-24 lg:py-32" aria-labelledby="bakery-title">
	<Star data-speed="0.85" class="animate-spin-slow absolute -top-32 -right-24 -z-10 w-[30rem] text-white/80" />
	<div class="container-site">
		<div class="grid gap-14 lg:grid-cols-12 lg:items-end">
			<div class="lg:col-span-7">
				<SectionIntro
					id="bakery-title"
					eyebrow="Kamy's Bakery · Order only"
					lead="Every cake is baked fresh to order using quality ingredients, sourced locally wherever possible, and finished to match your celebration."
				>
					{#snippet title()}Where every bite is a <em>delight</em>{/snippet}
				</SectionIntro>
			</div>
			<div data-reveal="rise" data-reveal-delay={150} class="lg:col-span-5">
				<p class="flex items-start gap-3 rounded-2xl bg-white/70 p-5 text-sm text-ink/80 ring-1 ring-champagne-300">
					<Icon name="clock" class="mt-0.5 size-5 shrink-0 text-crimson-500" />
					<span>Order at least <strong class="font-semibold text-ink">3 days ahead</strong> for celebration cakes and <strong class="font-semibold text-ink">2–3 weeks</strong> for wedding cakes.</span>
				</p>
			</div>
		</div>

		<div class="mt-14"><ServiceGrid items={bakeryRange} /></div>

		<div class="mt-16 grid gap-6 lg:grid-cols-2">
			<div data-reveal="rise" class="rounded-[var(--radius-card)] bg-white p-8 ring-1 ring-champagne-300/70 lg:p-10">
				<h3 class="text-2xl text-ink">Popular flavours</h3>
				<ul class="mt-6 flex flex-wrap gap-2.5">
					{#each cakeFlavours as f (f)}
						<li class="rounded-full bg-lilac-100 px-4 py-2 text-sm text-plum-700 transition-all duration-300 hover:-translate-y-0.5 hover:bg-plum-600 hover:text-white">{f}</li>
					{/each}
				</ul>
				<p class="mt-6 text-sm text-ink/60">Have something else in mind? Just ask.</p>
			</div>
			<div data-reveal="rise" data-reveal-delay={120} class="rounded-[var(--radius-card)] bg-white p-8 ring-1 ring-champagne-300/70 lg:p-10">
				<h3 class="text-2xl text-ink">Sizes</h3>
				<dl class="mt-6 divide-y divide-champagne-300/70">
					{#each cakeSizes as s (s.size)}
						<div class="flex items-baseline justify-between py-3">
							<dt class="font-display text-xl text-plum-700">{s.size}</dt>
							<dd class="text-sm text-ink/65">{s.serves}</dd>
						</div>
					{/each}
				</dl>
				<p class="mt-6 text-sm text-ink/60">Prices depend on size, flavour and design. Ask us for a quote.</p>
			</div>
		</div>

		<div class="mt-20">
			<h3 data-reveal="rise" class="text-center font-display text-3xl text-ink">How to order a cake</h3>
			<div class="mt-12">
				<Steps
					steps={[
						{ title: 'Share your idea', body: 'Send the date, size, flavour and any design inspiration on WhatsApp.' },
						{ title: 'Confirm & book', body: 'We confirm the design and price, then reserve your date.' },
						{ title: 'Collect or delivery', body: 'Pick up at Bweyogerere, or we deliver around Kampala and Wakiso.' }
					]}
				/>
			</div>
			<div data-reveal="rise" class="mt-14 flex flex-wrap justify-center gap-3">
				<Button href={whatsappLink(cakeMsg)} icon="whatsapp" size="lg" track="whatsapp-cake">Order a cake on WhatsApp</Button>
				<Button href={telLink()} variant="secondary" icon="phone" size="lg" track="call-cake">Call to order</Button>
			</div>
		</div>
	</div>
</section>

<section class="container-site grid gap-12 py-24 lg:grid-cols-12 lg:py-32" aria-labelledby="faq-title">
	<div class="lg:col-span-4">
		<SectionIntro id="faq-title" eyebrow="Catering & cake FAQ">
			{#snippet title()}Before you <em>order</em>{/snippet}
		</SectionIntro>
	</div>
	<div class="lg:col-span-8"><FaqList faqs={cateringFaqs} /></div>
</section>

<CtaBand title="Planning something special?" body="Tell us about your event or cake and we'll help you plan the details." message={cateringMsg} />
