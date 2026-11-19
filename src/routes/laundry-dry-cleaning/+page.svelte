<script lang="ts">
	import Seo from '#lib/components/Seo.svelte';
	import PageHero from '#lib/components/PageHero.svelte';
	import Button from '#lib/components/Button.svelte';
	import Icon from '#lib/components/Icon.svelte';
	import ServiceGrid from '#lib/components/ServiceGrid.svelte';
	import SectionIntro from '#lib/components/SectionIntro.svelte';
	import Steps from '#lib/components/Steps.svelte';
	import FaqList from '#lib/components/FaqList.svelte';
	import CtaBand from '#lib/components/CtaBand.svelte';
	import Photo from '#lib/components/Photo.svelte';
	import { telLink, whatsappLink } from '#lib/content/site.ts';
	import { laundryFaqs, laundryItems } from '#lib/content/services.ts';
	import { breadcrumbs, faqPage, service } from '#lib/seo/jsonld.ts';

	const msg = "Hello Kamy's Delights, I'd like to book a laundry pick-up.";
	const description =
		'Laundry and dry cleaning in Kampala with free pick-up and drop-off: suits, gowns, bridal wear, bedcovers, blankets, carpets and chairs, cleaned and pressed with care.';
</script>

<Seo
	title="Laundry & Dry Cleaning in Kampala | Free Pick-up & Delivery"
	{description}
	jsonld={[
		service({
			name: 'Laundry & Dry Cleaning',
			serviceType: 'Laundry and dry cleaning',
			description,
			path: '/laundry-dry-cleaning',
			items: laundryItems
		}),
		breadcrumbs([{ name: 'Laundry & Dry Cleaning', path: '/laundry-dry-cleaning' }]),
		faqPage(laundryFaqs)
	]}
/>

<PageHero
	eyebrow="Laundry & Dry Cleaning"
	lead="We collect from your home or office, clean and press everything with care, and bring it back fresh. Pick-up and drop-off are free."
	crumbs={[{ name: 'Laundry & Dry Cleaning', href: '/laundry-dry-cleaning' }]}
	photo={{ slot: 'laundry-hero', alt: 'Pressed suits and shirts on hangers', tone: 'champagne' }}
>
	{#snippet title()}Fresh, pressed and <em>delivered</em>.{/snippet}
	{#snippet actions()}
		<Button href={whatsappLink(msg)} icon="whatsapp" size="lg" track="whatsapp-laundry">Book a free pick-up</Button>
		<Button href={telLink()} variant="secondary" icon="phone" size="lg" track="call-laundry">Call us</Button>
	{/snippet}
	{#snippet aside()}
		<div class="absolute -bottom-6 left-6 flex items-center gap-3 rounded-2xl bg-white/90 px-5 py-4 shadow-[0_20px_50px_-20px_rgb(95_40_118/0.45)] ring-1 ring-champagne-300/70 backdrop-blur">
			<span class="grid size-10 place-items-center rounded-full bg-crimson-500 text-white"><Icon name="truck" class="size-5" /></span>
			<span class="text-sm leading-tight"><span class="block font-semibold text-ink">Free pick-up &amp; drop-off</span><span class="text-mauve-600">Home or office</span></span>
		</div>
	{/snippet}
</PageHero>

<section class="container-site pb-24 lg:pb-32" aria-labelledby="items-title">
	<SectionIntro id="items-title" eyebrow="What we clean" lead="Everyday wear, delicate fabrics and the big, bulky items that won't fit in a home machine.">
		{#snippet title()}From everyday shirts to <em>bridal</em> gowns{/snippet}
	</SectionIntro>
	<div class="mt-14"><ServiceGrid items={laundryItems} /></div>
</section>

<section class="relative isolate overflow-hidden bg-plum-600 py-24 text-white lg:py-32 on-dark" aria-labelledby="how-title">
	<div class="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_90%_0%,rgb(198_66_82/0.45),transparent_45%)]"></div>
	<div class="container-site grid items-center gap-14 lg:grid-cols-2">
		<div>
			<p data-reveal="rise" class="eyebrow !text-champagne-300">How pick-up works</p>
			<h2 id="how-title" data-split class="mt-4 text-4xl leading-tight sm:text-5xl">Laundry without <em>leaving</em> home</h2>
			<ol class="mt-12 space-y-8">
				{#each [
					{ t: 'Message us on WhatsApp', b: 'Tell us your location and a convenient pick-up time.' },
					{ t: 'We collect for free', b: 'Our rider picks up your items and confirms the return date.' },
					{ t: 'Cleaned with care', b: 'Each item is sorted, treated, washed or dry cleaned, and pressed.' },
					{ t: 'Delivered back fresh', b: 'Folded or on hangers, returned to your door.' }
				] as s, i (s.t)}
					<li data-reveal="rise" data-reveal-delay={i * 100} class="flex gap-5">
						<span class="grid size-10 shrink-0 place-items-center rounded-full bg-white/10 font-display text-champagne-300 ring-1 ring-white/20">{i + 1}</span>
						<div>
							<h3 class="text-xl">{s.t}</h3>
							<p class="mt-1 text-white/70">{s.b}</p>
						</div>
					</li>
				{/each}
			</ol>
		</div>
		<div data-reveal="scale" data-reveal-delay={150}>
			<Photo slot="laundry-process" alt="Kamy's Delights rider delivering clean laundry" tone="crimson" class="aspect-[4/5] rounded-[2rem]" />
		</div>
	</div>
</section>

<section class="container-site grid gap-12 py-24 lg:grid-cols-12 lg:py-32" aria-labelledby="faq-title">
	<div class="lg:col-span-4">
		<SectionIntro id="faq-title" eyebrow="Laundry FAQ">
			{#snippet title()}Good to <em>know</em>{/snippet}
		</SectionIntro>
	</div>
	<div class="lg:col-span-8"><FaqList faqs={laundryFaqs} /></div>
</section>

<CtaBand title="Book your free pick-up" body="Send us your location on WhatsApp and we will arrange a collection time that suits you." message={msg} />
