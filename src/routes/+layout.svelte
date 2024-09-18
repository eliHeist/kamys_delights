<script lang="ts">
	import Header from '$lib/header.svelte';
	import '../styles/main.scss';
	import Lenis from 'lenis';
	import { onMount } from 'svelte';
	import { slideIn, fadeIn } from '$lib/scripts/textAnimation';
	import Footer from '$lib/footer.svelte';
	import { isLoading } from '$lib/stores/loading';

    import { beforeNavigate, afterNavigate } from "$app/navigation";

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
    let loader = false;

    beforeNavigate(() => {
        loader = true;
    })

    afterNavigate(() => {
        loader = false
    })
    

</script>

<Header />

{#key data.url}
<div class="content-grid">
    <div id="loader" class="loader" class:hide={!loader}>
    </div>
	<slot />
</div>
{/key}

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
		background-color: rgba(243, 239, 242, 0); /* Semi-transparent background */
        backdrop-filter: blur(1px);
		z-index: 999;
        pointer-events: all;
        opacity: 1;
        transition: opacity 1s ease-in-out;

        &.hide {
            opacity: 0;
            pointer-events: none;
        }
	}
</style>
