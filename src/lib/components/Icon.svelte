<script lang="ts" module>
	export type IconName =
		| 'whatsapp'
		| 'phone'
		| 'arrow'
		| 'arrow-up-right'
		| 'check'
		| 'map'
		| 'clock'
		| 'mail'
		| 'menu'
		| 'close'
		| 'plus'
		| 'sparkle'
		| 'truck';
</script>

<script lang="ts">
	interface Props {
		name: IconName;
		class?: string;
	}
	let { name, class: className = 'size-5' }: Props = $props();
</script>

{#if name === 'whatsapp'}
	<svg class={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
		<path
			d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2Zm0 18.15a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.23 8.23 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24s8.24 3.7 8.24 8.24-3.7 8.24-8.24 8.24Zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.78.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.23.25-.86.85-.86 2.07s.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.14-1.18-.06-.1-.22-.16-.47-.28Z"
		/>
	</svg>
{:else}
	<svg
		class={className}
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		stroke-width="1.6"
		stroke-linecap="round"
		stroke-linejoin="round"
		aria-hidden="true"
	>
		{#if name === 'phone'}
			<path
				d="M5 4h3.5l1.7 4.3-2.1 1.4a11 11 0 0 0 6.2 6.2l1.4-2.1L20 15.5V19a1.5 1.5 0 0 1-1.6 1.5A16.5 16.5 0 0 1 3.5 5.6 1.5 1.5 0 0 1 5 4Z"
			/>
		{:else if name === 'arrow'}
			<path d="M5 12h14M13 6l6 6-6 6" />
		{:else if name === 'arrow-up-right'}
			<path d="M7 17 17 7M8 7h9v9" />
		{:else if name === 'check'}
			<path d="m5 12.5 4.2 4L19 7" />
		{:else if name === 'map'}
			<path d="M12 21s-7-6.1-7-11.5a7 7 0 0 1 14 0C19 14.9 12 21 12 21Z" /><circle
				cx="12"
				cy="9.5"
				r="2.5"
			/>
		{:else if name === 'clock'}
			<circle cx="12" cy="12" r="8.5" /><path d="M12 7.5V12l3 2" />
		{:else if name === 'mail'}
			<rect x="3.5" y="5.5" width="17" height="13" rx="2" /><path d="m4 7 8 6 8-6" />
		{:else if name === 'menu'}
			<path d="M4 8h16M4 16h16" />
		{:else if name === 'close'}
			<path d="M6 6l12 12M18 6 6 18" />
		{:else if name === 'plus'}
			<path d="M12 5v14M5 12h14" />
		{:else if name === 'sparkle'}
			<path d="M12 3c.6 4.3 2.7 6.4 7 7-4.3.6-6.4 2.7-7 7-.6-4.3-2.7-6.4-7-7 4.3-.6 6.4-2.7 7-7Z" />
		{:else if name === 'truck'}
			<path d="M3 6.5h11v9H3zM14 9.5h3.5l3 3v3H14" /><circle cx="7" cy="17.5" r="1.8" /><circle
				cx="17"
				cy="17.5"
				r="1.8"
			/>
		{/if}
	</svg>
{/if}
