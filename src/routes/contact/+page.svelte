<script lang="ts">
	import Seo from '#lib/components/Seo.svelte';
	import Icon from '#lib/components/Icon.svelte';
	import Star from '#lib/components/Star.svelte';
	import Locations from '#lib/components/Locations.svelte';
	import SectionIntro from '#lib/components/SectionIntro.svelte';
	import { magnetic } from '#lib/actions/magnetic.ts';
	import { site, telLink } from '#lib/content/site.ts';
	import { breadcrumbs, localBusinesses } from '#lib/seo/jsonld.ts';

	const services = [
		'House cleaning',
		'Office / building cleaning',
		'Industrial cleaning',
		'Fumigation / pest control',
		'Laundry pick-up',
		'Event catering',
		'Cake order'
	];

	let selected = $state<string[]>([]);
	let name = $state('');
	let location = $state('');
	let details = $state('');

	const message = $derived(
		[
			"Hello Kamy's Delights,",
			selected.length ? `I'm interested in: ${selected.join(', ')}.` : "I'd like to make an enquiry.",
			location && `Location: ${location}.`,
			details,
			name && `- ${name}`
		]
			.filter(Boolean)
			.join('\n')
	);

	function toggle(s: string) {
		selected = selected.includes(s) ? selected.filter((x) => x !== s) : [...selected, s];
	}
</script>

<Seo
	title="Contact Us | WhatsApp, Phone & Office Locations"
	description="Contact Kamy's Delights on WhatsApp or by phone. Offices at Kigunga Stage, Ntinda and North Park Plaza, Bweyogerere (opposite UNBS). Open Monday to Saturday, 9 am to 5 pm."
	jsonld={[...localBusinesses(), breadcrumbs([{ name: 'Contact', path: '/contact' }])]}
/>

