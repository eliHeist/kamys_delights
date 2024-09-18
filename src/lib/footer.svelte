<script lang="ts">
    const year = new Date().getFullYear()
</script>

<footer class="bg-black">
	<div class="mx-auto w-full max-w-screen-xl">
		<div class="grid grid-cols-2 gap-8 px-4 py-8 lg:py-16 md:grid-cols-4">
			<div>
				<h2 class="mb-6 text-sm font-semibold uppercase text-white">Cleaning</h2>
				<ul class="text-dark-300 font-medium">
					<li class="mb-4">
						<a href="/cleaning" class=" hover:underline">Regular Cleaning</a>
					</li>
					<li class="mb-4">
						<a href="/cleaning" class="hover:underline">Fumigation</a>
					</li>
					<li class="mb-4">
						<a href="/cleaning" class="hover:underline">Waste Management</a>
					</li>
					<li class="mb-4">
						<a href="/supplies" class="hover:underline">Cleaning equipment</a>
					</li>
				</ul>
			</div>
			<div>
				<h2 class="mb-6 text-sm font-semibold uppercase text-white">
					Catering
				</h2>
				<ul class="text-dark-300 font-medium">
					<li class="mb-4">
						<a href="/catering" class="hover:underline">Event Catering</a>
					</li>
					<li class="mb-4">
						<a href="/catering" class="hover:underline">Bakery</a>
					</li>
					<li class="mb-4">
						<a href="/supplies" class="hover:underline">Kitchen supplies</a>
					</li>
					<li class="mb-4">
						<a href="#" class="hover:underline">Contact Us</a>
					</li>
				</ul>
			</div>
			<div>
				<h2 class="mb-6 text-sm font-semibold uppercase text-white">Contact</h2>
				<ul class="text-dark-300 font-medium">
					<li class="mb-4">
						<a href="#" class="hover:underline flex gap-2 items-center">
                            <svg class="fill-dark-300 h-4" viewBox="0 0 60 60">
                                <path d="M30 3.75C24.5319 3.75645 19.2896 5.93151 15.4231 9.79805C11.5565 13.6646 9.38146 18.9069 9.37501 24.375C9.36999 28.8433 10.8295 33.1901 13.53 36.75C13.53 36.75 14.0925 37.4906 14.1844 37.5975L30 56.25L45.8231 37.5881C45.9056 37.4888 46.47 36.75 46.47 36.75L46.4719 36.7444C49.1706 33.1858 50.6294 28.8412 50.625 24.375C50.6186 18.9069 48.4435 13.6646 44.577 9.79805C40.7104 5.93151 35.4681 3.75645 30 3.75ZM30 31.875C28.5167 31.875 27.0666 31.4351 25.8332 30.611C24.5999 29.7869 23.6386 28.6156 23.0709 27.2451C22.5033 25.8747 22.3547 24.3667 22.6441 22.9118C22.9335 21.457 23.6478 20.1206 24.6967 19.0717C25.7456 18.0228 27.082 17.3085 28.5368 17.0191C29.9917 16.7297 31.4997 16.8782 32.8701 17.4459C34.2406 18.0136 35.4119 18.9749 36.236 20.2082C37.0601 21.4416 37.5 22.8916 37.5 24.375C37.4975 26.3634 36.7066 28.2696 35.3006 29.6756C33.8946 31.0815 31.9884 31.8725 30 31.875Z" />
                            </svg>
                            <span>Ntinda, Stretcher Road</span>
                        </a>
					</li>
					<li class="mb-4">
						<a href="mailto:kamysdelightslimited@gmail.com" class="hover:underline flex gap-2 items-center">
                            <svg class="fill-dark-300 h-4" viewBox="0 0 60 60">
                                <path d="M22.5 26.2502H37.5C38.3288 26.2502 39 25.5789 39 24.7502V23.2502C39 22.4214 38.3288 21.7502 37.5 21.7502H22.5C21.6712 21.7502 21 22.4214 21 23.2502V24.7502C21 25.5789 21.6712 26.2502 22.5 26.2502ZM21 33.7501C21 34.5789 21.6712 35.2501 22.5 35.2501H37.5C38.3288 35.2501 39 34.5789 39 33.7501V32.2501C39 31.4214 38.3288 30.7501 37.5 30.7501H22.5C21.6712 30.7501 21 31.4214 21 32.2501V33.7501ZM30 45.106C28.4606 45.106 26.9212 44.6316 25.6069 43.6819L6 29.5183V49.5C6 51.9853 8.01469 54 10.5 54H49.5C51.9853 54 54 51.9853 54 49.5V29.5183L34.3931 43.6819C33.0787 44.6307 31.5394 45.106 30 45.106ZM52.2759 21.2768C51.4462 20.6261 50.6597 20.014 49.5 19.1383V15.0002C49.5 12.5149 47.4853 10.5003 45 10.5003H37.7297C37.4447 10.294 37.1794 10.1009 36.8822 9.88527C35.3063 8.73496 32.175 5.96748 30 6.00029C27.825 5.96748 24.6947 8.73496 23.1178 9.88527C22.8206 10.1009 22.5553 10.294 22.2703 10.5003H15C12.5147 10.5003 10.5 12.5149 10.5 15.0002V19.1383C9.34031 20.013 8.55375 20.6261 7.72406 21.2768C7.18702 21.6976 6.75273 22.2351 6.45404 22.8486C6.15536 23.462 6.00009 24.1354 6 24.8177L6 25.8161L15 32.3176V15.0002H45V32.3176L54 25.8161V24.8177C54 23.4358 53.3644 22.1299 52.2759 21.2768Z" />
                            </svg>
                            <span>info@kamysdelights.com</span>
                        </a>
					</li>
					<li class="mb-4">
						<a href="tel:+256754441930" class="hover:underline flex gap-2 items-center">
                            <svg class="fill-dark-300 h-4" viewBox="0 0 60 60">
                                <path d="M52.5 38.65L39.325 37.125L33.025 43.425C25.928 39.8156 20.1594 34.047 16.55 26.95L22.875 20.625L21.35 7.5H7.575C6.125 32.95 27.05 53.875 52.5 52.425V38.65Z" />
                            </svg>
                            <span>+256 754 441 930</span>
                        </a>
					</li>
				</ul>
			</div>
			<div>
				<h2 class="mb-6 text-sm font-semibold uppercase text-white">Company</h2>
				<ul class="text-dark-300 font-medium">
					<li class="mb-4">
						<a href="/" class="hover:underline">Home</a>
					</li>
					<li class="mb-4">
						<a href="/get_in_touch" class="hover:underline">Contact Us</a>
					</li>
                    <li class="mb-4">
						<a href="/legal/privacy" class="hover:underline">Privacy Policy</a>
					</li>
                    <li class="mb-4">
						<a href="/legal/terms" class="hover:underline">Terms &amp; Conditions</a>
					</li>
				</ul>
			</div>
		</div>
		<div class="px-4 py-6 bg-dark-950 md:flex md:items-center md:justify-around">
			<span class="text-sm text-dark-300 sm:text-center">© <span>{year}</span> <a href="https://dakdot.mechbrifauto.com/">Kamy's Delights</a>. All Rights Reserved.
			</span>
			<div class="hidden mt-4 sm:justify-center md:mt-0 space-x-5">
				<a href="#" class="text-dark-300 fill-dark-300 hover:text-white hover:fill-white">
					<svg
						class="w-4 h-4"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						fill="currentColor"
						viewBox="0 0 8 19"
					>
						<path
							fill-rule="evenodd"
							d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
							clip-rule="evenodd"
						/>
					</svg>
					<span class="sr-only">Facebook page</span>
				</a>
				<a href="#" class="text-dark-300 fill-dark-300 hover:text-white hover:fill-white">
					<svg
						class="w-4 h-4"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						fill="currentColor"
						viewBox="0 0 20 17"
					>
						<path
							fill-rule="evenodd"
							d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z"
							clip-rule="evenodd"
						/>
					</svg>
					<span class="sr-only">Twitter page</span>
				</a>
			</div>
		</div>
	</div>
</footer>
