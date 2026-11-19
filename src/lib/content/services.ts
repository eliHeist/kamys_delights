import type { PhotoTone } from '#lib/photos.ts';

export interface ServiceItem {
	name: string;
	description: string;
}

export interface Faq {
	q: string;
	a: string;
}

export interface Division {
	id: 'cleaning' | 'laundry' | 'catering';
	href: string;
	title: string;
	kicker: string;
	summary: string;
	highlights: string[];
	photo: string;
	tone: PhotoTone;
	whatsappMessage: string;
}

export interface CleaningGroup {
	slug: string;
	title: string;
	short: string;
	seo: { title: string; description: string };
	intro: string;
	idealFor: string[];
	items: ServiceItem[];
	faqs: Faq[];
	photo: string;
	tone: PhotoTone;
}

/* ─────────────────────────── Divisions ─────────────────────────── */

export const divisions: Division[] = [
	{
		id: 'cleaning',
		href: '/cleaning',
		title: 'Cleaning & Facility Management',
		kicker: 'Homes · Offices · Factories',
		summary:
			'Residential, commercial and industrial cleaning by a trained, supervised team, from one-off deep cleans to daily facility care.',
		highlights: [
			'Deep house & move-in/out cleaning',
			'Office, building & window cleaning',
			'Factory, warehouse & pressure washing',
			'Fumigation, pest control & water tanks'
		],
		photo: 'division-cleaning',
		tone: 'lilac',
		whatsappMessage: "Hello Kamy's Delights, I'd like a quote for cleaning services."
	},
	{
		id: 'laundry',
		href: '/laundry-dry-cleaning',
		title: 'Laundry & Dry Cleaning',
		kicker: 'Free pick-up & drop-off',
		summary:
			'Careful washing, pressing and dry cleaning for everything from everyday clothes to bridal gowns, carpets and chairs, collected from your door.',
		highlights: [
			'Suits, gowns & bridal wear',
			'Bedcovers, blankets & curtains',
			'Carpets & chairs',
			'Everyday wash & fold'
		],
		photo: 'division-laundry',
		tone: 'champagne',
		whatsappMessage: "Hello Kamy's Delights, I'd like to book a laundry pick-up."
	},
	{
		id: 'catering',
		href: '/catering-bakery',
		title: 'Catering & Bakery',
		kicker: 'Weddings · Parties · Corporate',
		summary:
			'Event catering planned around your guests, plus made-to-order cakes, pastries and treats where every bite is a delight.',
		highlights: [
			'Wedding & party catering',
			'Corporate events & meetings',
			'Custom celebration & wedding cakes',
			'Pastries, cookies & dessert tables'
		],
		photo: 'division-catering',
		tone: 'plum',
		whatsappMessage: "Hello Kamy's Delights, I'd like to talk about catering for an event."
	}
];

/* ─────────────────────────── Cleaning ─────────────────────────── */

