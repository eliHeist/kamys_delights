<script lang="ts">
	import Seo from '#lib/components/Seo.svelte';
	import LegalPage from '../LegalPage.svelte';
	import { site, telLink } from '#lib/content/site.ts';

</script>

<Seo
	title="Terms & Conditions"
	description="Terms for booking cleaning, fumigation, laundry and dry cleaning, catering and cake orders with Kamy's Delights Ltd, and for using our website."
/>

<LegalPage title="Terms & Conditions" updated="20 November 2026">
	<p>
		These terms apply when you use www.kamysdelights.com and when you book any service with
		{site.legalName} ("Kamy's Delights", "we", "us"). By confirming a booking, you agree to these terms
		and to the details in your quote.
	</p>

	<h2>Quotes and bookings</h2>
	<p>
		Service descriptions on this website are general. The scope, price, date and time of each job are
		agreed with you directly by WhatsApp, phone or in writing, and a booking is confirmed once we have
		both agreed those details.
	</p>

	<h2>Payment</h2>
	<p>
		Payment terms, including any deposit and when the balance is due, are set out in the quote for each
		order.
	</p>

	<h2>Deposits and cancellations</h2>
	<p>
		Any deposit paid is non-refundable once work, preparation or baking for your order has started.
	</p>

	<h2>Cakes and catering</h2>
	<p>
		Our bakery is order-only, and every cake and event menu is prepared to the details you confirm with
		us. Please tell us about any allergies or dietary requirements when you order, and we will tell you
		whether we can accommodate them.
	</p>

	<h2>Laundry and dry cleaning</h2>
	<ul>
		<li>
			Please tell us about delicate items, stains and any existing damage when we collect your laundry
			or when you drop it off.
		</li>
		<li>
			We clean items according to the manufacturer's care label. We are not responsible for damage that
			results from following the care label.
		</li>
		<li>
			Items that are not collected, or not accepted for delivery, within 30 days of our telling you they
			are ready may be disposed of or donated.
		</li>
	</ul>

	<h2>Cleaning and fumigation</h2>
	<ul>
		<li>Please put away valuables and fragile items before our team arrives.</li>
		<li>Any damage must be reported to us within 24 hours of the job being completed.</li>
		<li>
			For fumigation and pest control, you must follow the re-entry times we give you for treated areas,
			for the safety of everyone in the premises, including children and pets.
		</li>
	</ul>

	<h2>Using this website</h2>
	<p>
		We keep the information on this website accurate and up to date, but services and details may
		change. Links to WhatsApp, Google Maps and other services take you to third-party sites with their
		own terms. Our <a href="/legal/privacy">Privacy Policy</a> explains how we handle personal
		information.
	</p>

	<h2>Governing law</h2>
	<p>These terms are governed by the laws of the Republic of Uganda.</p>

	<h2>Contact us</h2>
	<p>
		Questions about these terms can be sent to <a href="mailto:{site.email}">{site.email}</a> or by
		phone on <a href={telLink()}>{site.phones[0].display}</a>.
	</p>
</LegalPage>
