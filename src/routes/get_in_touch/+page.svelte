<script>
    import { onMount } from "svelte";
    import { observeText } from "$lib/scripts/textAnimation";

    onMount(() => {
        observeText('top 80%', 'top 10%')
    })
</script>

<svelte:head>
    <title>Contact Us | Kamy's Delights</title>
</svelte:head>

<section class="hero py-48">
    <h1 class="text-5xl lg:text-7xl font-bold">Ready to take the step and <span class="text-primary">Get in Touch?</span></h1>
    <p class="mt-8 text-xl lg:text-2xl">We are eager to engage with you. Lets walk thruough how you can get in touch with us.</p>
</section>

<section class="pb-64 pt-16 text-light">
    <div class="grid gap-y-44 sm:grid-cols-2 text-2xl md:text-3xl">
        <div class="grid">
            <img src="/gifs/call.gif" alt="location" class="h-16 mb-6">
            <p class="">
                The fastest way to get in touch is telephone, we are on the other side of this line for any inquiries, don't hesitate to hit us up at <br><a class="text-primary font-bold" href="tel:+256754441930">+256 754 441 930</a>
            </p>
        </div>
        <div class="hidden sm:block"></div>
        <div class="hidden sm:block"></div>
        <div class="grid">
            <img src="/gifs/email.gif" alt="location" class="h-16 mb-6">
            <p class="">
                Prefer text?<br>We've also got an active email that is regularly checked, feel free to send an email  <br><a class="text-primary font-bold" href="mailto:info@kamysdelights.com">info<span>@kamysdelights.com</span></a>
            </p>
        </div>
        <div class="grid">
            <img src="/gifs/location.gif" alt="location" class="h-16 mb-6">
            <p class="">
                You can visit us at our offices if you prefer meeting someone in person, you can find us in <br><span class="text-primary font-bold">Ntinda</span> at the destination of <span class="text-primary font-bold">Stretcher Road</span>
            </p>
        </div>
    </div>
</section>



<style></style>