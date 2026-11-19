import { site } from '#lib/content/site.ts';
import { cleaningGroups } from '#lib/content/services.ts';

export const prerender = true;

const routes: { path: string; priority: number; changefreq: string }[] = [
	{ path: '/', priority: 1.0, changefreq: 'weekly' },
	{ path: '/cleaning', priority: 0.9, changefreq: 'monthly' },
	...cleaningGroups.map((g) => ({ path: `/cleaning/${g.slug}`, priority: 0.8, changefreq: 'monthly' })),
	{ path: '/laundry-dry-cleaning', priority: 0.9, changefreq: 'monthly' },
	{ path: '/catering-bakery', priority: 0.9, changefreq: 'monthly' },
	{ path: '/about', priority: 0.6, changefreq: 'yearly' },
	{ path: '/contact', priority: 0.7, changefreq: 'yearly' },
	{ path: '/legal/privacy', priority: 0.2, changefreq: 'yearly' },
	{ path: '/legal/terms', priority: 0.2, changefreq: 'yearly' }
];

export function GET() {
	const lastmod = new Date().toISOString().slice(0, 10);
	const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
	.map(
		(r) => `	<url>
		<loc>${site.url}${r.path === '/' ? '' : r.path}</loc>
		<lastmod>${lastmod}</lastmod>
		<changefreq>${r.changefreq}</changefreq>
		<priority>${r.priority.toFixed(1)}</priority>
	</url>`
	)
	.join('\n')}
</urlset>`;
	return new Response(body, { headers: { 'Content-Type': 'application/xml' } });
}
