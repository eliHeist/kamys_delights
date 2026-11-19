<script lang="ts">
	// Renders nothing. Mounted by the root layout inside {#key page.url.pathname}, so every
	// navigation reverts the previous page's reveals and runs them for the new page.
	import { useReveals } from './reveals.ts';

	useReveals();
</script>
