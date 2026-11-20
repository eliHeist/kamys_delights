<script lang="ts">
	import '../app.css';
	import { afterNavigate, onNavigate } from '$app/navigation';
	import { page } from '$app/state';
	import PageMotion from '#lib/gsap/PageMotion.svelte';
	import Header from '#lib/components/Header.svelte';
	import Footer from '#lib/components/Footer.svelte';
	import WhatsAppFab from '#lib/components/WhatsAppFab.svelte';
	import CookieBanner from '#lib/components/CookieBanner.svelte';
	import { initConsent } from '#lib/consent.svelte.ts';
	import { onMount } from 'svelte';
	import {
		loadGsap,
		markSmootherReady,
		prefersReducedMotion,
		resetSmootherReady,
		useGsap,
		type GsapModules
	} from '#lib/gsap/useGsap.svelte.ts';
	import type { LayoutProps } from './$types';
	// Preload the display face so the hero headline paints in Fraunces straight away
	import fraunces from '@fontsource-variable/fraunces/files/fraunces-latin-soft-normal.woff2?url';
	import inter from '@fontsource-variable/inter/files/inter-latin-wght-normal.woff2?url';

	let { children }: LayoutProps = $props();

	onMount(initConsent);

	let main = $state<HTMLElement>();
	let smoother: InstanceType<GsapModules['ScrollSmoother']> | undefined;

	/** Space left above anchor targets for the fixed header */
	const ANCHOR_OFFSET = 'top 96px';

	/** Scroll to a #hash target through ScrollSmoother (native anchor jumps would scroll the wrapper). */
	function scrollToHash(hash: string, smooth: boolean) {
		if (!smoother || !hash) return false;
		const el = document.getElementById(decodeURIComponent(hash.slice(1)));
		if (!el) return false;
		document.getElementById('smooth-wrapper')!.scrollTop = 0;
		smoother.scrollTo(el, smooth, ANCHOR_OFFSET);
		return true;
	}

	// Same-page anchor links (e.g. "Order a cake" → #bakery) glide via the smoother
	function onDocumentClick(e: MouseEvent) {
		if (!smoother || e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey) return;
		const a = (e.target as Element | null)?.closest?.('a[href*="#"]') as HTMLAnchorElement | null;
		if (!a || a.target || a.origin !== location.origin || a.pathname !== location.pathname || !a.hash) return;
		if (scrollToHash(a.hash, true)) {
			e.preventDefault();
			history.replaceState(history.state, '', a.hash);
			if (a.hash === '#main') document.getElementById('main')?.focus({ preventScroll: true });
		}
	}

	// ── Smooth scroll ────────────────────────────────────────────────
	// ScrollSmoother on desktop pointers; native scrolling on touch and for reduced motion.
	useGsap(({ ScrollSmoother, reducedMotion }) => {
		document.documentElement.classList.add('gsap');
		if (!reducedMotion) {
			smoother = ScrollSmoother.create({
				wrapper: '#smooth-wrapper',
				content: '#smooth-content',
				smooth: 1.1,
				smoothTouch: false,
				effects: false // pages register their own [data-speed] effects (see useReveals)
			});
		}
		markSmootherReady();
		return () => {
			smoother = undefined;
			resetSmootherReady();
		};
	});

	// ── Page transitions ─────────────────────────────────────────────
	// Fade the outgoing page out, swap, then the incoming page rises in and its reveals run.
	onNavigate(async (navigation) => {
		if (!navigation.to || navigation.from?.url.pathname === navigation.to.url.pathname) return;
		if (prefersReducedMotion() || !main) return;
		const { gsap } = await loadGsap();
		await gsap.to(main, { autoAlpha: 0, y: -12, duration: 0.3, ease: 'power2.in' });
	});

	afterNavigate((navigation) => {
		// SvelteKit has already set the native scroll position (top or restored on back/forward):
		// jump the smoother there instantly instead of gliding through the whole page.
		// Arriving with a #hash goes through the smoother so it lands below the fixed header.
		if (!(navigation.to?.url.hash && scrollToHash(navigation.to.url.hash, false))) {
			smoother?.scrollTop(window.scrollY);
		}
		if (navigation.type === 'enter' || !main) return;
		if (prefersReducedMotion()) {
			main.style.opacity = '';
			main.style.visibility = '';
			return;
		}
		loadGsap().then(({ gsap, ScrollTrigger }) => {
			gsap.fromTo(
				main!,
				{ autoAlpha: 0, y: 16 },
				{ autoAlpha: 1, y: 0, duration: 0.7, ease: 'expo.out', clearProps: 'transform' }
			);
			ScrollTrigger.refresh();
		});
	});
</script>

<svelte:document onclickcapture={onDocumentClick} />

<svelte:head>
	<link rel="preload" href={fraunces} as="font" type="font/woff2" crossorigin="anonymous" />
	<link rel="preload" href={inter} as="font" type="font/woff2" crossorigin="anonymous" />
</svelte:head>

<a
	href="#main"
	class="fixed top-3 left-3 z-[60] -translate-y-20 rounded-full bg-plum-600 px-4 py-2 text-sm text-white transition-transform focus:translate-y-0"
	>Skip to content</a
>

<!-- Fixed elements stay outside the smooth-scroll wrapper -->
<Header />
<WhatsAppFab />
<CookieBanner />

<div id="smooth-wrapper">
	<div id="smooth-content">
		<main id="main" tabindex="-1" class="outline-none" bind:this={main}>
			{@render children()}
			{#key page.url.pathname}<PageMotion />{/key}
		</main>
		<Footer />
	</div>
</div>
