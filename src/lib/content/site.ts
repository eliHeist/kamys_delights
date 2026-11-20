/**
 * Single source of truth for business details (NAP: name, address, phone).
 * Keep this identical to the Google Business Profile — consistency matters for local SEO.
 */

export interface Location {
	id: string;
	name: string;
	handles: string;
	street: string;
	locality: string;
	region: string;
	landmark?: string;
	mapsUrl: string;
}

export const site = {
	name: "Kamy's Delights",
	legalName: "Kamy's Delights Ltd",
	tagline: 'Excellence at the centre',
	url: 'https://www.kamysdelights.com',
	locale: 'en_UG',
	description:
		"Kamy's Delights is a Kampala hospitality company offering professional cleaning & facility management, laundry & dry cleaning with free pick-up, and catering & custom cakes for weddings, parties and corporate events.",
	email: 'info@kamysdelights.com',
	phones: [
		{ label: 'Mobile & WhatsApp', display: '+256 763 521 041', e164: '+256763521041' },
		{ label: 'Office', display: '+256 393 000 621', e164: '+256393000621' }
	],
	/** Number that receives WhatsApp enquiries (digits only, no +) */
	whatsapp: '256763521041',
	hours: {
		display: 'Monday – Saturday, 9:00 am – 5:00 pm',
		days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
		opens: '09:00',
		closes: '17:00'
	},
	areasServed: [
		'Kampala',
		'Wakiso',
		'Mukono',
		'Ntinda',
		'Bweyogerere',
		'Kira',
		'Nakawa',
		'Naalya',
		'Najjera',
		'Kololo',
		'Bugolobi',
		'Muyenga',
		'Kisaasi',
		'Entebbe'
	],
	locations: [
		{
			id: 'ntinda',
			name: 'Cleaning & Facility Management office',
			handles: 'Cleaning, facility management & fumigation',
			street: 'Kigunga Stage, Kampala–Jinja Highway',
			locality: 'Ntinda, Kampala',
			region: 'Kampala',
			mapsUrl:
				'https://www.google.com/maps/search/?api=1&query=' +
				encodeURIComponent('Kigunga Stage, Kampala-Jinja Highway, Ntinda, Kampala')
		},
		{
			id: 'bweyogerere',
			name: 'Laundry, Catering & Bakery office',
			handles: 'Laundry & dry cleaning, catering and cake orders',
			street: 'North Park Plaza, Bweyogerere Industrial Park',
			locality: 'Bweyogerere, Wakiso',
			region: 'Wakiso',
			landmark: 'Opposite UNBS Headquarters',
			mapsUrl:
				'https://www.google.com/maps/search/?api=1&query=' +
				encodeURIComponent('North Park Plaza, Bweyogerere Industrial Park, opposite UNBS Headquarters')
		}
	] satisfies Location[],
	social: [] as { label: string; href: string }[]
} as const;

export function whatsappLink(message?: string) {
	const base = `https://wa.me/${site.whatsapp}`;
	return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export function telLink(i = 0) {
	return `tel:${site.phones[i].e164}`;
}

export const nav = [
	{ href: '/cleaning', label: 'Cleaning' },
	{ href: '/laundry-dry-cleaning', label: 'Laundry' },
	{ href: '/catering-bakery', label: 'Catering & Bakery' },
	{ href: '/about', label: 'About' },
	{ href: '/contact', label: 'Contact' }
];
