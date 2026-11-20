<script lang="ts">
	import { acceptCookies, consent, declineCookies } from '#lib/consent.svelte.ts';
</script>

{#if consent.open}
	<div
		role="dialog"
		aria-modal="false"
		aria-labelledby="cookie-title"
		aria-describedby="cookie-body"
		class="cookie-in fixed inset-x-4 bottom-24 z-[45] rounded-2xl bg-white p-5 shadow-[0_24px_60px_-20px_rgb(61_24_77/0.45)] ring-1 ring-champagne-300 sm:right-auto sm:bottom-6 sm:left-6 sm:max-w-sm sm:p-6"
	>
		<h2 id="cookie-title" class="font-display text-xl text-ink">Cookies on this site</h2>
		<p id="cookie-body" class="mt-2 text-sm leading-relaxed text-ink/70">
			With your permission we use Microsoft Clarity cookies to see how visitors use our website, so we
			can improve it. Read more in our <a href="/legal/privacy" class="text-plum-700 underline underline-offset-2">Privacy Policy</a>.
		</p>
		<div class="mt-5 flex gap-2.5">
			<button
				type="button"
				onclick={acceptCookies}
				class="h-10 flex-1 rounded-full bg-plum-600 px-5 text-sm font-medium text-white transition-colors hover:bg-plum-700 active:scale-[0.98]"
				>Accept</button
			>
			<button
				type="button"
				onclick={declineCookies}
				class="h-10 flex-1 rounded-full px-5 text-sm font-medium text-plum-700 ring-1 ring-plum-200 transition-colors hover:bg-plum-50 active:scale-[0.98]"
				>Decline</button
			>
		</div>
	</div>
{/if}

<style>
	.cookie-in {
		animation: cookie-in 0.6s cubic-bezier(0.22, 1, 0.36, 1) both;
	}
	@keyframes cookie-in {
		from {
			opacity: 0;
			translate: 0 16px;
		}
	}
</style>
