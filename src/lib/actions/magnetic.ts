import type { Action } from 'svelte/action';

/**
 * Subtle "magnetic" pull toward the cursor. Only on fine pointers and when motion is allowed.
 * `use:magnetic` or `use:magnetic={0.25}` for strength.
 */
export const magnetic: Action<HTMLElement, number | undefined> = (node, strength = 0.18) => {
	const fine = matchMedia('(hover: hover) and (pointer: fine)').matches;
	const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
	if (!fine || reduced) return;

	let frame = 0;
	node.style.transition = 'transform 0.45s cubic-bezier(0.22, 1, 0.36, 1)';

	function move(e: PointerEvent) {
		const rect = node.getBoundingClientRect();
		const x = (e.clientX - rect.left - rect.width / 2) * strength;
		const y = (e.clientY - rect.top - rect.height / 2) * strength;
		cancelAnimationFrame(frame);
		frame = requestAnimationFrame(() => {
			node.style.transform = `translate3d(${x}px, ${y}px, 0)`;
		});
	}
	function leave() {
		cancelAnimationFrame(frame);
		node.style.transform = '';
	}

	node.addEventListener('pointermove', move);
	node.addEventListener('pointerleave', leave);
	return {
		destroy() {
			node.removeEventListener('pointermove', move);
			node.removeEventListener('pointerleave', leave);
		}
	};
};