<section class="relative isolate overflow-hidden pt-28 pb-24 lg:pt-36 lg:pb-32">
	<div class="absolute inset-x-0 top-0 -z-10 h-[70%] bg-gradient-to-b from-lilac-100 to-cream"></div>
	<Star class="animate-spin-slow absolute -top-32 -right-32 -z-10 w-[32rem] text-plum-600/[0.05]" />

	<div class="container-site grid gap-14 lg:grid-cols-12">
		<div class="lg:col-span-5">
			<p data-reveal="rise" class="eyebrow flex items-center gap-3"><span class="h-px w-8 bg-crimson-500"></span>Contact</p>
			<h1 data-split data-split-delay="100" class="mt-5 text-5xl leading-[1.02] text-ink sm:text-6xl">Let's <em>talk</em>.</h1>
			<p data-reveal="rise" data-reveal-delay={180} class="mt-6 text-lg leading-relaxed text-ink/70">
				The fastest way to reach us is WhatsApp. Pick what you need and we'll start the conversation
				for you, or call us during working hours.
			</p>

			<ul class="mt-10 space-y-4">
				{#each site.phones as p, i (p.e164)}
					<li data-reveal="rise" data-reveal-delay={240 + i * 60}>
						<a href={telLink(i)} data-track="call-contact" class="group flex items-center gap-4">
							<span class="grid size-12 place-items-center rounded-full bg-white text-plum-600 ring-1 ring-champagne-300 transition-colors group-hover:bg-plum-600 group-hover:text-white"><Icon name="phone" /></span>
							<span><span class="block text-sm text-mauve-600">{p.label}</span><span class="text-lg font-medium text-ink">{p.display}</span></span>
						</a>
					</li>
				{/each}
				<li data-reveal="rise" data-reveal-delay={360}>
					<a href="mailto:{site.email}" class="group flex items-center gap-4">
						<span class="grid size-12 place-items-center rounded-full bg-white text-plum-600 ring-1 ring-champagne-300 transition-colors group-hover:bg-plum-600 group-hover:text-white"><Icon name="mail" /></span>
						<span><span class="block text-sm text-mauve-600">Email</span><span class="text-lg font-medium break-all text-ink">{site.email}</span></span>
					</a>
				</li>
				<li data-reveal="rise" data-reveal-delay={420} class="flex items-center gap-4">
					<span class="grid size-12 place-items-center rounded-full bg-white text-plum-600 ring-1 ring-champagne-300"><Icon name="clock" /></span>
					<span><span class="block text-sm text-mauve-600">Working hours</span><span class="text-lg font-medium text-ink">{site.hours.display}</span></span>
				</li>
			</ul>
		</div>

		<!-- WhatsApp message builder: works as a plain GET form to wa.me without JS -->
		<div class="lg:col-span-7" data-reveal="scale" data-reveal-delay={150}>
			<form
				action="https://wa.me/{site.whatsapp}"
				method="get"
				target="_blank"
				class="rounded-[2rem] bg-white p-7 shadow-[0_40px_80px_-40px_rgb(95_40_118/0.35)] ring-1 ring-champagne-300/70 sm:p-10"
			>
				<h2 class="text-3xl text-ink">Start a WhatsApp message</h2>
				<p class="mt-2 text-ink/60">Nothing is sent until you press send in WhatsApp.</p>

				<fieldset class="mt-8">
					<legend class="text-sm font-medium text-ink">What do you need?</legend>
					<div class="mt-3 flex flex-wrap gap-2">
						{#each services as s (s)}
							<button
								type="button"
								onclick={() => toggle(s)}
								aria-pressed={selected.includes(s)}
								class="flex items-center gap-1.5 rounded-full px-4 py-2 text-sm ring-1 transition-all duration-300 ease-[var(--ease-spring)] active:scale-95 {selected.includes(s)
									? 'bg-plum-600 text-white ring-plum-600'
									: 'bg-cream text-ink/80 ring-champagne-300 hover:ring-plum-300'}"
							>
								{#if selected.includes(s)}<Icon name="check" class="size-3.5" />{/if}
								{s}
							</button>
						{/each}
					</div>
				</fieldset>

				<div class="mt-7 grid gap-5 sm:grid-cols-2">
					<label class="block">
						<span class="text-sm font-medium text-ink">Your name</span>
						<input bind:value={name} autocomplete="name" class="mt-2 block h-12 w-full rounded-xl border-0 bg-cream px-4 ring-1 ring-champagne-300 transition-shadow outline-none focus:ring-2 focus:ring-plum-500" />
					</label>
					<label class="block">
						<span class="text-sm font-medium text-ink">Location</span>
						<input bind:value={location} placeholder="e.g. Ntinda, Kira, Bugolobi" class="mt-2 block h-12 w-full rounded-xl border-0 bg-cream px-4 ring-1 ring-champagne-300 transition-shadow outline-none placeholder:text-ink/35 focus:ring-2 focus:ring-plum-500" />
					</label>
				</div>
				<label class="mt-5 block">
					<span class="text-sm font-medium text-ink">Details</span>
					<textarea bind:value={details} rows="3" placeholder="Date, size of space, number of guests…" class="mt-2 block w-full rounded-xl border-0 bg-cream px-4 py-3 ring-1 ring-champagne-300 transition-shadow outline-none placeholder:text-ink/35 focus:ring-2 focus:ring-plum-500"></textarea>
				</label>

				<!-- the actual payload WhatsApp reads -->
				<input type="hidden" name="text" value={message} />

				<button
					type="submit"
					use:magnetic
					data-track="whatsapp-contact-form"
					class="group mt-8 inline-flex h-13 w-full items-center justify-center gap-2.5 rounded-full bg-[#1fa855] px-7 font-medium text-white shadow-[0_14px_30px_-12px_rgb(20_120_60/0.6)] transition-colors hover:bg-[#1a9049] active:scale-[0.98] sm:w-auto"
				>
					<Icon name="whatsapp" class="size-5" />
					Continue in WhatsApp
					<Icon name="arrow" class="size-4 transition-transform group-hover:translate-x-1" />
				</button>
			</form>
		</div>
	</div>
</section>

<section class="container-site pb-24 lg:pb-32" aria-labelledby="offices-title">
	<SectionIntro id="offices-title" eyebrow="Our offices">
		{#snippet title()}Come and <em>visit</em>{/snippet}
	</SectionIntro>
	<div class="mt-12"><Locations /></div>
</section>
