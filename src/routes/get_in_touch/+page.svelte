<script>
    import { onMount } from "svelte";
    import { observeText } from "$lib/scripts/textAnimation";

    onMount(() => {
        observeText('top 80%', 'top 60%')
    })
</script>

<section class="hero py-48">
    <h1 class="text-5xl lg:text-7xl font-bold">Ready to take the step and <span class="text-primary">Get in Touch?</span></h1>
    <p class="mt-8 text-xl lg:text-2xl">We are eager to engage with you. Use the information below to get in touch.</p>
</section>

<section class="pb-64 pt-16">
    <div class="grid gap-y-44 sm:grid-cols-2 text-2xl md:text-3xl">
        <div class="grid">
            <p class=" reveal-type">
                The fastest way to get in touch is telephone, we are on the other side of this line for any inquiries, don't hesitate to hit us up at <br><a class="text-primary font-bold" href="tel:+256754441930">+256 754 441 930</a>
            </p>
        </div>
        <div class="hidden sm:block"></div>
        <div class="hidden sm:block"></div>
        <div class="grid">
            <p class=" reveal-type">
                Prefer text?<br>We've also got an active email that is regularly checked, feel free to send an email  <br><a class="text-primary font-bold" href="mailto:kamysdelightslimited@gmail.com">kamysdelightslimited <span>@gmail.com</span></a>
            </p>
        </div>
        <div class="grid">
            <svg class="fill-secondary h-16 mx-auto hidden" viewBox="0 0 60 60">
                <path
                    d="M30 3.75C24.5319 3.75645 19.2896 5.93151 15.4231 9.79805C11.5565 13.6646 9.38146 18.9069 9.37501 24.375C9.36999 28.8433 10.8295 33.1901 13.53 36.75C13.53 36.75 14.0925 37.4906 14.1844 37.5975L30 56.25L45.8231 37.5881C45.9056 37.4888 46.47 36.75 46.47 36.75L46.4719 36.7444C49.1706 33.1858 50.6294 28.8412 50.625 24.375C50.6186 18.9069 48.4435 13.6646 44.577 9.79805C40.7104 5.93151 35.4681 3.75645 30 3.75ZM30 31.875C28.5167 31.875 27.0666 31.4351 25.8332 30.611C24.5999 29.7869 23.6386 28.6156 23.0709 27.2451C22.5033 25.8747 22.3547 24.3667 22.6441 22.9118C22.9335 21.457 23.6478 20.1206 24.6967 19.0717C25.7456 18.0228 27.082 17.3085 28.5368 17.0191C29.9917 16.7297 31.4997 16.8782 32.8701 17.4459C34.2406 18.0136 35.4119 18.9749 36.236 20.2082C37.0601 21.4416 37.5 22.8916 37.5 24.375C37.4975 26.3634 36.7066 28.2696 35.3006 29.6756C33.8946 31.0815 31.9884 31.8725 30 31.875Z"
                />
            </svg>
            <p class=" reveal-type">
                You can visit us at our offices if you prefer meeting someone in person, you can find us in <br><span class="text-primary font-bold">Ntinda</span> along <span class="text-primary font-bold">Stretcher Road</span>
            </p>
        </div>
    </div>
</section>

<style></style>