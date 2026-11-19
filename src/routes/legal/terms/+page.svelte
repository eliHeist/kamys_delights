<script lang="ts">
	import Seo from '#lib/components/Seo.svelte';
	import LegalPage from '../LegalPage.svelte';
	import { site } from '#lib/content/site.ts';
</script>

<Seo title="Terms & Conditions" description="Terms for using the Kamy's Delights website and booking our cleaning, laundry, catering and bakery services." />

<LegalPage title="Terms & Conditions" updated="November 2026">
	<p>These terms apply to your use of this website and to services booked with {site.legalName}.</p>
	<h2>Quotes and bookings</h2>
	<p>Information on this website is a general description of our services. The scope, price and timing of each job are confirmed with you directly, by WhatsApp, phone or in writing, before work begins.</p>
	<h2>Orders and changes</h2>
	<p>Cake and catering orders are confirmed once the details and price are agreed. Please give as much notice as possible for changes or cancellations so that we can accommodate them.</p>
	<h2>Care of items</h2>
	<p>We take great care with every item entrusted to our laundry. Please tell us about delicate fabrics, special care labels or existing damage when we collect your items.</p>
	<h2>Contact</h2>
	<p>Questions about these terms can be sent to <a href="mailto:{site.email}">{site.email}</a>.</p>
</LegalPage>