export const cleaningGroups: CleaningGroup[] = [
	{
		slug: 'residential',
		title: 'Residential Cleaning',
		short: 'Homes, apartments and compounds, cleaned top to bottom.',
		seo: {
			title: 'House Cleaning Services in Kampala | Deep & Move-out Cleaning',
			description:
				"Professional house cleaning in Kampala: deep cleaning, move-in/move-out cleaning, sofa, mattress & carpet cleaning, and compound clearing by Kamy's Delights."
		},
		intro:
			'Come home to a space that feels brand new. Our residential team handles everything from a regular tidy to a full deep clean before you move in or after you move out, with careful attention to kitchens, bathrooms and the corners that usually get missed.',
		idealFor: ['Homes', 'Apartments', 'Rentals & Airbnbs', 'Landlords & agents'],
		items: [
			{
				name: 'General & deep house cleaning',
				description: 'Dusting, scrubbing, mopping and sanitising every room, with optional recurring visits.'
			},
			{
				name: 'Move-in / move-out cleaning',
				description: 'A thorough handover clean for tenants, landlords and new homeowners.'
			},
			{
				name: 'Sofa, mattress & carpet cleaning',
				description: 'Deep extraction cleaning that lifts stains, dust mites and odours.'
			},
			{
				name: 'Laundry & dry cleaning',
				description: 'Add a laundry pick-up to your clean and we return everything fresh and pressed.'
			},
			{
				name: 'Gardening & compound clearing',
				description: 'Lawn trimming, hedge care, sweeping and clearing for a tidy compound.'
			}
		],
		faqs: [
			{
				q: 'Do you bring your own cleaning products and equipment?',
				a: 'Yes. Our team arrives with professional equipment and cleaning products. If you prefer specific products in your home, just let us know.'
			},
			{
				q: 'How long does a deep house clean take?',
				a: 'It depends on the size and condition of the home. Most deep cleans take one working day. We confirm the time when we give your quote.'
			},
			{
				q: 'Can I book regular cleaning?',
				a: 'Yes. We offer weekly, fortnightly and monthly visits so your home stays consistently clean.'
			}
		],
		photo: 'cleaning-residential',
		tone: 'lilac'
	},
	{
		slug: 'commercial',
		title: 'Commercial & Building Cleaning',
		short: 'Offices, buildings and facilities kept spotless.',
		seo: {
			title: 'Office & Commercial Cleaning Services in Kampala',
			description:
				"Office and facility cleaning, high-rise window and glass cleaning, façade and roof-tile cleaning, and post-construction cleaning in Kampala by Kamy's Delights."
		},
		intro:
			'A clean workplace makes a strong first impression and keeps your team healthy. We provide scheduled office and facility cleaning, plus specialist work at height for windows, glass and building façades.',
		idealFor: ['Offices', 'Hotels', 'Apartments & estates', 'Institutions & schools'],
		items: [
			{
				name: 'Office & facility cleaning',
				description: 'Daily, weekly or after-hours cleaning planned around your working hours.'
			},
			{
				name: 'High-rise window & glass cleaning',
				description: 'Streak-free glass and curtain walls, cleaned safely at height.'
			},
			{
				name: 'Building, façade & roof-tile cleaning',
				description: 'Restores exteriors by removing algae, dust and weather staining.'
			},
			{
				name: 'Gutter & balcony cleaning',
				description: 'Clears blockages and debris to prevent leaks and damage.'
			},
			{
				name: 'Post-construction cleaning',
				description: 'Removes dust, paint and debris so new spaces are ready to use.'
			},
			{
				name: 'Parking & compound cleaning',
				description: 'Sweeping, washing and litter control for shared outdoor areas.'
			}
		],
		faqs: [
			{
				q: 'Can you clean outside office hours?',
				a: 'Yes. We schedule cleaning early in the morning, in the evening or on weekends so your team is not disrupted.'
			},
			{
				q: 'Do you offer monthly facility contracts?',
				a: 'Yes. We set up ongoing facility management contracts with a fixed scope, a schedule and a named supervisor.'
			},
			{
				q: 'Is your team supervised?',
				a: 'Every site has a supervisor who checks the work against an agreed checklist.'
			}
		],
		photo: 'cleaning-commercial',
		tone: 'champagne'
	},
	{
		slug: 'industrial',
		title: 'Industrial Cleaning',
		short: 'Factories, warehouses and heavy equipment.',
		seo: {
			title: 'Industrial Cleaning Services in Uganda | Factories & Warehouses',
			description:
				"Factory and warehouse cleaning, industrial floor and equipment cleaning, pressure washing and degreasing around Kampala and Bweyogerere by Kamy's Delights."
		},
		intro:
			'Industrial spaces need cleaning that is thorough, safe and planned around production. Our team handles heavy-duty floor care, degreasing and periodic deep cleans for factories and warehouses.',
		idealFor: ['Factories', 'Warehouses', 'Workshops', 'Industrial parks'],
		items: [
			{
				name: 'Factory & warehouse cleaning',
				description: 'Scheduled cleaning of production floors, storage areas and loading bays.'
			},
			{
				name: 'Industrial floor & equipment cleaning',
				description: 'Removes oil, grime and build-up from floors and machinery surfaces.'
			},
			{
				name: 'Pressure washing & degreasing',
				description: 'High-pressure cleaning for walls, yards, tanks and heavy-duty surfaces.'
			},
			{
				name: 'Deep & periodic cleaning',
				description: 'Planned shutdown cleans and periodic deep cleaning to keep standards high.'
			}
		],
		faqs: [
			{
				q: 'Can you work during production shutdowns?',
				a: 'Yes. We plan industrial deep cleans around your shutdown windows and safety procedures.'
			},
			{
				q: 'Do you follow site safety rules?',
				a: 'Our team wears the right protective equipment and follows your site induction and safety requirements.'
			}
		],
		photo: 'cleaning-industrial',
		tone: 'plum'
	},
	{
		slug: 'specialised',
		title: 'Specialised Services',
		short: 'Fumigation, water tanks, solar panels and more.',
		seo: {
			title: 'Fumigation, Pest Control & Water Tank Cleaning in Kampala',
			description:
				"Fumigation and pest control, water tank cleaning and disinfection, solar panel cleaning, washroom hygiene and mobile car wash by Kamy's Delights in Kampala."
		},
		intro:
			'Some jobs need specialist skills and equipment. From fumigation and water tank disinfection to solar panel cleaning and a mobile car wash at your door, we take care of the jobs that are easy to put off.',
		idealFor: ['Homes', 'Businesses', 'Schools', 'Restaurants & hotels'],
		items: [
			{
				name: 'Fumigation & pest control',
				description: 'Targeted treatment for cockroaches, bedbugs, termites, rodents and mosquitoes.'
			},
			{
				name: 'Water tank cleaning & disinfection',
				description: 'Drains, scrubs and disinfects tanks so your water stays safe.'
			},
			{
				name: 'Solar panel cleaning',
				description: 'Removes dust and grime so your panels produce more power.'
			},
			{
				name: 'Washroom hygiene services',
				description: 'Routine sanitising, consumables and sanitary bin services.'
			},
			{
				name: 'Mobile car wash & detailing',
				description: 'Interior and exterior car cleaning at your home or office.'
			},
			{
				name: 'Waste management',
				description: 'Organised collection and disposal to keep your premises clean.'
			}
		],
		faqs: [
			{
				q: 'Is fumigation safe for children and pets?',
				a: 'We use approved products and tell you how long to keep children and pets away from treated areas before we start.'
			},
			{
				q: 'How often should a water tank be cleaned?',
				a: 'We recommend cleaning and disinfecting a domestic water tank at least every six months, or more often if you notice sediment or odour.'
			}
		],
		photo: 'cleaning-specialised',
		tone: 'crimson'
	}
];

