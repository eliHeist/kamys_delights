import { useGsap } from './useGsap.svelte.ts';

const FROM = {
	rise: { autoAlpha: 0, y: 32 },
	fade: { autoAlpha: 0 },
	scale: { autoAlpha: 0, y: 24, scale: 0.965 }
} as const;

/**
 * Page-level motion, built on `useGsap`. The root layout mounts it once per URL via
 * `<PageMotion />`, so pages only need the data attributes below.
 *
* - `[data-reveal]` (optionally `data-reveal-delay`) fades/rises in once as it scrolls into view
 * - `[data-split]` headings are split into masked lines that slide up
 * - `[data-speed]` / `[data-lag]` get ScrollSmoother parallax for this page's content
 *
 * Runs after the layout's ScrollSmoother exists, and everything is reverted when the page unmounts.
 */
export function useReveals(scope: () => Element | null | undefined = () => document.querySelector('main')) {
	useGsap(
		({ gsap, ScrollSmoother, SplitText, reducedMotion }) => {
			const root = scope();
			if (!root) return;

			const items = Array.from(root.querySelectorAll<HTMLElement>('[data-reveal]'));
			const splits = Array.from(root.querySelectorAll<HTMLElement>('[data-split]'));

			if (reducedMotion) {
				gsap.set([...items, ...splits], { autoAlpha: 1, clearProps: 'transform' });
				return;
			}

			// Parallax for decorative elements on this page
			const smoother = ScrollSmoother.get();
			const effectTargets = root.querySelectorAll('[data-speed], [data-lag]');
			if (smoother && effectTargets.length) smoother.effects(effectTargets);

			for (const el of items) {
				const variant = (el.dataset.reveal as keyof typeof FROM) ?? 'rise';
				gsap.fromTo(el, FROM[variant] ?? FROM.rise, {
					autoAlpha: 1,
					y: 0,
					scale: 1,
					duration: 1.1,
					ease: 'expo.out',
					delay: Number(el.dataset.revealDelay ?? 0) / 1000,
					clearProps: 'transform',
					scrollTrigger: { trigger: el, start: 'top 92%', once: true }
				});
			}

			for (const el of splits) {
				gsap.set(el, { autoAlpha: 1 });
				SplitText.create(el, {
					type: 'lines',
					mask: 'lines',
					linesClass: 'split-line',
					autoSplit: true, // re-split after fonts load / on resize
					onSplit(self) {
						return gsap.from(self.lines, {
							yPercent: 110,
							duration: 1.2,
							ease: 'expo.out',
							stagger: 0.09,
							delay: Number(el.dataset.splitDelay ?? 0) / 1000,
							scrollTrigger: { trigger: el, start: 'top 90%', once: true }
						});
					}
				});
			}
		},
		scope,
		{ afterSmoother: true }
	);
}
