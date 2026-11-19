import { site } from '#lib/content/site.ts';
import type { Faq, ServiceItem } from '#lib/content/services.ts';

type Json = Record<string, unknown>;

export const ORG_ID = `${site.url}/#organization`;

const openingHours = {
	'@type': 'OpeningHoursSpecification',
	dayOfWeek: site.hours.days,
	opens: site.hours.opens,
	closes: site.hours.closes
};

const areaServed = site.areasServed.map((name) => ({ '@type': 'Place', name }));

export function organization(): Json {
	return {
		'@context': 'https://schema.org',
		'@type': 'Organization',
		'@id': ORG_ID,
		name: site.name,
		legalName: site.legalName,
		slogan: site.tagline,
		url: site.url,
		logo: `${site.url}/icons/logo-512.png`,
		image: `${site.url}/og.png`,
		email: site.email,
		telephone: site.phones[0].e164,
		description: site.description,
		contactPoint: site.phones.map((p) => ({
			'@type': 'ContactPoint',
			telephone: p.e164,
			contactType: 'customer service',
			areaServed: 'UG',
			availableLanguage: ['English', 'Luganda']
		})),
		...(site.social.length ? { sameAs: site.social.map((s) => s.href) } : {})
	};
}

/** One LocalBusiness per physical office, both linked to the organisation. */
export function localBusinesses(): Json[] {
	return site.locations.map((loc) => ({
		'@context': 'https://schema.org',
		'@type': loc.id === 'bweyogerere' ? ['LocalBusiness', 'DryCleaningOrLaundry'] : 'LocalBusiness',
		'@id': `${site.url}/#${loc.id}`,
		name: `${site.name}, ${loc.name}`,
		parentOrganization: { '@id': ORG_ID },
		url: site.url,
		image: `${site.url}/og.png`,
		telephone: site.phones[0].e164,
		email: site.email,
		priceRange: 'UGX',
		address: {
			'@type': 'PostalAddress',
			streetAddress: loc.landmark ? `${loc.street} (${loc.landmark})` : loc.street,
			addressLocality: loc.locality.split(',')[0],
			addressRegion: loc.region,
			addressCountry: 'UG'
		},
		hasMap: loc.mapsUrl,
		openingHoursSpecification: [openingHours],
		areaServed
	}));
}

export function service(opts: {
	name: string;
	description: string;
	path: string;
	serviceType: string;
	items: ServiceItem[];
}): Json {
	return {
		'@context': 'https://schema.org',
		'@type': 'Service',
		name: opts.name,
		serviceType: opts.serviceType,
		description: opts.description,
		url: `${site.url}${opts.path}`,
		provider: { '@id': ORG_ID },
		areaServed,
		hasOfferCatalog: {
			'@type': 'OfferCatalog',
			name: opts.name,
			itemListElement: opts.items.map((item) => ({
				'@type': 'Offer',
				itemOffered: { '@type': 'Service', name: item.name, description: item.description }
			}))
		}
	};
}

export function breadcrumbs(trail: { name: string; path: string }[]): Json {
	return {
		'@context': 'https://schema.org',
		'@type': 'BreadcrumbList',
		itemListElement: [{ name: 'Home', path: '/' }, ...trail].map((c, i) => ({
			'@type': 'ListItem',
			position: i + 1,
			name: c.name,
			item: `${site.url}${c.path === '/' ? '' : c.path}`
		}))
	};
}

export function faqPage(faqs: Faq[]): Json {
	return {
		'@context': 'https://schema.org',
		'@type': 'FAQPage',
		mainEntity: faqs.map((f) => ({
			'@type': 'Question',
			name: f.q,
			acceptedAnswer: { '@type': 'Answer', text: f.a }
		}))
	};
}

export function website(): Json {
	return {
		'@context': 'https://schema.org',
		'@type': 'WebSite',
		'@id': `${site.url}/#website`,
		name: site.name,
		url: site.url,
		publisher: { '@id': ORG_ID },
		inLanguage: 'en-UG'
	};
}
