<script lang="ts">

	let { steps }: { steps: { title: string; body: string }[] } = $props();
</script>

<ol class="relative grid gap-10 {steps.length > 3 ? 'md:grid-cols-4' : 'md:grid-cols-3'} md:gap-8">
	<span
		aria-hidden="true"
		class="absolute top-6 right-[12%] left-[12%] hidden h-px bg-[repeating-linear-gradient(90deg,var(--color-champagne-500)_0_6px,transparent_6px_12px)] md:block"
	></span>
	{#each steps as step, i (step.title)}
		<li data-reveal="rise" data-reveal-delay={i * 120} class="relative">
			<span
				class="relative grid size-12 place-items-center rounded-full bg-white font-display text-lg text-plum-600 shadow-[0_8px_24px_-10px_rgb(95_40_118/0.4)] ring-1 ring-champagne-300"
				>{i + 1}</span
			>
			<h3 class="mt-6 text-2xl text-ink">{step.title}</h3>
			<p class="mt-2 leading-relaxed text-ink/65">{step.body}</p>
		</li>
	{/each}
</ol>
