<script lang="ts">
	import Seo from '#lib/components/Seo.svelte';
	import Button from '#lib/components/Button.svelte';
	import Photo from '#lib/components/Photo.svelte';
	import Star from '#lib/components/Star.svelte';
	import Icon from '#lib/components/Icon.svelte';
	import Marquee from '#lib/components/Marquee.svelte';
	import SectionIntro from '#lib/components/SectionIntro.svelte';
	import Steps from '#lib/components/Steps.svelte';
	import Locations from '#lib/components/Locations.svelte';
	import FaqList from '#lib/components/FaqList.svelte';
	import CtaBand from '#lib/components/CtaBand.svelte';
	import { site, telLink, whatsappLink } from '#lib/content/site.ts';
	import { useGsap } from '#lib/gsap/useGsap.svelte.ts';
	import { divisions, generalFaqs, values } from '#lib/content/services.ts';
	import { faqPage, localBusinesses, organization, website } from '#lib/seo/jsonld.ts';

	let collage = $state<HTMLElement>();


	// Gentle pointer parallax on the hero collage: each layer drifts at its own depth
	useGsap(
		({ gsap, reducedMotion }) => {
			const el = collage;
			if (!el || reducedMotion || !matchMedia('(pointer: fine)').matches) return;
			const layers = Array.from(el.querySelectorAll<HTMLElement>('[data-depth]')).map((layer) => ({
				depth: Number(layer.dataset.depth),
				x: gsap.quickTo(layer, 'x', { duration: 1.2, ease: 'expo.out' }),
				y: gsap.quickTo(layer, 'y', { duration: 1.2, ease: 'expo.out' })
			}));
			const move = (e: PointerEvent) => {
				const r = el.getBoundingClientRect();
				const px = (e.clientX - r.left) / r.width - 0.5;
				const py = (e.clientY - r.top) / r.height - 0.5;
				for (const l of layers) (l.x(px * l.depth), l.y(py * l.depth));
			};
			const leave = () => layers.forEach((l) => (l.x(0), l.y(0)));
			el.addEventListener('pointermove', move);
			el.addEventListener('pointerleave', leave);
			return () => {
				el.removeEventListener('pointermove', move);
				el.removeEventListener('pointerleave', leave);
			};
		},
		() => collage
	);

	const marquee = [
		'Deep house cleaning',
		'Office cleaning',
		'Dry cleaning',
		'Bridal wear care',
		'Wedding catering',
		'Custom cakes',
		'Fumigation',
		'Corporate events',
		'Free laundry pick-up'
	];
</script>

<Seo
	bare
	title="Kamy's Delights | Cleaning, Laundry & Catering Services in Kampala"
	description="Professional cleaning & facility management, laundry & dry cleaning with free pick-up, and catering & custom cakes for weddings, parties and corporate events in Kampala, Uganda."
	jsonld={[organization(), website(), ...localBusinesses(), faqPage(generalFaqs)]}
/>

