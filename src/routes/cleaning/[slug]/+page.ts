import { error } from '@sveltejs/kit';
import { cleaningGroups } from '#lib/content/services.ts';
import type { EntryGenerator, PageLoad } from './$types';

export const entries: EntryGenerator = () => cleaningGroups.map((g) => ({ slug: g.slug }));

export const load: PageLoad = ({ params }) => {
	const group = cleaningGroups.find((g) => g.slug === params.slug);
	if (!group) error(404, 'Service not found');
	return { group, others: cleaningGroups.filter((g) => g.slug !== params.slug) };
};
