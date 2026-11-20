<script lang="ts">
	import { site, telLink, whatsappLink } from '#lib/content/site.ts';
	import { cleaningGroups } from '#lib/content/services.ts';
	import Logo from './Logo.svelte';
	import Star from './Star.svelte';
	import Icon from './Icon.svelte';
	import { CLARITY_ID, openCookieSettings } from '#lib/consent.svelte.ts';

	const year = new Date().getFullYear();
</script>

<footer class="on-dark relative isolate overflow-hidden bg-plum-950 text-white/75">
	<Star class="animate-spin-slow absolute -top-40 -right-40 -z-10 w-[36rem] text-white/[0.03]" />

	<div class="container-site grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-12 lg:py-20">
		<div class="lg:col-span-4">
			<Logo variant="stacked" tone="white" class="h-20 w-auto" />
			<p class="mt-6 max-w-xs text-sm leading-relaxed">
				Cleaning, laundry, catering and cakes in Kampala, with excellence at the centre of everything
				we do.
			</p>
			<div class="mt-6 flex flex-wrap gap-3">
				<a
					href={whatsappLink()}
					target="_blank"
					rel="noopener"
					data-track="whatsapp-footer"
					class="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-white transition-colors hover:bg-white/20"
				>
					<Icon name="whatsapp" class="size-4" /> WhatsApp
				</a>
				<a
					href={telLink()}
					data-track="call-footer"
					class="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-white transition-colors hover:bg-white/20"
				>
					<Icon name="phone" class="size-4" /> Call
				</a>
			</div>
		</div>

		<nav aria-label="Services" class="lg:col-span-3">
			<h2 class="eyebrow !font-sans !text-champagne-300">Cleaning</h2>
			<ul class="mt-4 space-y-2.5 text-sm">
				<li><a class="footer-link" href="/cleaning">All cleaning services</a></li>
				{#each cleaningGroups as g (g.slug)}
					<li><a class="footer-link" href="/cleaning/{g.slug}">{g.title}</a></li>
				{/each}
			</ul>
		</nav>

		<nav aria-label="More" class="lg:col-span-2">
			<h2 class="eyebrow !font-sans !text-champagne-300">Company</h2>
			<ul class="mt-4 space-y-2.5 text-sm">
				<li><a class="footer-link" href="/laundry-dry-cleaning">Laundry & dry cleaning</a></li>
				<li><a class="footer-link" href="/catering-bakery">Catering & bakery</a></li>
				<li><a class="footer-link" href="/about">About us</a></li>
				<li><a class="footer-link" href="/contact">Contact</a></li>
			</ul>
		</nav>

		<div class="space-y-5 text-sm lg:col-span-3">
			<h2 class="eyebrow !font-sans !text-champagne-300">Visit us</h2>
			{#each site.locations as loc (loc.id)}
				<address class="not-italic">
					<span class="block font-medium text-white">{loc.name}</span>
					{loc.street}{#if loc.landmark}, {loc.landmark}{/if}<br />{loc.locality}
				</address>
			{/each}
			<p class="flex items-start gap-2">
				<Icon name="clock" class="mt-0.5 size-4 shrink-0 text-champagne-300" />
				{site.hours.display}
			</p>
			<p>
				<a class="footer-link break-all" href="mailto:{site.email}">{site.email}</a><br />
				{#each site.phones as p, i (p.e164)}
					<a class="footer-link" href={telLink(i)}>{p.display}</a>{#if i < site.phones.length - 1}
						&nbsp;·&nbsp;{/if}
				{/each}
			</p>
		</div>
	</div>

	<div class="border-t border-white/10">
		<div
			class="container-site flex flex-col gap-3 py-6 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between"
		>
			<p>© {year} {site.legalName}. {site.tagline}.</p>
			<p class="flex gap-5">
				<a class="footer-link" href="/legal/privacy">Privacy</a>
				<a class="footer-link" href="/legal/terms">Terms</a>
				{#if CLARITY_ID}
					<button type="button" class="footer-link cursor-pointer" onclick={openCookieSettings}
						>Cookie settings</button
					>
				{/if}
			</p>
		</div>
	</div>
</footer>

<style>
	.footer-link {
		background: linear-gradient(currentColor, currentColor) 0 100% / 0 1px no-repeat;
		transition:
			background-size 0.4s var(--ease-out-soft),
			color 0.3s;
	}
	.footer-link:hover {
		color: white;
		background-size: 100% 1px;
	}
</style>