<!-- ───────────── Hero ───────────── -->
<section class="relative isolate flex flex-col overflow-hidden pt-28 lg:min-h-svh lg:pt-20">
	<div class="absolute inset-0 -z-20 bg-[radial-gradient(ellipse_at_top_right,var(--color-lilac-200),transparent_60%),radial-gradient(ellipse_at_bottom_left,var(--color-champagne-100),transparent_55%)]"></div>
	<Star data-speed="0.8" class="animate-spin-slow absolute top-10 -right-40 -z-10 w-[46rem] text-plum-600/[0.045]" />

	<div class="container-site grid flex-1 items-center gap-14 pb-20 lg:grid-cols-12 lg:gap-10 lg:py-12">
		<div class="lg:col-span-6 xl:col-span-6">
			<p data-reveal="rise" class="eyebrow flex items-center gap-3">
				<span class="h-px w-8 bg-crimson-500"></span>Cleaning · Laundry · Catering in Kampala
			</p>
			<h1 data-split data-split-delay="100" class="mt-6 text-[2.9rem] leading-[1] text-ink sm:text-7xl lg:text-[5.2rem]">
				Clean spaces, fresh linen &amp; <em>delightful</em> food.
			</h1>
			<p data-reveal="rise" data-reveal-delay={200} class="mt-7 max-w-xl text-lg leading-relaxed text-ink/70 sm:text-xl">
				{site.name} keeps homes, offices and factories spotless, collects and returns your laundry
				for free, and caters weddings, parties and corporate events with cakes baked to order.
			</p>
			<div data-reveal="rise" data-reveal-delay={300} class="mt-10 flex flex-wrap items-center gap-3">
				<Button
					href={whatsappLink("Hello Kamy's Delights, I'd like to make an enquiry.")}
					icon="whatsapp"
					size="lg"
					track="whatsapp-hero">Get a quote on WhatsApp</Button
				>
				<Button href={telLink()} variant="secondary" icon="phone" size="lg" track="call-hero"
					>Call us</Button
				>
			</div>
			<dl data-reveal="rise" data-reveal-delay={400} class="mt-12 flex flex-wrap gap-x-10 gap-y-4 text-sm">
				<div class="flex items-center gap-2.5">
					<dt class="sr-only">Hours</dt>
					<Icon name="clock" class="size-4 text-crimson-500" />
					<dd class="text-ink/70">Mon – Sat, 9 am – 5 pm</dd>
				</div>
				<div class="flex items-center gap-2.5">
					<dt class="sr-only">Offices</dt>
					<Icon name="map" class="size-4 text-crimson-500" />
					<dd class="text-ink/70">Ntinda &amp; Bweyogerere</dd>
				</div>
			</dl>
		</div>

		<!-- Collage -->
		<div class="relative lg:col-span-6" bind:this={collage}>
			<div class="relative mx-auto grid max-w-xl grid-cols-5 grid-rows-6 gap-4 lg:max-w-none" style="height: clamp(26rem, 46vw, 38rem)">
				<div
					data-reveal="scale" data-reveal-delay={150}
					class="col-span-3 row-span-6"
				>
					<div class="size-full" data-depth="-14"><Photo
						slot="hero-cleaning"
						alt="Kamy's Delights cleaner mopping a bright living room"
						tone="lilac"
						priority
						sizes="(min-width: 1024px) 30vw, 60vw"
						class="size-full rounded-[2rem] shadow-[0_40px_80px_-40px_rgb(95_40_118/0.5)]"
					/></div>
				</div>
				<div
					data-reveal="scale" data-reveal-delay={300}
					class="col-span-2 row-span-3"
				>
					<div class="size-full" data-depth="18"><Photo
						slot="hero-cake"
						alt="Custom celebration cake decorated with fresh flowers"
						tone="champagne"
						priority
						sizes="(min-width: 1024px) 20vw, 40vw"
						class="size-full rounded-[1.5rem]"
					/></div>
				</div>
				<div
					data-reveal="scale" data-reveal-delay={450}
					class="col-span-2 row-span-3"
				>
					<div class="size-full" data-depth="26"><Photo
						slot="hero-laundry"
						alt="Freshly pressed shirts and folded linen ready for delivery"
						tone="plum"
						sizes="(min-width: 1024px) 20vw, 40vw"
						class="size-full rounded-[1.5rem]"
					/></div>
				</div>

				<!-- floating badge -->
				<div
					data-reveal="rise" data-reveal-delay={650}
					class="absolute -bottom-6 left-4 flex items-center gap-3 rounded-2xl bg-white/90 px-5 py-4 shadow-[0_20px_50px_-20px_rgb(95_40_118/0.45)] ring-1 ring-champagne-300/70 backdrop-blur sm:left-8"
				>
					<span class="grid size-10 place-items-center rounded-full bg-crimson-500 text-white">
						<Icon name="truck" class="size-5" />
					</span>
					<span class="text-sm leading-tight">
						<span class="block font-semibold text-ink">Free pick-up &amp; drop-off</span>
						<span class="text-mauve-600">on all laundry orders</span>
					</span>
				</div>
				<Star class="animate-float absolute -top-6 right-6 w-12 text-crimson-500 drop-shadow-sm" />
			</div>
		</div>
	</div>

	<Marquee items={marquee} />
</section>

