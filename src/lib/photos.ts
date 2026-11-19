/**
 * Photo registry.
 *
 * Drop images into src/lib/assets/photos/ named after a slot (e.g. `hero-main.jpg`).
 * They are picked up automatically, converted to AVIF/WebP and resized at build time
 * by @sveltejs/enhanced-img. Slots without a file render a branded placeholder.
 * See PHOTOS.md for the full shot list.
 */
import type { Picture } from '@sveltejs/enhanced-img';

export type PhotoTone = 'plum' | 'lilac' | 'champagne' | 'crimson';

const files = import.meta.glob<Picture>('./assets/photos/*.{jpg,jpeg,png,webp,avif}', {
	eager: true,
	import: 'default',
	query: { enhanced: true }
});

const registry = new Map<string, Picture>();
for (const [path, picture] of Object.entries(files)) {
	const name = path.split('/').pop()!.replace(/\.[^.]+$/, '');
	registry.set(name, picture);
}

export function getPhoto(slot: string): Picture | undefined {
	return registry.get(slot);
}
