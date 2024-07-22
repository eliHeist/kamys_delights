<script lang="ts">
    let sm_nav_state = false

    function toggleNav() {
		sm_nav_state = !sm_nav_state;
	}
</script>

<!-- ====== Navbar Section Start -->
<header class="items-center w-full content-grid">
	<div class="breakout">
		<div class="relative flex items-center justify-between">
			<!-- logo -->
			<div class="max-w-full px-4 w-fit">
				<a href="javascript:void(0)" class="block w-full py-1">
					<img src="/images/logo.png" alt="logo" class="h-16" />
				</a>
			</div>
            <div>
                <!-- nav menu -->
                <nav class:hidden={!sm_nav_state} id="navbarCollapse" class="absolute z-10 right-4 top-full w-full max-w-[250px] rounded-b-lg bg-white py-5 px-6 shadow lg:static lg:block lg:w-full lg:max-w-full lg:shadow-none dark:bg-dark-2 lg:dark:bg-transparent" >
                    <ul class="lg:flex lg:gap-8 text-lg">
                        <li>
                            <a href="/" class="flex py-2 font-medium text-body-color hover:text-primary lg:inline-flex" on:click={toggleNav}>
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="/catering/" class="flex py-2 font-medium text-body-color hover:text-primary lg:inline-flex" on:click={toggleNav}>
                                Catering
                            </a>
                        </li>
                        <li>
                            <a href="/cleaning/" class="flex py-2 font-medium text-body-color hover:text-primary lg:inline-flex" on:click={toggleNav}>
                                Cleaning
                            </a>
                        </li>
                        <li>
                            <a href="/supplies/" class="flex py-2 font-medium text-body-color hover:text-primary lg:inline-flex" on:click={toggleNav}>
                                Equipment Supply
                            </a>
                        </li>
                        <li>
                            <a href="/laundry_care/" class="flex py-2 font-medium text-body-color hover:text-primary lg:inline-flex" on:click={toggleNav}>
                                Laundry Care
                            </a>
                        </li>
                        <li>
                            <a href="/get_in_touch/" class="flex md:hidden py-2 font-medium text-body-color hover:text-primary" on:click={toggleNav}>
                                Get in Touch
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
            <!-- cta -->
            <div class="justify-end flex gap-x-4 sm:gap-x-24 lg:pr-0 w-max">
                <a href="/get_in_touch/" class="hidden md:block py-3 text-base font-medium text-white rounded-md bg-primary px-7 hover:bg-primary/90">
                    Get in Touch
                </a>

                <button title="Menu button" class="hamburger-btn grid grid-flow-col lg:hidden z-50" aria-expanded={sm_nav_state} on:click={toggleNav}>
                    <svg class="hamburger w-10" fill="none" viewbox="-10 -10 120 120">
                        <path class="line" d="m 20 40 h 60 a 1 1 0 0 1 0 20 h -60 a 1 1 0 0 1 0 -40 h 30 v 70"></path>
                    </svg>
                </button>
            </div>
		</div>
	</div>
</header>
<!-- ====== Navbar Section End -->

<style lang="scss">
    .hamburger-btn{
        svg{
            stroke: red;
            stroke-width: 8;
            stroke-linecap: round;
            stroke-linejoin: round;
            transition: translate .5s, rotate .5s;
        }
        .line{
            stroke-dasharray: 60 31 60 300;
            transition: .5s;
        }
        &[aria-expanded="true"] .hamburger{
            translate: 2px -3px;
            rotate: .125turn;
        }
        &[aria-expanded="true"] .line{
            stroke-dasharray: 60 105 60 300;
            stroke-dashoffset: -90;
        }
    }
</style>

