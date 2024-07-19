<!-- ====== Navbar Section Start -->
<header class="flex items-center w-full">
	<div class="container mx-auto px-4">
		<div class="relative flex items-center justify-between -mx-4">
			<!-- logo -->
			<div class="max-w-full px-4 w-60">
				<a href="javascript:void(0)" class="block w-full py-1">
					<img src="/images/logo.png" alt="logo" class="" />
				</a>
			</div>
			<div class="flex items-center justify-between w-full px-4">
				<div>
					<button id="navbarToggler" class="absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden" >
						<span class="relative rounded-full my-[6px] block h-[3px] w-[30px] bg-black"></span>
						<span class="relative rounded-full my-[6px] block h-[3px] w-[30px] bg-black"></span>
						<span class="relative rounded-full my-[6px] block h-[3px] w-[30px] bg-black"></span>
					</button>
					<!-- nav menu -->
					<nav
						id="navbarCollapse"
						class="absolute hidden right-4 top-full w-full max-w-[250px] rounded-lg bg-white py-5 px-6 shadow lg:static lg:block lg:w-full lg:max-w-full lg:shadow-none dark:bg-dark-2 lg:dark:bg-transparent"
					>
						<ul class="hidden lg:flex text-lg">
							<li>
								<a href="/" class="flex py-2 font-medium text-body-color hover:text-primary lg:ml-12 lg:inline-flex">
									Home
								</a>
							</li>
							<li>
								<a href="javascript:void(0)" class="flex py-2 font-medium text-body-color hover:text-primary lg:ml-12 lg:inline-flex">
									Catering
								</a>
							</li>
							<li>
								<a href="javascript:void(0)" class="flex py-2 font-medium text-body-color hover:text-primary lg:ml-12 lg:inline-flex">
									Cleaning
								</a>
							</li>
							<li>
								<a href="javascript:void(0)" class="flex py-2 font-medium text-body-color hover:text-primary lg:ml-12 lg:inline-flex">
									Equipment Supply
								</a>
							</li>
							<li>
								<a href="javascript:void(0)" class="flex py-2 font-medium text-body-color hover:text-primary lg:ml-12 lg:inline-flex">
									Laundry Service
								</a>
							</li>
						</ul>
					</nav>
				</div>
				<!-- cta -->
				<div class="justify-end hidden pr-16 sm:flex lg:pr-0">
					<a
						href="javascript:void(0)"
						class="py-3 text-base font-medium text-white rounded-md bg-primary px-7 hover:bg-primary/90"
					>
						Get in Touch
					</a>
				</div>
			</div>
		</div>
	</div>
</header>
<!-- ====== Navbar Section End -->

<slot />

<footer class="bg-primary text-white py-24">
	<div class="container mx-auto px-4">
		<div class="grid gap-y-4 md:grid-cols-3 justify-center md:justify-items-center">
			<div class="w-fit mb-4 sm:mb-0">
				<h3 class="text-lg font-semibold mb-2">Location</h3>
				<p>Ntinda, Stretcher Road</p>
			</div>
			<div class="w-fit mb-4 sm:mb-0">
				<h3 class="text-lg font-semibold mb-2">Email</h3>
				<a href="mailto:kamysdelightslimited@gmail.com" class="hover:text-gray-300">kamysdelightslimited@gmail.com</a>
			</div>
			<div class="w-fit">
				<h3 class="text-lg font-semibold mb-2">Contact</h3>
				<p>Phone: <a href="tel:+256754441930">+256 754 441 930</a></p>
			</div>
		</div>
		<div class="mt-8 text-center">
			<p>&copy; 2024 DakDot. All rights reserved.</p>
		</div>
	</div>
</footer>

<style lang="scss">
	@import '../styles/main.scss';
</style>
