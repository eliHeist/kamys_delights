<script lang="ts">
	import Seo from '#lib/components/Seo.svelte';
	import LegalPage from '../LegalPage.svelte';
	import { site, telLink } from '#lib/content/site.ts';
	import { CLARITY_ID, openCookieSettings } from '#lib/consent.svelte.ts';

</script>

<Seo
	title="Privacy Policy"
	description="How Kamy's Delights Ltd collects, uses and protects personal information shared through our website, WhatsApp, phone and email, in line with Uganda's Data Protection and Privacy Act, 2019."
/>

<LegalPage title="Privacy Policy" updated="20 November 2026">
	<p>
		{site.legalName} ("Kamy's Delights", "we", "us") respects your privacy. This policy explains what
		personal information we collect when you visit www.kamysdelights.com or contact us, how we use it,
		and the rights you have under Uganda's Data Protection and Privacy Act, 2019.
	</p>

	<h2>Who we are</h2>
	<p>
		{site.legalName} provides cleaning and facility management, laundry and dry cleaning, and catering
		and bakery services in and around Kampala. We decide how and why your personal information is
		used, which makes us the data controller for it.
	</p>
	<ul>
		{#each site.locations as loc (loc.id)}
			<li>{loc.name}: {loc.street}{#if loc.landmark}, {loc.landmark}{/if}, {loc.locality}</li>
		{/each}
		<li>Email: <a href="mailto:{site.email}">{site.email}</a></li>
		<li>
			Phone:
			{#each site.phones as p, i (p.e164)}<a href={telLink(i)}>{p.display}</a
				>{#if i < site.phones.length - 1}{' or '}{/if}{/each}
		</li>
	</ul>

	<h2>Information we collect</h2>
	<h3>Information you give us</h3>
	<p>When you contact us by WhatsApp, phone or email, or book a service, we receive the details you choose to share, such as:</p>
	<ul>
		<li>your name and phone number</li>
		<li>your address or location, so we can visit, collect laundry or deliver</li>
		<li>details of the service you need, such as the space to be cleaned, the items to be laundered, or the date, guest numbers and dietary needs for an event or cake</li>
		<li>photos or messages you send us about the job</li>
	</ul>
	<p>
		The message builder on our Contact page does not send anything to us. It writes the text into a
		WhatsApp message on your own device, and nothing is shared until you press send in WhatsApp.
	</p>

	<h3>Information collected when you use the website</h3>
	<p>
		Our website is hosted by Vercel. Like most web hosts, Vercel records basic technical information
		about requests to the site, such as IP address, browser type and the time of the visit, to keep
		the site running and secure.
	</p>
	<p>
		If you accept cookies, we also use Microsoft Clarity to understand how visitors use the site.
		Clarity records how you interact with our pages, such as clicks, scrolling and mouse movement, and
		can produce session replays and heatmaps. It also collects device and browser information and an
		approximate location. We use this only in aggregate to improve the website. If you decline, Clarity
		is not loaded.
	</p>

	<h2>How we use your information</h2>
	<ul>
		<li>to reply to your enquiries and prepare quotes</li>
		<li>to schedule, carry out and follow up on the services you book, including laundry pick-up and delivery</li>
		<li>to keep business and financial records we are required to keep by law</li>
		<li>to keep the website secure and, with your consent, to improve it</li>
	</ul>
	<p>
		We process your information because you have asked us to provide a service, because you have
		given your consent (for example, to Clarity cookies), or because the law requires us to keep
		certain records. We do not sell or rent your personal information, and we do not use it for
		advertising.
	</p>

	<h2>Who we share it with</h2>
	<p>We share personal information only where needed, with:</p>
	<ul>
		<li>our own staff and riders who need your details to carry out your booking</li>
		<li>WhatsApp (Meta), which carries the messages you send us</li>
		<li>Microsoft, which provides Clarity, if you accept cookies</li>
		<li>Vercel, which hosts this website</li>
		<li>government or law-enforcement bodies, where the law requires it</li>
	</ul>
	<p>
		Links to Google Maps open Google's own services, which are covered by Google's privacy policy.
	</p>

	<h2>Storage outside Uganda</h2>
	<p>
		Some of the service providers listed above store or process information on servers outside
		Uganda. We use established providers that protect personal information, and we share only what is
		needed for the purpose.
	</p>

	<h2 id="cookies">Cookies</h2>
	<p>
		Our website does not set any cookies of its own. If you choose "Accept" on the cookie notice,
		Microsoft Clarity sets cookies, including <code>_clck</code> and <code>_clsk</code>, to recognise
		returning visitors and link page views into a single session, plus related Microsoft cookies. If
		you choose "Decline", Clarity is not loaded and no cookies are set.
	</p>
	<p>
		We remember your choice in your browser's local storage. You can change it at any time{#if CLARITY_ID}
			using <button type="button" class="legal-button" onclick={openCookieSettings}>Cookie settings</button>, which is also at the bottom of every page{:else}
			from "Cookie settings" at the bottom of every page{/if}. If you withdraw consent, we ask Clarity to
		erase its cookies on your device.
	</p>

	<h2>How long we keep it</h2>
	<p>
		We keep enquiry and booking information only for as long as we need it to provide and follow up on
		our services, and business and financial records for as long as Ugandan law requires. Clarity data
		is kept by Microsoft under its own retention rules.
	</p>

	<h2>How we protect it</h2>
	<p>
		We limit access to personal information to the people who need it to do their work, and we take
		reasonable steps to protect it from loss, misuse and unauthorised access.
	</p>

	<h2>Your rights</h2>
	<p>Under the Data Protection and Privacy Act, 2019, you have the right to:</p>
	<ul>
		<li>ask what personal information we hold about you and get a copy of it</li>
		<li>ask us to correct information that is wrong or incomplete</li>
		<li>ask us to delete your information, unless we must keep it by law</li>
		<li>object to our use of your information</li>
		<li>withdraw your consent at any time, including for cookies</li>
	</ul>
	<p>
		To use any of these rights, email <a href="mailto:{site.email}">{site.email}</a>. If you are
		not satisfied with our response, you can complain to the Personal Data Protection Office at
		<a href="https://pdpo.go.ug" target="_blank" rel="noopener">pdpo.go.ug</a>.
	</p>

	<h2>Children</h2>
	<p>
		Our services are booked by adults. We do not knowingly collect personal information from children
		through this website.
	</p>

	<h2>Changes to this policy</h2>
	<p>
		We may update this policy from time to time. The date at the top shows when it was last changed.
	</p>

	<h2>Contact us</h2>
	<p>
		Questions about this policy or your personal information can be sent to
		<a href="mailto:{site.email}">{site.email}</a>.
	</p>
</LegalPage>