<!-- ───────────── Divisions ───────────── -->
<section class="container-site py-24 lg:py-32" aria-labelledby="services-title">
	<div class="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
		<SectionIntro
			id="services-title"
			eyebrow="What we do"
			lead="Three services from one team, each with its own trained crew, all held to the same standard."
		>
			{#snippet title()}One partner for <em>clean spaces</em> and memorable events{/snippet}
		</SectionIntro>
	</div>

	<div class="mt-16 grid gap-6 lg:grid-cols-3">
		{#each divisions as d, i (d.id)}
			<article data-reveal="rise" data-reveal-delay={i * 120} class="group relative flex flex-col">
				<a href={d.href} class="absolute inset-0 z-10 rounded-[2rem]" aria-label="{d.title}: learn more"></a>
				<div class="overflow-hidden rounded-[2rem]">
					<Photo
						slot={d.photo}
						alt={d.title}
						tone={d.tone}
						sizes="(min-width: 1024px) 33vw, 100vw"
						class="aspect-[4/5] transition-transform duration-[1.2s] ease-[var(--ease-out-soft)] group-hover:scale-[1.04]"
					/>
				</div>
				<div class="flex flex-1 flex-col pt-7">
					<p class="eyebrow">{d.kicker}</p>
					<h3 class="mt-3 text-3xl leading-tight text-ink transition-colors group-hover:text-plum-700">
						{d.title}
					</h3>
					<p class="mt-3 leading-relaxed text-ink/65">{d.summary}</p>
					<ul class="mt-5 space-y-2 text-[0.95rem] text-ink/80">
						{#each d.highlights as h (h)}
							<li class="flex gap-2.5"><Icon name="check" class="mt-0.5 size-4 shrink-0 text-crimson-500" />{h}</li>
						{/each}
					</ul>
					<span class="mt-7 inline-flex items-center gap-2 text-sm font-medium text-plum-700">
						Explore {d.title.split(' ')[0].toLowerCase()}
						<span class="grid size-8 place-items-center rounded-full ring-1 ring-plum-200 transition-all duration-500 ease-[var(--ease-spring)] group-hover:translate-x-1 group-hover:bg-plum-600 group-hover:text-white group-hover:ring-plum-600">
							<Icon name="arrow" class="size-4" />
						</span>
					</span>
				</div>
			</article>
		{/each}
	</div>
</section>

<!-- ───────────── Why us ───────────── -->
<section class="relative isolate overflow-hidden bg-lilac-100 py-24 lg:py-32" aria-labelledby="why-title">
	<Star data-speed="0.85" class="absolute -bottom-40 -left-32 -z-10 w-[34rem] text-white/70" />
	<div class="container-site grid gap-16 lg:grid-cols-12">
		<div class="lg:col-span-5">
			<SectionIntro
				id="why-title"
				eyebrow="Why Kamy's Delights"
				lead="We are a young company with a simple promise: do every job properly, treat every space with respect, and leave people delighted."
			>
				{#snippet title()}<em>Excellence</em> at the centre{/snippet}
			</SectionIntro>
		</div>
		<div class="grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:col-span-7">
			{#each values as v, i (v.title)}
				<div data-reveal="rise" data-reveal-delay={i * 100} class="group">
					<span class="block h-px w-full bg-champagne-500/50">
						<span class="block h-px w-10 bg-crimson-500 transition-all duration-700 ease-[var(--ease-out-soft)] group-hover:w-full"></span>
					</span>
					<h3 class="mt-6 text-2xl text-ink">{v.title}</h3>
					<p class="mt-2 leading-relaxed text-ink/65">{v.body}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- ───────────── How it works ───────────── -->
<section class="container-site py-24 lg:py-32" aria-labelledby="how-title">
	<SectionIntro id="how-title" eyebrow="How it works" align="center">
		{#snippet title()}Simple from <em>hello</em> to done{/snippet}
	</SectionIntro>
	<div class="mt-16">
		<Steps
			steps={[
				{ title: 'Message us', body: 'Tell us on WhatsApp or by phone what you need, where and when.' },
				{ title: 'Get a clear quote', body: 'We confirm the scope and price, with a site visit for larger jobs.' },
				{ title: 'We deliver', body: 'Our team arrives on time, does the work properly and checks it with you.' }
			]}
		/>
	</div>
</section>

<!-- ───────────── Locations ───────────── -->
<section class="border-t border-champagne-300/60 bg-white/50 py-24 lg:py-32" aria-labelledby="visit-title">
	<div class="container-site">
		<SectionIntro
			id="visit-title"
			eyebrow="Where to find us"
			lead="We come to you anywhere in Kampala and the surrounding areas. You are also welcome to visit either office."
		>
			{#snippet title()}Two offices, <em>one</em> team{/snippet}
		</SectionIntro>
		<div class="mt-14"><Locations /></div>
		<p data-reveal="rise" class="mt-10 text-sm leading-relaxed text-mauve-600">
			<span class="font-medium text-ink/80">Areas we serve:</span>
			{site.areasServed.join(' · ')} and beyond.
		</p>
	</div>
</section>

<!-- ───────────── FAQ ───────────── -->
<section class="container-site grid gap-12 py-24 lg:grid-cols-12 lg:py-32" aria-labelledby="faq-title">
	<div class="lg:col-span-4">
		<SectionIntro id="faq-title" eyebrow="Questions">
			{#snippet title()}Good to <em>know</em>{/snippet}
		</SectionIntro>
	</div>
	<div class="lg:col-span-8"><FaqList faqs={generalFaqs} /></div>
</section>

<CtaBand />