/* ─────────────────────────── Laundry ─────────────────────────── */

export const laundryItems: ServiceItem[] = [
	{ name: 'Suits & formal wear', description: 'Dry cleaned and pressed to a sharp finish.' },
	{ name: 'Gowns & bridal wear', description: 'Gentle hand care for delicate fabrics, beading and lace.' },
	{ name: 'Bedcovers & blankets', description: 'Duvets, blankets and bedding washed fresh and soft.' },
	{ name: 'Everyday clothes', description: 'Wash, dry, iron and fold for the whole family.' },
	{ name: 'Carpets & rugs', description: 'Deep cleaned to lift dirt, stains and odours.' },
	{ name: 'Chairs & upholstery', description: 'Fabric seats and sofas cleaned on site or collected.' },
	{ name: 'Curtains & linens', description: 'Curtains, tablecloths and household linens.' }
];

export const laundryFaqs: Faq[] = [
	{
		q: 'Is pick-up and drop-off really free?',
		a: 'Yes. We collect your laundry from your home or office and deliver it back clean at no extra charge within our service areas.'
	},
	{
		q: 'How long does laundry take?',
		a: 'It depends on the items and the treatment they need. We confirm the return date when we collect your laundry.'
	},
	{
		q: 'Can you clean wedding gowns?',
		a: 'Yes. Bridal wear is cleaned with gentle methods suited to delicate fabrics, lace and beadwork.'
	},
	{
		q: 'Where is your laundry located?',
		a: 'Our laundry is at North Park Plaza, Bweyogerere Industrial Park, opposite UNBS Headquarters. You are welcome to drop off in person.'
	}
];

