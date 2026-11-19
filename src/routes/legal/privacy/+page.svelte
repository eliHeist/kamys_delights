<script lang="ts">
	import Seo from '#lib/components/Seo.svelte';
	import LegalPage from '../LegalPage.svelte';
	import { site } from '#lib/content/site.ts';
</script>

<Seo title="Privacy Policy" description="How Kamy's Delights Ltd handles personal information shared through this website, WhatsApp and phone." />

<LegalPage title="Privacy Policy" updated="November 2026">
	<p>{site.legalName} ("we", "us") respects your privacy. This policy explains what information we collect when you use this website or contact us, and how we use it.</p>
	<h2>Information we collect</h2>
	<p>This website has no accounts and no forms that store data on our servers. When you contact us by WhatsApp, phone or email, we receive the details you choose to share, such as your name, phone number, location and the service you need.</p>
	<p>We may use privacy-friendly analytics to count page visits and clicks on contact buttons. This data is aggregated and does not identify you personally.</p>
	<h2>How we use it</h2>
	<p>We use your details only to reply to your enquiry, prepare quotes, and deliver and follow up on the services you book. We do not sell or rent your information.</p>
	<h2>Third parties</h2>
	<p>Messages sent through WhatsApp are handled under WhatsApp's own privacy policy. Links to Google Maps open Google's services.</p>
	<h2>Your rights</h2>
	<p>You may ask us to access, correct or delete the personal information we hold about you, in line with Uganda's Data Protection and Privacy Act, 2019. Contact us at <a href="mailto:{site.email}">{site.email}</a>.</p>
</LegalPage>
