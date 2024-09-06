<script lang="ts">
	import Header from '$lib/header.svelte';
	import '../styles/main.scss';
	import Lenis from 'lenis';
	import { onMount } from 'svelte';
	import { slideIn, fadeIn } from '$lib/scripts/textAnimation';
	import Footer from '$lib/footer.svelte';
	import { isLoading } from '$lib/stores/loading';

	onMount(() => {
		slideIn();
		fadeIn();

		// lenis
		const lenis = new Lenis();

		function raf(time: any) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}

		requestAnimationFrame(raf);
	});

	let loading = false;

	// Subscribe to the loading store
	$: isLoading.subscribe((value) => {
		loading = value;
	});

	// Simulate page loading using SvelteKit hooks
	export let data;
</script>

<Header />

<div class="content-grid">
	{#if loading}
		<div class="loader">
			<!-- Your custom loader goes here -->
			<p>Loading...</p>
		</div>
	{/if}
	<slot />
</div>

<Footer />

<style lang="scss">
	@import '../styles/main.scss';
	.loader {
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: rgba(255, 255, 255, 0.9);
		z-index: 999;
	}
</style>
