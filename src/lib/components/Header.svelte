<script lang="ts">
	import { page } from '$app/state';
	import { afterNavigate } from '$app/navigation';
	import { nav, site, whatsappLink, telLink } from '#lib/content/site.ts';
	import Logo from './Logo.svelte';
	import Icon from './Icon.svelte';
	import Button from './Button.svelte';

	let scrolled = $state(false);
	let hidden = $state(false);
	let open = $state(false);
	let lastY = 0;

	function onScroll() {
		const y = window.scrollY;
		scrolled = y > 12;
		// hide when scrolling down past the hero, show when scrolling up
		hidden = !open && y > 320 && y > lastY + 4;
		if (y < lastY - 4 || y < 320) hidden = false;
		lastY = y;
	}

	afterNavigate(() => (open = false));

	const isActive = (href: string) =>
		page.url.pathname === href || page.url.pathname.startsWith(href + '/');

	$effect(() => {
		document.documentElement.style.overflow = open ? 'hidden' : '';
	});
</script>

<svelte:window onscroll={onScroll} onkeydown={(e) => e.key === 'Escape' && (open = false)} />

<!-- No transform on <header> itself: a transformed ancestor would trap the fixed mobile menu inside it -->
<header class="fixed inset-x-0 top-0 z-50">
	<div
		class="relative z-10 transition-[transform,background-color,box-shadow,backdrop-filter] duration-500 ease-[var(--ease-out-soft)] {hidden
			? '-translate-y-full'
			: 'translate-y-0'} {open
			? 'bg-cream'
			: scrolled
				? 'bg-cream/80 shadow-[0_1px_0_rgb(220_207_172/0.6)] backdrop-blur-xl'
				: 'bg-transparent'}"
	>
		<div class="container-site flex h-18 items-center justify-between gap-6 lg:h-20">
			<a href="/" class="relative z-10 -ml-1 shrink-0 rounded-md p-1" aria-label="{site.name} home">
				<Logo class="h-12 w-auto lg:h-14" />
			</a>

			<nav aria-label="Main" class="hidden lg:block">
				<ul class="flex items-center gap-1">
					{#each nav as item (item.href)}
						<li>
							<a
								href={item.href}
								aria-current={isActive(item.href) ? 'page' : undefined}
								class="group relative rounded-full px-4 py-2 text-[0.92rem] font-medium text-ink/75 transition-colors hover:text-plum-700 aria-[current=page]:text-plum-700"
							>
								{item.label}
								<span
									class="absolute inset-x-4 -bottom-0.5 h-px origin-left scale-x-0 bg-crimson-500 transition-transform duration-500 ease-[var(--ease-out-soft)] group-hover:scale-x-100 group-aria-[current=page]:scale-x-100"
								></span>
							</a>
						</li>
					{/each}
				</ul>
			</nav>

			<div class="flex items-center gap-2">
				<a
					href={telLink()}
					class="hidden items-center gap-2 rounded-full px-3 py-2 text-sm font-medium text-plum-700 transition-colors hover:bg-plum-50 xl:inline-flex"
					data-track="call-header"
				>
					<Icon name="phone" class="size-4" />
					{site.phones[0].display}
				</a>
				<Button
					href={whatsappLink("Hello Kamy's Delights, I'd like to make an enquiry.")}
					icon="whatsapp"
					track="whatsapp-header"
					class="hidden sm:inline-flex">WhatsApp us</Button
				>
				<button
					type="button"
					class="relative z-10 grid size-11 place-items-center rounded-full text-plum-700 ring-1 ring-plum-200 transition-colors hover:bg-plum-50 lg:hidden"
					aria-expanded={open}
					aria-controls="mobile-menu"
					onclick={() => (open = !open)}
				>
					<span class="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
					<Icon name={open ? 'close' : 'menu'} />
				</button>
			</div>
		</div>
	</div>

	<!-- Mobile menu -->
	<div
		id="mobile-menu"
		class="fixed inset-0 overflow-y-auto bg-cream transition-[opacity,visibility] duration-400 lg:hidden {open
			? 'visible opacity-100'
			: 'invisible opacity-0'}"
		inert={!open}
	>
		<nav
			aria-label="Mobile"
			class="container-site flex min-h-full flex-col pt-32 pb-[max(2.5rem,env(safe-area-inset-bottom))]"
		>
			<ul class="flex flex-col">
				{#each nav as item, i (item.href)}
					<li
						class="border-b border-champagne-300/60 transition-all duration-500 ease-[var(--ease-out-soft)] {open
							? 'translate-y-0 opacity-100'
							: 'translate-y-3 opacity-0'}"
						style="transition-delay: {open ? 60 + i * 50 : 0}ms"
					>
						<a
							href={item.href}
							aria-current={isActive(item.href) ? 'page' : undefined}
							class="flex items-center justify-between py-5 font-display text-3xl text-ink aria-[current=page]:text-plum-600"
						>
							{item.label}
							<Icon name="arrow" class="size-5 text-mauve-500" />
						</a>
					</li>
				{/each}
			</ul>
			<div class="mt-auto grid gap-3">
				<Button
					href={whatsappLink("Hello Kamy's Delights, I'd like to make an enquiry.")}
					icon="whatsapp"
					size="lg"
					track="whatsapp-menu">WhatsApp us</Button
				>
				<Button href={telLink()} variant="secondary" icon="phone" size="lg" track="call-menu"
					>Call {site.phones[0].display}</Button
				>
				<p class="mt-2 text-center text-sm text-mauve-600">{site.hours.display}</p>
			</div>
		</nav>
	</div>
</header>