/* ─────────────────────────── Catering & Bakery ─────────────────────────── */

export const cateringEvents: ServiceItem[] = [
	{
		name: 'Weddings & introductions',
		description:
			'Buffets and served meals for traditional ceremonies and receptions, with service staff to match.'
	},
	{
		name: 'Parties & celebrations',
		description: 'Birthdays, graduations, anniversaries and family gatherings, from intimate to large.'
	},
	{
		name: 'Corporate events',
		description: 'Meetings, workshops, launches and staff events, with breakfasts, lunches and refreshments.'
	}
];

export const bakeryRange: ServiceItem[] = [
	{
		name: 'Wedding cakes',
		description: 'Tiered designs made to match your colours and theme, including traditional fruit cake.'
	},
	{
		name: 'Celebration cakes',
		description: 'Birthdays, anniversaries, baby showers and graduations, designed around your idea.'
	},
	{
		name: 'Corporate & branded cakes',
		description: 'Logo cakes and cupcakes for launches, milestones and office celebrations.'
	},
	{
		name: 'Cupcakes & dessert tables',
		description: 'Cupcakes, brownies, cookies and muffins styled for events.'
	},
	{
		name: 'Bread, pastries & danishes',
		description: 'Freshly baked for breakfasts, meetings and events.'
	},
	{
		name: 'Seasonal specials',
		description: 'Limited-time treats for Christmas, Easter, Valentine’s and other holidays.'
	}
];

export const cakeFlavours = [
	'Vanilla',
	'Chocolate',
	'Red velvet',
	'Marble',
	'Lemon',
	'Carrot',
	'Black forest',
	'Fruit cake'
];

export const cakeSizes = [
	{ size: '1 kg', serves: 'about 10 guests' },
	{ size: '2 kg', serves: 'about 20 guests' },
	{ size: '3 kg', serves: 'about 30 guests' },
	{ size: 'Tiered', serves: 'weddings & large events' }
];

export const cateringFaqs: Faq[] = [
	{
		q: 'Do you have a fixed catering menu?',
		a: 'No. Every event menu is planned around your guests, budget and occasion. Tell us about your event and we will propose a menu.'
	},
	{
		q: 'How far ahead should I order a cake?',
		a: 'We recommend at least 3 days’ notice for celebration cakes and 2–3 weeks for wedding cakes. Message us early for busy dates.'
	},
	{
		q: 'Can I walk in and buy cakes?',
		a: 'Our bakery is order-only, so every cake is baked fresh for you. Place your order on WhatsApp or by phone.'
	},
	{
		q: 'Do you deliver cakes?',
		a: 'Yes. We deliver around Kampala and Wakiso, or you can collect from North Park Plaza, Bweyogerere.'
	}
];

/* ─────────────────────────── General ─────────────────────────── */

export const generalFaqs: Faq[] = [
	{
		q: 'Which areas do you serve?',
		a: 'We serve all of Kampala and the surrounding areas, including Wakiso and Mukono. Larger jobs further away can be arranged on request.'
	},
	{
		q: 'What are your working hours?',
		a: 'We are open Monday to Saturday, 9:00 am to 5:00 pm. Out-of-hours cleaning and weekend events can be scheduled in advance.'
	},
	{
		q: 'How do I get a quote?',
		a: 'Send us a WhatsApp message or call us with a few details about what you need. We will reply with a quote, and we can arrange a site visit for larger jobs.'
	},
	{
		q: 'Can I book more than one service?',
		a: 'Yes. Many clients combine cleaning, laundry and catering, for example a deep clean before an event and catering on the day.'
	}
];

export const values = [
	{
		title: 'Excellence at the centre',
		body: 'Every job is checked against a clear standard before we call it done.'
	},
	{
		title: 'Trained, trusted people',
		body: 'Our team is trained, supervised and respectful of your home or workplace.'
	},
	{
		title: 'One partner, many needs',
		body: 'Cleaning, laundry and food from one team you already trust.'
	},
	{
		title: 'Responsive & reliable',
		body: 'Quick replies on WhatsApp, clear quotes and on-time arrival.'
	}
];
