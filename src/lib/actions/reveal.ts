import type { Action } from 'svelte/action';

type RevealOptions = { delay?: number; variant?: 'rise' | 'fade' | 'scale' } | number | undefined;

let observer: IntersectionObserver | undefined;

function getObserver() {
	if (observer) return observer;
	observer = new IntersectionObserver(
		(entries) => {
			for (const entry of entries) {
				if (entry.isIntersecting) {
					entry.target.classList.add('is-visible');
					observer!.unobserve(entry.target);
				}
			}
		},
		{ rootMargin: '0px 0px -8% 0px', threshold: 0.12 }
	);
	return observer;
}

/**
 * Fade/rise an element in the first time it scrolls into view.
 * `use:reveal` · `use:reveal={120}` (delay ms) · `use:reveal={{ delay: 80, variant: 'scale' }}`
 * Content stays visible when JS is off and when the user prefers reduced motion (see app.css).
 */
export const reveal: Action<HTMLElement, RevealOptions> = (node, options) => {
	const opts = typeof options === 'number' ? { delay: options } : (options ?? {});
	node.dataset.reveal = opts.variant ?? 'rise';
	if (opts.delay) node.style.setProperty('--reveal-delay', `${opts.delay}ms`);

	const io = getObserver();
	io.observe(node);
	return {
		destroy() {
			io.unobserve(node);
		}
	};
};
